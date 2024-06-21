import React from "react";

export default function Modal(props) {
  let doctors = props.doctors;

  return (
    <>
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title" id="exampleModalLabel">Book Appointment</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => props.setDoctorId("")}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="doctorSelect">Select Doctor</label>
                  <select
                    className="form-control"
                    id="doctorSelect"
                    value={props.doctorId}
                    onChange={(event) => props.setDoctorId(event.target.value)}
                  >
                    <option value="">Select Doctor...</option>
                    {doctors.map((data) => (
                      <option key={data._id} value={data._id}>{data.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="appointmentDate">Select Appointment Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="appointmentDate"
                    value={props.date}
                    onChange={(event) => props.setDate(event.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => props.setDoctorId("")}>Close</button>
              <button type="button" className="btn btn-primary" onClick={props.btn}>Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
