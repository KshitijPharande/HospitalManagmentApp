import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Patient_registration.css'; // Import your custom CSS for styling

// Import your image
import leftImage from './patienreg.jpg';

export default function Patient_registration() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [DOB, setDOB] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");

    const signupData = async (event) => {
        event.preventDefault();

        const data = {
            name,
            phoneNumber,
            gender,
            age,
            DOB,
            bloodGroup,
            email,
            password,
            address
        };

        // Form validation
        if (!name || !phoneNumber || !gender || !age || !DOB || !bloodGroup || !email || !address) {
            toast.error("Please fill out all fields!");
            return;
        }

        if (phoneNumber.length !== 10) {
            toast.error("Phone number should be exactly 10 digits!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8081/user/register", data);
            if (response.data.error) {
                toast.error(response.data.error);
            } else {
                toast.success("Registration successful!");
                navigate("/");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            toast.error("An error occurred. Please try again.");
        }
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
                                            <h1 className="heading text-center mt-3 mb-4">Patient Registration</h1>
                                            <form onSubmit={signupData}>
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="text"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        className="form-control rounded-pill border-0 shadow-sm px-4"
                                                        placeholder="Enter your name"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="tel"
                                                        value={phoneNumber}
                                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                                        className="form-control rounded-pill border-0 shadow-sm px-4"
                                                        placeholder="Enter your phone number"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="number"
                                                        value={age}
                                                        onChange={(e) => setAge(e.target.value)}
                                                        className="form-control rounded-pill border-0 shadow-sm px-4"
                                                        placeholder="Enter your age"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="date"
                                                        value={DOB}
                                                        onChange={(e) => setDOB(e.target.value)}
                                                        className="form-control rounded-pill border-0 shadow-sm px-4"
                                                        placeholder="Enter your date of birth"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <select
                                                        value={bloodGroup}
                                                        onChange={(e) => setBloodGroup(e.target.value)}
                                                        className="form-control rounded-pill border-0 shadow-sm px-4"
                                                        required
                                                    >
                                                        <option value="">Select blood group</option>
                                                        <option value="AB+">AB+</option>
                                                        <option value="AB-">AB-</option>
                                                        <option value="A+">A+</option>
                                                        <option value="A-">A-</option>
                                                        <option value="O+">O+</option>
                                                        <option value="O-">O-</option>
                                                    </select>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="form-control rounded-pill border-0 shadow-sm px-4"
                                                        placeholder="Enter your email address"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        className="form-control rounded-pill border-0 shadow-sm px-4"
                                                        placeholder="Enter your password"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="text"
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)}
                                                        className="form-control rounded-pill border-0 shadow-sm px-4"
                                                        placeholder="Enter your address"
                                                        required
                                                    />
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
                                                        />
                                                        <label className="form-check-label" htmlFor="male">Male</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="gender"
                                                            id="female"
                                                            value="Female"
                                                            onChange={(e) => setGender(e.target.value)}
                                                        />
                                                        <label className="form-check-label" htmlFor="female">Female</label>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-block text-uppercase rounded-pill shadow-sm">Submit</button>
                                            </form>
                                        </div>
                                        <div className="text-center mt-4">
                                            <p>Register Today</p>
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
        </>
    );
}
