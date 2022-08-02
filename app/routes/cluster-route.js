module.exports = app => {
    const clusterdata = require("../controller/cluster-controller");
    var router = require("express").Router();
    // Create a new deliveryHistory
    router.post("/addcluster", clusterdata.CreateCluster);
    router.put("/updatecluster/:idcluster", clusterdata.updateCluster);
    router.get("/clusterdata", clusterdata.GetCluster);
    router.get("/getbycluster/:clusterid", clusterdata.GetClusterbyclusterid);
    router.delete("/deletecluster/:_id", clusterdata.deleteCluster);
    
    app.use('/api/cluster', router);
  };
