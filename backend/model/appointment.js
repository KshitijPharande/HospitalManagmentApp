const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
     patientId : {type : mongoose.Schema.Types.ObjectId,ref : "patient" },
     doctorId : {type : mongoose.Schema.Types.ObjectId,ref : "doctor"},
     date : {type : Date,required : true},
     status : {type : String, enum : ["cancel","pending","confirm"],default : "pending"}
});

const appointmentModel = mongoose.model('appointment', appointmentSchema);

module.exports = appointmentModel