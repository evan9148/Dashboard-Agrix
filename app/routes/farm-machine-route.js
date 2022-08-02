module.exports = app => {
    const farmMachine = require("../controller/farm-machine-controller");
    var router = require("express").Router();
    // Create a new deliveryHistory
    router.post("/operation/start", farmMachine.operationStart);
    router.post("/operation/stop", farmMachine.operationStop);
    router.get("/operation", farmMachine.operationAll);
    router.get("/operation/:key",farmMachine.operationByMachineId);
    
    app.use('/api/farm-machine', router);
  };

    // // Retrieve all deliveryHistory
    // router.get("/", start.findAll);
    // // Retrieve a single deliveryHistory with id
    // router.get("/:id", start.findOne);
    // // Update a deliveryHistory with id
    // router.put("/:id", start.update);
    // // Delete a agx_booking_status_track with id
    // router.delete("/:id", start.delete);
    // // Create a new deliveryHistory
    // router.delete("/", start.deleteAll);