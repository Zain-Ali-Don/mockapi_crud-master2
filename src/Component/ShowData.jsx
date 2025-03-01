import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShowData() {
  let Linker = 'https://67ad86693f5a4e1477ddf074.mockapi.io/employee/';
  let [record, Setrecord] = useState([]);
  let [search, Setsearch] = useState("");
  let [order, Setorder] = useState("");
  let [msg, setMsg] = useState("");
  let [Isshow, setIsshow] = useState(false);
  let [isEditing, setIsEditing] = useState(false);
  let [currentRecord, setCurrentRecord] = useState(null);
  let [updatedName, setUpdatedName] = useState("");
  let [updatedEmail, setUpdatedEmail] = useState("");
  let [updatedSalary, setupdatedSalary] = useState("");
  let [updatedPassword, setupdatedPassword] = useState("");
  let [updatedDesignation, setUpdatedDesignation] = useState("");
  let [updatedDepartment, setUpdatedDepartment] = useState("");
  let [updatedGender, setUpdatedGender] = useState("");

  function deleterecord(idr, namer) {
    if (window.confirm(`Are you sure you want to delete ${namer} record?`)) {
      axios.delete(Linker + idr)
        .then(() => {
          Setrecord((a) => a.filter((usr_record) => usr_record.id !== idr));
          setMsg("Record deleted successfully");
          setIsshow(true);
        })
        .catch((err) => console.error("Error deleting record:", err));
    }
  }

  function updateRecord(idr) {
    const recordToUpdate = record.find((item) => item.id === idr);
    setCurrentRecord(recordToUpdate);
    setUpdatedName(recordToUpdate.employeeName);
    setupdatedSalary(recordToUpdate.salary);
    setUpdatedEmail(recordToUpdate.email);
    setupdatedPassword(recordToUpdate.password);
    setUpdatedDesignation(recordToUpdate.designation);
    setUpdatedDepartment(recordToUpdate.department);
    setUpdatedGender(recordToUpdate.gender);
    setIsEditing(true);
  }

  function handleUpdateSubmit(e) {
    e.preventDefault();

    const updatedData = {
      employeeName: updatedName,
      salary: updatedSalary,
      email: updatedEmail,
      password: updatedPassword,
      designation: updatedDesignation,
      department: updatedDepartment,
      gender: updatedGender,
    };

    axios.put(Linker + currentRecord.id, updatedData)
      .then((response) => {
        Setrecord((prevRecords) => prevRecords.map((record) =>
          record.id === currentRecord.id ? { ...record, ...updatedData } : record
        ));
        setMsg("Record updated successfully");
        setIsshow(true);
        setIsEditing(false);
      })
      .catch((err) => console.error("Error updating record:", err));
  }

  useEffect(() => {
    if (Isshow) {
      var timer = setTimeout(() => { setIsshow(false) }, 10000);
      return () => clearTimeout(timer);
    }
  }, [Isshow]);

  useEffect(() => {
    axios.get("https://67ad86693f5a4e1477ddf074.mockapi.io/employee")
      .then((data_aya) => {
        Setrecord(data_aya.data);
      })
      .catch((e) => console.error(e));
  }, []);

  var search_Student = search ? record.filter((abc) => abc.employeeName.toLowerCase().includes(search.toLowerCase())) : record;

  if (order === "1") {
    search_Student.sort((a, b) => a.Age - b.Age);
  } else if (order === "2") {
    search_Student.sort((a, b) => b.Age - a.Age);
  }

  return (
    <div className='container'>
      <h1>Student Data</h1>
      <Link className='btn btn-warning my-3' to='/'>Add Student +</Link>
      <input type='text'
        placeholder='Enter name to search student'
        value={search}
        onChange={(E) => Setsearch(E.target.value)}
        className='form-control my-3'
      />
      <select className='form-select my-3' value={order} onChange={(e) => Setorder(e.target.value)}>
        <option value="">Sort</option>
        <option value="1">Ascending Order</option>
        <option value="2">Descending Order</option>
      </select>
      {Isshow && <div className="alert alert-success">{msg}</div>}

      {isEditing && (
        <div className="modal" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Record</h5>
                <button type="button" className="btn-close" onClick={() => setIsEditing(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleUpdateSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input type="number" className="form-control" id="salary" value={updatedSalary} onChange={(e) => setupdatedSalary(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={updatedPassword} onChange={(e) => setupdatedPassword(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="designation" className="form-label">Designation</label>
                    <select
                      className="form-select"
                      id="designation"
                      value={updatedDesignation}
                      onChange={(e) => setUpdatedDesignation(e.target.value)}
                      required
                    >
                      <option value="">Select Designation</option>
                      {['Manager', 'Developer', 'Designer', 'Tester'].map((designation, index) => (
                        <option key={index} value={designation}>{designation}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="department" className="form-label">Department</label>
                    <select
                      className="form-select"
                      id="department"
                      value={updatedDepartment}
                      onChange={(e) => setUpdatedDepartment(e.target.value)}
                      required
                    >
                      <option value="">Select Department</option>
                      {['HR', 'IT', 'Finance', 'Marketing'].map((department, index) => (
                        <option key={index} value={department}>{department}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        value="Male"
                        checked={updatedGender === 'Male'}
                        onChange={(e) => setUpdatedGender(e.target.value)}
                      />
                      <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        value="Female"
                        checked={updatedGender === 'Female'}
                        onChange={(e) => setUpdatedGender(e.target.value)}
                      />
                      <label className="form-check-label">Female</label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        value="Other"
                        checked={updatedGender === 'Other'}
                        onChange={(e) => setUpdatedGender(e.target.value)}
                      />
                      <label className="form-check-label">Other</label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='row'>
        {record.length === 0 ? (
          <p style={{ color: "red" }}>No Student Record</p>
        ) : (
          search_Student.map((a) => (
            <div className='col-md-4' key={a.id}>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Name: {a.employeeName}</h4>
                  <p className="card-title">Salary: {a.salary}</p>
                  <p className="card-text">Email: {a.email}</p>
                  <p className="card-text">Designation: {a.designation}</p>
                  <p className="card-text">Department: {a.department}</p>
                  <p className="card-text">Gender: {a.gender}</p>
                  <button className="btn btn-danger" onClick={() => deleterecord(a.id, a.employeeName)}>Delete</button>
                  <button className="btn btn-primary ml-2" onClick={() => updateRecord(a.id)}>Update</button>
                </div>
              </div>
            </div>
          ))
        )}

        {search_Student.length === 0 && (
          <p style={{ color: "red", textAlign: "center" }}>No Student Record Found</p>
        )}
      </div>
    </div>
  );
}
