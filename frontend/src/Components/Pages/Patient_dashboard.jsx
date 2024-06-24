// Patient_dashboard.js
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Nav_dashboard from "./Nav_dashboard";
import Modal from "../Modal";
import Sidebar from "./Sidebar";
import './Patient_dashboard.css';
import { useNavigate } from "react-router-dom";

export default function Patient_dashboard() {
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");
  const [sidebarVisible, setSidebarVisible] = useState(true); // State for sidebar visibility
  const local = JSON.parse(localStorage.getItem("uid"));
  const patient = { name: local.name, email: local.email, phone: local.phone };

  useEffect(() => {
    addAppointment();
    addDoctors();
  }, [local._id]);

  function addAppointment() {
    axios
      .get(`http://localhost:8081/appointment/appointmentsByPatient?patientId=${local._id}`)
      .then((response) => {
        setAppointment(response.data.task);
      }).catch(err => console.log(err));
  }

  function addDoctors() {
    axios.get(`http://localhost:8081/doctor/docData`).then((value) => {
      setDoctors(value.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  function postAppointment() {
    const data = {
      patientId: local._id,
      doctorId: doctorId,
      date: date,
      status: "pending"
    };

    if (doctorId === "") {
      toast.error("Select your doctor !");
    } else if (date === "") {
      toast.error("Select your appointment Date !");
    } else {
      toast.success("Appointment added successfully !");
      axios.post("http://localhost:8081/appointment/userAppointment", data).then(() => {
        addAppointment();
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  function deleteAppointment(id) {
    toast.success("Appointment deleted successfully !");
    axios.delete(`http://localhost:8081/appointment/userAppointmentDelete/${id}`).then(() => {
      addAppointment();
    }).catch((err) => {
      console.log(err);
    });
  }

  function getDocName(id) {
    const doctor = doctors.find((value) => value._id === id);
    return doctor ? doctor.name : "Unknown Doctor";
  }

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <ToastContainer />

      <Modal btn={postAppointment} doctors={doctors} date={date} setDate={setDate} doctorId={doctorId} setDoctorId={setDoctorId} />

      <Nav_dashboard toggleSidebar={toggleSidebar} />

      <div className="container-fluid">
        <div className="row">
          {sidebarVisible && (
            <div className="col-md-2">
              <Sidebar patient={patient} />
            </div>
          )}
          <div className={sidebarVisible ? "col-md-10" : "col-md-12"}>
            <div className="container">
              <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                  <div className="card shadow">
                    <div className="card-header bg-primary text-white">
                      <h5 className="card-title mb-0"></h5>
                    </div>
                    <div className="card-body">
                      <button className="btn btn-primary mb-3" data-toggle="modal" data-target="#exampleModal">
                        Book Appointment
                      </button>

                      <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                          <thead className="thead-dark">
                            <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Doctor Name</th>
                              <th scope="col">Date</th>
                              <th scope="col">Status</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {appointment.map((data, index) => (
                              <tr key={data._id}>
                                <td>{index + 1}</td>
                                <td>{getDocName(data.doctorId)}</td>
                                <td>{data.date}</td>
                                <td>{data.status}</td>
                                <td>
                                  <button className="btn btn-danger" onClick={() => deleteAppointment(data._id)}>Delete</button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
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
