import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './doctorlogin.css';  // Import the CSS file for styling

// Import your images
import doctorImageSrc from './istockphoto-1319031310-1024x1024.jpg'; // Replace with the path to your image
import facilityImage1 from './pic3.jpeg'; // Replace with actual images
import facilityImage2 from './pic3.jpeg';
import facilityImage3 from './pic3.jpeg';
import logoImage from './logo2.png'; // Import the logo image

export default function Doctor_signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signinData(event) {
    event.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8081/doctor/docLogin", { email, password });

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success("Login successful!");
        localStorage.setItem("uid", JSON.stringify(response.data));
        navigate("/doctor-dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed!");
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="login-container">
        <div className="row no-gutters">
          <div className="col-md-6">
            <div className="image-container">
              <img src={doctorImageSrc} alt="Left Image" className="left-image" />
            </div>
          </div>
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <div className="logo-container text-center mb-5">
                      <img src={logoImage} alt="MedApp Logo" className="mb-4" />
                      <h2>MedApp</h2>
                      <p>Join our medical team today!</p>
                    </div>
                    <div className="card shadow-lg p-4">
                      <h1 className="heading text-center mt-3 mb-4">Doctor Login</h1>
                      <form onSubmit={signinData}>
                        <div className="form-group mb-3">
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                            id="exampleInputEmail1"
                            placeholder="Enter email"
                            required
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            required
                          />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block text-uppercase rounded-pill shadow-sm">Sign In</button>
                      </form>
                    </div>
                    <div className="text-center mt-4">
                      <p>Enhance your medical career with us</p>
                      <p>Join our innovative healthcare team, featuring cutting-edge technology and a collaborative environment designed to support your professional growth.</p>
                      <p>Sign in to access your dashboard and start managing your appointments today.</p>
                    </div>
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
                  <h5 className="card-title">Advanced Medical Facilities</h5>
                  <p className="card-text">We provide state-of-the-art medical equipment to ensure the highest quality of care for our patients.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={facilityImage2} className="card-img-top" alt="Facility 2" />
                <div className="card-body">
                  <h5 className="card-title">Expert Support Staff</h5>
                  <p className="card-text">Our team of experienced nurses and administrative staff are here to support you in delivering exceptional patient care.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={facilityImage3} className="card-img-top" alt="Facility 3" />
                <div className="card-body">
                  <h5 className="card-title">Comfortable Work Environment</h5>
                  <p className="card-text">Enjoy a professional and welcoming work environment designed to enhance your productivity and job satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
