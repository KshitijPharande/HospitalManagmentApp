const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
    name : {type : String,required : true},
    phoneNumber : {type : String,required : true},
    gender : {type : String,required : true},
    age : {type : Number,required : true},
    DOB : {type : Date,required : true},
    bloodGroup : {type : String,required : true},
    email: { type: String, required: true,unique : true},
    password: { type: String, required: true },
    address: { type: String, required: true }
});

const patientModel = mongoose.model('patient', patientSchema);

module.exports = patientModel