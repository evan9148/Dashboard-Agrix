module.exports = app => {
    const farmerdata = require("../controller/farmers-controller");
    var router = require("express").Router();
    // Create a new deliveryHistory
    router.post("/addfarmers", farmerdata.CreateFarmers);
    router.put("/updatefarmers/:farmerId", farmerdata.updateFarmers);
    router.get("/farmerdata", farmerdata.GetFarmers);
    router.get("/farmername/:FarmerId", farmerdata.getFarmersName);
    router.delete("/deletefarmer/:_id", farmerdata.deleteFarmer)

    app.use('/api/farmer', router);
  };