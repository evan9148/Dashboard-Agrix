const db = require("../models");
const NewCluster = db.newCluster;
const {objectId} = require("mongodb");
const cluster = require("../models/cluster");

//  Post api for Cluster..!
exports.CreateCluster = async (req,res) => {
    const {ClusterCode,clusterid,ClusterManager,AddVillages,District,State,OfficeAddress,ContactDetails,ClusterLevelStat: 
        [{
            CustomerStat,
            Sales,
            Purchase,
            Expenditure,
            HR_basic_details,
            Lead_Details
        }]} = req.body
    try {
        const Clusterdetails = new NewCluster ({
            ClusterCode,
            clusterid,
            ClusterManager,
            AddVillages,
            District,
            State,
            OfficeAddress,
            ContactDetails,
            ClusterLevelStat: [{
                CustomerStat,
                Sales,
                Purchase,
                Expenditure,
                HR_basic_details,
                Lead_Details
            }]
        })

        Clusterdetails 
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
        res.status(401).json({
            message: err
        })
    }
}


// Edit/update cluster api ...!
exports.updateCluster = async (req,res) => {
    try {
        const EditCluster = await NewCluster.findOneAndUpdate({_id: req.params.idcluster},{
            $set:{
                ClusterCode: req.body.ClusterCode,
                clusterid: req.body.clusterid,
                ClusterManager: req.body.ClusterManager,
                AddVillages: req.body.AddVillages,
                District: req.body.District,
                State: req.body.State,
                OfficeAddress: req.body.OfficeAddress,
                ContactDetails: req.body.ContactDetails,
                ClusterLevelStat: [{
                    CustomerStat: req.body.CustomerStat,
                    Sales: req.body.Sales,
                    Purchase: req.body.Purchase,
                    Expenditure: req.body.Expenditure,
                    HR_basic_details: req.body.HR_basic_details,
                    Lead_Detail: req.body.Lead_Details
                }]
            }
        },{new: true})
        return res.status(200).json({
                updated: "updated successfully",
                EditCluster
            })
    }catch (err) {
        return res.status(400).json({
            error : err
        })
    }
}


// Get api for List for cluster...!
exports.GetCluster = async (req,res) => {
    try{
        const getcluster = await NewCluster.find({})
        if (getcluster){
            return res.status(201).json({
                status: true,
                message: `here are your ${getcluster.length} data` ,
                getcluster
            })
        }else {
            return res.status(400).json({
                status: false,
                message: "your cluster is not available.." 
            })
        }
    }catch (err){
        console.log(err)
        return res.status(404).json({
            error: err
        })
    }
}


// get api by clusterid for cluster ...
exports.GetClusterbyclusterid = async (req,res) => {
    try{
        const getcluster = await NewCluster.findOne({clusterid: req.params.clusterid})
        console.log(getcluster,"ggggg")
        if (getcluster){
            return res.status(201).json({
                status: true,
                message: getcluster
            })
        }
        // else {
        //     return res.status(400).json({
        //         status: false,
        //         message: "your cluster is not available.."
        //     })
        // }...
    }catch (err){
        console.log(err)
        return res.status(404).json({
            error: err
        })
    }
}


// Delete api for Cluster...!
exports.deleteCluster = async (req,res) => {
    try {
        const cluster_details = await NewCluster.deleteOne({_id: req.params._id})
        console.log(cluster_details,"ccccccccccccc")
        if (cluster_details){
            return res.status(200).json({
                deleted: "cluster deleted successfully"
            })
        }
    }catch (err){
        console.log(err)
        return res.status(400).json({
            error : err
        })
    }
} 