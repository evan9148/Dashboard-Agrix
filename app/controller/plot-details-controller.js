const db = require("../models");
const NewPlot = db.newPlot;
const {objectId} = require("mongodb");


// Post api for plot-details...!
exports.Createplotdetails = async (req,res) => {
    const {FarmerName,Location,Village,District,Latitude,Long,Area_of_Plot,Perimeter_of_Plot,PlotShape,SoilType,WaterSource,plotid} = req.body
    try {
        const Plotdetails = new NewPlot ({
            FarmerName,
            Location,
            Village,
            District,
            Latitude,
            Long,
            Area_of_Plot,
            Perimeter_of_Plot,
            PlotShape,
            SoilType,
            // Nutrient_Content_Analysis,
            WaterSource,
            plotid
        })

        Plotdetails 
            .save()
            .then((data) => { 
                console.log(data)
                return res.status(201).json({
                    status: true,
                    message: "successfully created....!",
                    data,
                });
            })
            .catch((error) => {
                console.log(error);
                return res.status(400).json({
                    status: false,
                    message: "Something went wrong. your name is repeated..",
                    error,
                })
            })
    } catch (err) {
        res.status(401).json({
            message: err
        })
    }
}


// Edit/update plot-details api ...!
exports.updatePlot = async (req,res) => {
    try {
        const EditPlot = await NewPlot.findOneAndUpdate({_id: req.params.plotId},{
            $set:{
                FarmerName: req.body.FarmerName,
                Location: req.body.Location,
                Village: req.body.Village,
                District: req.body.District,
                Latitude: req.body.Latitude,
                Long: req.body.Long,
                Area_of_Plot: req.body.Area_of_Plot,
                Perimeter_of_Plot: req.body.Perimeter_of_Plot,
                PlotShape: req.body.PlotShape,
                SoilType: req.body.SoilType,
                // Nutrient_Content_Analysis: req.body.Nutrient_Content_Analysis,
                WaterSource: req.body.WaterSource,
                plotid: req.body.plotid
            }
        },{new: true})
        // console.log(req.params.id,"eeeee")
        return res.status(200).json({
                updated: "updated successfully",
                EditPlot
            })
    }catch (err) {
        return res.status(400).json({
            error : err
        })
    }
}


// Get api for List for plot-details...!
exports.GetPlot = async (req,res) => {
    try{
        const getplot = await NewPlot.find({})
        if (getplot){
            return res.status(201).json({
                status: true,
                message: `here are your ${getplot.length} data` ,
                getplot
            })
        }else {
            return res.status(400).json({
                status: false,
                message: "your cluster is not available.." , 
                    err
            })
        }
    }catch (err){
        console.log(err)
        return res.status(404).json({
            error: err
        })
    }
}


// get api by plotId for plot details...!
exports.getPlotId = async (req,res) => {
    try {
        const getplotid = await NewPlot.findOne({plotid: req.params.plotid})
        console.log(getplotid,"ggggggg")
        if (getplotid){
            return res.status(201).json({
                status: true,
                message: getplotid
            })
        }else{
            return res.status(400).json({
                status: false,
                message: "plot is not available ..!"
            })
        }
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            error: err
        })
    }
}



// delete api for plot-details...!
exports.deleteplot_details = async (req,res) => {
    try {
        const plot_details = await NewPlot.deleteOne({_id: req.params._id})
        console.log(plot_details, "pppp")
        if (plot_details){
            return res.status(201).json({
                deleted: "plot deleted successfully"
            })
        }
    }catch (err){
        console.log(err)
        return res.status(400).json({
            error : err
        })
    }
} 