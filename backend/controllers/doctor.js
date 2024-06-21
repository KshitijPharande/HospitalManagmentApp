const doctor = require("../model/doctor")

const { setUser } = require("../Services/services")

async function docRegister(req, res) {
  try {
    const doctorResult = new doctor(req.body)

    await doctorResult.save()

    return res.json(doctorResult)
  } catch (error) {
    return res.json({ error: error })
  }
}

async function docLogin(req, res) {
  const { email, password } = req.body

  try {

    const docResult = await doctor.findOne({ email, password })

    if (docResult) {
      return res.json(docResult)
    } else {
      return res.json({ error: "Incorrect email and password !" })
    }
  } catch (err) {
    return res.json("server error")
  }





}


async function docAllData(req, res) {
  try {
    const getAllData = await doctor.find()

    return res.json(getAllData)
  } catch (error) {
    return res.json({ error: error })
  }
}

module.exports = { docRegister, docLogin, docAllData }