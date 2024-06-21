const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
    name : {type : String,required : true},
    phoneNumber : {type : String,required : true},
    gender : {type : String,required : true},
    age : {type : Number,required : true},
    email: { type: String, required: true,unique : true},
    password: { type: String, required: true },
    address: { type: String, required: true },
    city : {type : String,required : true},
    specialist : {type : String,required : true}
});

const doctorModel = mongoose.model('doctor', doctorSchema);

module.exports = doctorModel