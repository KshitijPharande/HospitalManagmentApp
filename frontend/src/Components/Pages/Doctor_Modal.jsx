import React from "react";
import { Select } from "antd";

const { Option } = Select;

export default function Doctor_Modal(props) {
  return (
    <>
      {/* Modal */}
      <div className="modal fade show" tabIndex="-1" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1050 }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" style={{ marginLeft: "150px", fontWeight: "bold" }}>Patient Status</h3>
              <button type="button" className="close" aria-label="Close" onClick={() => props.setModalVisible(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <Select
                  style={{ width: '100%', zIndex: 1051 }} /* Ensure select dropdown is above modal backdrop */
                  value={props.status}
                  onChange={(value) => props.setStatus(value)}
                  placeholder="Select status"
                  className="form-select"
                >
                  <Option value="pending">Pending</Option>
                  <Option value="confirm">Confirm</Option>
                  <Option value="cancel">Cancel</Option>
                </Select>
              </div>

              <div>
                <button className="btn btn-primary" onClick={() => props.updateStatus()}>Update Status</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
