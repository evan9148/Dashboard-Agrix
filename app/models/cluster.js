module.exports = mongoose => {
    const AddCluster = mongoose.model(
      "Cluster",
      mongoose.Schema(
        {
            ClusterCode: {
                type: String,
                unique: true
            },
            clusterid: {
                type: String
            },
            ClusterManager: {
                type: String
            },
            AddVillages: {
                type: String
            },
            District: {
                type: String
            },
            State: {
                type: String
            },
            OfficeAddress: {
                type: String
            },
            ContactDetails: {
                type: Number,
                min: 10
            },
            ClusterLevelStat: [
                {
                    CustomerStat: {
                        type: String
                    },
                    Sales: {
                        Type: Number
                    },
                    Purchase: {
                        type: Number
                    }, 
                    Expenditure: {
                        type: Number
                    }, 
                    HR_basic_details: {
                        type: String
                    }, 
                    Lead_Details: {
                        type: String
                    }
                }
            ]
        },
        { timestamps: true }
      )
    );
    return AddCluster;
  };