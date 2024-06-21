const user = require("../model/user")

const bcrypt = require("bcryptjs")

const { setUser } = require("../Services/services")

async function register(req, res) {
    try {
        const register = new user(req.body)

        await register.save()

        return res.json(register)
    } catch (error) {
        return res.json({ error: error })
    }
}

async function login(req, res) {

    const { email, password } = req.body

    try {
        const login = await user.findOne({ email, password })

        if (login) {
            return res.json(login)
        } else {
            return res.json({
                msg : "Invalid Email or Password",
            })
        };



    } catch (err) {
        return res.json({ msg: "server error" })
    }
}

async function allPatient(req, res) {
    try {
        const getAllData = await user.find()

        return res.json(getAllData)
    } catch (error) {
        return res.json({ error: error })
    }
}

module.exports = { register, login, allPatient }