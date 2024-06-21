const express = require('express')

const router = express.Router()

const {register,login,allPatient} = require("../controllers/user")

router.post('/register',register)

router.post('/login',login)

router.get('/allPatient',allPatient)

module.exports = router