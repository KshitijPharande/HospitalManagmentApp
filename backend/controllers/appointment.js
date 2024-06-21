const appointment = require("../model/appointment")

async function insertAppointment(req, res) {
    const body = req.body

    const data = {
        patientId: body.patientId,
        doctorId: body.doctorId,
        date: body.date,
        status: "pending"
    }

    try {
        const addAppointment = new appointment(data)

        await addAppointment.save()

        return res.json({ msg: addAppointment })
    } catch (error) {
        return res.json({error : error})
    }
}


async function getAllAppointment(req, res) {
    try {
        const allData = await appointment.find().sort({_id : -1})

        return res.json(allData)
    } catch (error) {
        return res.json({error : error})
    }
}

async function singleAppointment(req, res) {
      try {
        const id = req.query.id

        const getSingleAppointment = await appointment.findById(id)
    
        if (!getSingleAppointment) {
            return res.json({ error: "Your selected query doesn't exist !" })
        }
    
        return res.json({ msg: getSingleAppointment })
      } catch (error) {
        return res.json({error : error})
      }
}


async function deleteAppointment(req, res) {
       try {
        const id = req.params.id

        const deleteAppointment = await appointment.findByIdAndDelete(id)
    
        if (!deleteAppointment) {
            return res.json({ error: "Your selected query doesn't exist !" })
        }
    
        return res.json({ msg: deleteAppointment })
       } catch (error) {
         return res.json({error : error})
       }
}

async function updateAppointment(req, res) {
     try {
        
    const id = req.params.id

    const {status} = req.body

    const updateAppointment = await appointment.findByIdAndUpdate(id,{status},{new : true})

    if (!updateAppointment) {
        return res.json({ error: "Your selected query doesn't exist !" })
    }

    return res.json({ msg: updateAppointment })


     } catch (error) {
        return res.json({error : error})
     }
}


async function getAppointmentsByPatientId(req, res){
    const { patientId } = req.query; 
    const result = await appointment.find({ patientId });
    console.log(result);
        return res.json({ status: 200, task: result });
}

async function getAppointmentsByDoctorId(req,res){
    const { doctorId } = req.query; 
    const result = await appointment.find({ doctorId });
    console.log(result);
        return res.json({ status: 200, task: result });
}

module.exports = { insertAppointment, getAllAppointment, singleAppointment, deleteAppointment, updateAppointment,getAppointmentsByPatientId,getAppointmentsByDoctorId }