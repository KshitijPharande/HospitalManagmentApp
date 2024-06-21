import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Patient_login.css';  // Import the CSS file for styling

// Import your image
import imageSrc from './pic1.jpg';
import facilityImage1 from './pic3.jpeg';
import facilityImage2 from './pic3.jpeg';
import facilityImage3 from './pic3.jpeg';
import logoImage from './logo2.png'; // Import the logo image

export default function Patient_login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    allPatients();
  }, []);

  function allPatients() {
    axios.get("http://localhost:8081/user/allPatient")
      .then((value) => {
        setUsers(value.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const data = {
    email: email,
    password: password
  };

  async function signinData(event) {
    event.preventDefault();

    if (!data.email && !data.password) {
      toast.error("Form is empty !");
    } else if (!data.email) {
      toast.error("Please insert your email !");
    } else if (!data.password) {
      toast.error("Please insert your password !");
    } else {
      try {
        const result = await axios.post("http://localhost:8081/user/login", data);
        const condition = users.find((value) => value.email === result.data.email);

        if (!condition) {
          toast.error(`${result.data.msg}`);
        } else {
          toast.success("Login successful !");
          localStorage.setItem("uid", JSON.stringify(result.data));
          navigate("/patient-dashboard");
        }
      } catch (error) {
        console.log(error);
        toast.error("An error occurred. Please try again.");
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="login-container">
        <div className="row no-gutters">
          <div className="col-md-6">
            <div className="image-container">
              <img src={imageSrc} alt="Left Image" className="left-image" />
            </div>
          </div>
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <div className="text-center mb-5 logo-container">
                      <img src={logoImage} alt="MedApp Logo" className="mb-4" />
                      <h2 className="text-center mb-2">MedApp</h2>
                      <p className="text-center">Book your appointment today!</p>
                    </div>
                    <div className="card shadow-lg p-4">
                      <h1 className="heading text-center mt-3 mb-4">Patient Login</h1>
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
                        <button type="submit" className="btn btn-primary btn-block text-uppercase rounded-pill shadow-sm">Submit</button>
                      </form>
                    </div>
                    <div className="text-center mt-4">
                      <p>Manage Hospital like Never Before</p>
                      <p>An Innovative Healthcare IT Solution, Featuring a Web-Based Hospital Management System, Designed to Streamline Operations, Enhance Patient Care, and Improve Overall Efficiency.</p>
                      <p>Book your appointment today with Cities Finest</p>
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
                  <h5 className="card-title">State-of-the-art Equipment</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel velit ac diam egestas rhoncus.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={facilityImage2} className="card-img-top" alt="Facility 2" />
                <div className="card-body">
                  <h5 className="card-title">Experienced Medical Staff</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel velit ac diam egestas rhoncus.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src={facilityImage3} className="card-img-top" alt="Facility 3" />
                <div className="card-body">
                  <h5 className="card-title">Comfortable Patient Rooms</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel velit ac diam egestas rhoncus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
