const express = require('express')
    
const router = express.Router()

const {docRegister,docLogin,docAllData} = require("../controllers/doctor")

router.post('/docRegister',docRegister)

router.post('/docLogin', docLogin)

router.get('/docData',docAllData)

module.exports = router