const express = require("express");

const router = express.Router()

const {insertAppointment,getAllAppointment,singleAppointment,deleteAppointment,updateAppointment,getAppointmentsByPatientId,getAppointmentsByDoctorId} = require("../controllers/appointment")

router.post('/userAppointment', insertAppointment)

router.get("/userAppointment", getAllAppointment)

router.get("/userAppointmentId/:id",singleAppointment)

router.delete("/userAppointmentDelete/:id",deleteAppointment)

router.put("/userAppointmentUpdate/:id",updateAppointment)

router.get('/appointmentsByPatient', getAppointmentsByPatientId);

router.get('/appointmentsByDoctor', getAppointmentsByDoctorId);



module.exports = router