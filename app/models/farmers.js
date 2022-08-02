module.exports = mongoose => {
    const AddFarmers = mongoose.model(
        "Farmers",
        mongoose.Schema(
        {
            FirstName: {
                type: String,
                unique: true
            },
            LastName: {
                type: String
            },
            OwnerType: {
                type: String
            },
            Address: {
                type: String
            },
            FarmingSeason: {
                type: String
            },
            CropType: {
                type: String
            },
            Crop_SubType: {
                type: String
            },
            plotArea: {
                type: Number
            },
            FarmerId: {
                type: String
            }
        },
        { timestamps: true }
      )
    );
    return AddFarmers;
};