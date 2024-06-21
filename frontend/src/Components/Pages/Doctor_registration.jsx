import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Doctor_registration.css';  // Import your custom CSS for styling

// Import your image
import leftImage from './pic1.jpg';
import facilityImage1 from './pic3.jpeg';
import facilityImage2 from './pic3.jpeg';
import facilityImage3 from './pic3.jpeg';

export default function Doctor_registration() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [specialist, setSpecialist] = useState("");

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  function fetchDoctors() {
    axios
      .get(`http://localhost:8081/doctor/docData`)
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((err) => {
        console.error("Error fetching doctors:", err);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name,
      phoneNumber,
      gender,
      age,
      email,
      password,
      address,
      city,
      specialist,
    };

    if (!validateForm(data)) {
      toast.error("Please fill in all fields correctly!");
      return;
    }

    axios
      .post("http://localhost:8081/doctor/docRegister", data)
      .then((response) => {
        console.log("Registration success:", response.data);
        toast.success("Registration success!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Registration error:", error);
        toast.error("Registration failed!");
      });
  };

  const validateForm = (data) => {
    return (
      data.name &&
      data.phoneNumber.length === 10 &&
      data.gender &&
      data.age &&
      data.email &&
      data.password.length === 8 &&
      data.address &&
      data.city &&
      data.specialist
    );
  };

  return (
    <>
      <ToastContainer />

      <div className="registration-container">
        <div className="row no-gutters">
          <div className="col-md-6">
            <div className="image-container">
              <img src={leftImage} alt="Left Image" className="left-image" />
            </div>
          </div>
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <div className="card shadow-lg p-4">
                      <h1 className="heading text-center mt-3 mb-4">Doctor Registration</h1>
                      <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                            placeholder="Enter your Name"
                            required
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="tel"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                            placeholder="Enter your Number"
                            required
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="number"
                            name="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                            placeholder="Enter your Age"
                            required
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                            placeholder="Password"
                            required
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                            placeholder="Enter your address"
                            required
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                            placeholder="Enter your city"
                            required
                          />
                        </div>
                        <div className="form-group mb-3">
                          <select
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                            name="specialist"
                            value={specialist}
                            onChange={(e) => setSpecialist(e.target.value)}
                            id="specialist"
                            required
                          >
                            <option value="">Select Specialist</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Virology">Virology</option>
                            <option value="Dermatology">Dermatology</option>
                            <option value="Optometry">Optometry</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Gender</label><br />
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="male"
                              value="Male"
                              onChange={(e) => setGender(e.target.value)}
                              required
                            />
                            <label className="form-check-label" htmlFor="male">Male</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input ml-3"
                              type="radio"
                              name="gender"
                              id="female"
                              value="Female"
                              onChange={(e) => setGender(e.target.value)}
                              required
                            />
                            <label className="form-check-label ml-4" htmlFor="female">Female</label>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block text-uppercase rounded-pill shadow-sm">Submit</button>
                      </form>
                    </div>
                    <div className="text-center mt-4">
                      <p>Join Our Medical Team</p>
                      <p>An Innovative Healthcare IT Solution, Featuring a Web-Based Hospital Management System, Designed to Streamline Operations, Enhance Patient Care, and Improve Overall Efficiency.</p>
                      <p>Register today to become part of the city's finest healthcare professionals.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facility Cards Section */}
        <div className="facility-cards">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img src={facilityImage1} className="card-img-top" alt="Facility 1" />
                  <div className="card-body">
                    <h5 className="card-title">Advanced Medical Technology</h5>
                    <p className="card-text">Utilize state-of-the-art medical equipment to provide the best patient care.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src={facilityImage2} className="card-img-top" alt="Facility 2" />
                  <div className="card-body">
                    <h5 className="card-title">Professional Growth</h5>
                    <p className="card-text">Opportunities for continuous learning and professional development.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src={facilityImage3} className="card-img-top" alt="Facility 3" />
                  <div className="card-body">
                    <h5 className="card-title">Collaborative Environment</h5>
                    <p className="card-text">Work with a team of dedicated healthcare professionals to improve patient outcomes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
