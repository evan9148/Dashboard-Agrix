module.exports = mongoose => {
    const farmMachine_start = mongoose.model(
      "farm-machine-operation",
      mongoose.Schema(
        {
          machineId:String,
          scheduleDate:String,
          phoneNumber:String,
          startTime:String,
          stopTime:String
        },
        { timestamps: true }
      )
    );
    return farmMachine_start;
  };