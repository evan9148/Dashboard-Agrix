module.exports = mongoose => {
    const AddPlotDetails = mongoose.model(
      "Plot-details",
      mongoose.Schema(
        {
            FarmerName: {
                type: String
            },
            Location: {
                type: String
            },
            Village: {
                type: String
            },
            District: {
                type: String
            },
            Latitude: {
                type: Number
            },
            Long: {
                type: Number
            },
            Area_of_Plot : {
                type: String
            },
            Perimeter_of_Plot: {
                type: Number
            },
            PlotShape : {
                type: String
            },
            SoilType : {
                type: String
            },
            Nutrient_Content_Analysis: {
                type: Date,
                default: Date.now
            },
            WaterSource : {
                type: String
            },
            plotid: {
                type: String
            }
        },
        { timestamps: true }
      )
    );
    return AddPlotDetails;
  };