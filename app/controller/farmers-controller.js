const db = require("../models");
const NewFarmers = db.newFarmers;
const {objectId} = require("mongodb");


// Post api for farmer..!
exports.CreateFarmers = async (req,res) => {
    const {FirstName,LastName,OwnerType,Address,FarmingSeason,CropType,Crop_SubType,plotArea,FarmerId} = req.body
    try {
        const Farmersdetails = new NewFarmers ({
            FirstName,
            LastName,
            OwnerType,
            Address,
            FarmingSeason,
            CropType,
            Crop_SubType,
            plotArea,
            FarmerId
        })

        Farmersdetails 
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
                    message: "Something went wrong.you might missed any of fields please check it ...",
                    error,
                })
            })
    } catch (err) {
        console.log(err)
        res.status(401).json({
            message: err
        })
    }
}


// Edit/update farmer api ...!
exports.updateFarmers = async (req,res) => {
    try {
        const EditFarmer = await NewFarmers.findOneAndUpdate({FarmerId: req.params.farmerId},{
            $set:{
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                OwnerType: req.body.OwnerType,
                Address: req.body.Address,
                FarmingSeason: req.body.FarmingSeason,
                CropType: req.body.CropType,
                Crop_SubType: req.body.Crop_SubType,
                plotArea: req.body.plotArea,
                FarmerId: req.body.FarmerId
            }
        },{new: true})
        return res.status(200).json({
                updated: "updated successfully",
                EditFarmer
            })
    }catch (err) {
        return res.status(400).json({
            error : err
        })
    }
}


// Get api for List for farmers...!
exports.GetFarmers = async (req,res) => {
    try{
        const getfarmer = await NewFarmers.find({})
        if (getfarmer){
            return res.status(201).json({
                status: true,
                message: `here are your ${getfarmer.length} data` ,
                getfarmer
            })
        }else {
            return res.status(400).json({
                status: false,
                message: "your data is not available.." , 
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



// get api by Farmer id ...
exports.getFarmersName = async (req,res) => {
    try {
        const getfarmername = await NewFarmers.findOne({FarmerId: req.params.FarmerId})
        console.log(getfarmername,"ggggggg")
        if (getfarmername){
            return res.status(201).json({
                status: true,
                message: getfarmername
            })
        }else{
            return res.status(400).json({
                status: false,
                message: "farmer not available ..!"
            })
        }
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            error: err
        })
    }
}


// delete api for Farmers...!
exports.deleteFarmer = async (req,res) => {
    try {
        const farmer_details = await NewFarmers.deleteOne({_id: req.params._id})
        console.log(farmer_details,"dddddddd")
        if (farmer_details){
            return res.status(200).json({
                deleted: "farmer deleted successfully"
            })
        }else {
            return res.status(404).json({
                message: "your data is not available.."
            })
        }
    }catch (err){
        console.log(err)
        return res.status(400).json({
            error : err
        })
    }
}