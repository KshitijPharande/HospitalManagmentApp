import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Doctor_Modal from "./Doctor_Modal";
import Nav_dashboard from "./Nav_dashboard";
import Doctor_Sidebar from "./Doctor_Sidebar";
import "./Doctor_dashboard.css"; // Import Doctor_dashboard specific styles

export default function Doctor_dashboard() {
  const location = useLocation();
  const [appointments, setAppointments] = useState([]);
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(false); // State for sidebar visibility
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [appointmentsPerPage] = useState(5); // Number of appointments per page

  const local = JSON.parse(localStorage.getItem("uid"));
  const doctor = { name: local.name, email: local.email, phone: local.phone };

  useEffect(() => {
    if (local && local._id) {
      fetchAppointments();
      fetchPatients();
    }
  }, [local]);

  function fetchAppointments() {
    axios
      .get(`http://localhost:8081/appointment/appointmentsByDoctor?doctorId=${local._id}`)
      .then((response) => {
        setAppointments(response.data.task);
      })
      .catch((err) => console.log(err));
  }

  function fetchPatients() {
    axios
      .get("http://localhost:8081/user/allPatient")
      .then((value) => {
        setUsers(value.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getDoctor(id) {
    setSelectedAppointment(id);
    setModalVisible(true); // Show the modal
  }

  function updateStatus() {
    if (!status) {
      toast.error("Choose a status!");
    } else {
      toast.success("Status updated successfully!");

      axios
        .put(`http://localhost:8081/appointment/userAppointmentUpdate/${selectedAppointment}`, { status })
        .then(() => {
          setStatus("");
          fetchPatients();
          fetchAppointments();
          setModalVisible(false); // Hide the modal
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function getPatientName(id) {
    const patient = users.find((value) => value._id === id);
    return patient ? patient.name : "Unknown Patient";
  }

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Logic for pagination
  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = appointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ToastContainer />
      {modalVisible && (
        <Doctor_Modal
          users={users}
          updateStatus={updateStatus}
          status={status}
          setStatus={setStatus}
          setModalVisible={setModalVisible}
        />
      )}
      <Nav_dashboard toggleSidebar={toggleSidebar} />
      <div className="container-fluid">
        <div className="row">
          {sidebarVisible && (
            <div className="col-md-2">
              <Doctor_Sidebar doctor={doctor} />
            </div>
          )}
          <div className={sidebarVisible ? "col-md-10 content-area" : "col-md-12 content-area"}>
            <h1 className="text-center mb-4">Doctor Dashboard</h1>
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Patient</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentAppointments.map((data, index) => (
                    <tr key={data._id}>
                      <td>{indexOfFirstAppointment + index + 1}</td>
                      <td>{getPatientName(data.patientId)}</td>
                      <td>{data.date}</td>
                      <td>{data.status}</td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => getDoctor(data._id)}
                        >
                          Update Status
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <nav className="pagination justify-content-center">
              <ul className="pagination">
                {Array.from({ length: Math.ceil(appointments.length / appointmentsPerPage) }, (_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                    <button onClick={() => paginate(index + 1)} className="page-link">
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
