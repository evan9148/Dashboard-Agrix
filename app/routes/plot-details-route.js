module.exports = app => {
    const plotdetailsdata = require("../controller/plot-details-controller");
    var router = require("express").Router();
    // Create a new deliveryHistory
    router.post("/addplot", plotdetailsdata.Createplotdetails);
    router.put("/updateplot/:plotId", plotdetailsdata.updatePlot);
    router.get("/plotdata", plotdetailsdata.GetPlot);
    router.get("/plot/:plotid", plotdetailsdata.getPlotId)
    router.delete("/deleteplot/:_id", plotdetailsdata.deleteplot_details)
    
    app.use('/api/plot-details', router);
  };