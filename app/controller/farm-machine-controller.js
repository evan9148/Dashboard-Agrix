const db = require("../models");
const FarmMachine = db.farmMachine;

exports.operationStart = (req, res) => {
    if (!req.body.phoneNumber){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    const farmMachine= new FarmMachine({
        machineId:req.body.machineId,
        scheduleDate: req.body.scheduleDate,
        phoneNumber:req.body.phoneNumber,
        startTime:req.body.startTime,
        stopTime: '', 
    });

    farmMachine
        .save(farmMachine)
        .then(data =>{
            console.log("data")
            res.send(data);
        })
        .catch(error =>{
            res.status(500).send({
                message:
                 error.message || "some error occurred while creating the farmMachine"
            });
        });
}

exports.operationStop =(req,res) =>{
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
      console.log("request body")
      console.log(req.body)
      const id = req.body._id;
      console.log("ID ..."+id);
      
      FarmMachine.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update FarmMachine with id=${id}. Maybe FarmMachine was not found!`
            });
          } else res.send({ message: "FarmMachine was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating FarmMachine with id=" + id
          });
        });

}

exports.operationAll =(req,res) =>{
  const phoneNumber = req.query.phoneNumber;
    var condition = phoneNumber ? { phoneNumber: { $regex: new RegExp(phoneNumber), $options: "i" } } : {};
    FarmMachine.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving FarmMachine."
        });
      });
    }
    
    
    
exports.operationByMachineId = (req,resp)=>{
      let data = FarmMachine.find(
          {
              "$or":[
                  {machineId:{$regex:req.params.key}},
              ]
          }
      )
      resp.send(data);
    
    }
