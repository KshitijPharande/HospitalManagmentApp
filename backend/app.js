const express = require('express');
const app = express();
const path = require("path");

require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 8081;

app.use(bodyParser.json());
app.use(cors());

// MongoDB Atlas connection string
const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://pharandekshitij:kshitij123@cluster1.pldzxvw.mongodb.net/Medapp";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB Atlas is connected successfully..........");
}).catch((err) => {
  console.error("Connection to MongoDB Atlas failed:", err.message);
});

// Import MongoDB connection function (if used)
// const { connection } = require("./connection");

// routes
const userRoute = require("./routes/user");
const doctorRoute = require("./routes/doctor");
const appointmentRoute = require("./routes/appointment");

// middleware
app.use(express.urlencoded({ extended: false }));

// using route middleware
app.use("/user", userRoute);
app.use("/doctor", doctorRoute);
app.use("/appointment", appointmentRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
