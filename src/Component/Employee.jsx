import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function EmployeeForm() {
    const [employeeName, setEmployeeName] = useState('');
    const [salary, setSalary] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [designation, setDesignation] = useState('');
    const [department, setDepartment] = useState('');
    const [gender, setGender] = useState('');
    const [msg, setMsg] = useState('');
    const [isShow, setIsShow] = useState(false);

    const designations = ['Manager', 'Developer', 'Designer', 'HR', 'Sales'];
    const departments = ['IT', 'Finance', 'Marketing', 'Operations', 'HR'];

    async function SaveMockapi() {
        try {
            let response = await axios.post("https://67ad86693f5a4e1477ddf074.mockapi.io/employee", {
                employeeName : employeeName,
                salary : salary,
                email : email,
                password : password,
                designation : designation,
                department : department,
                gender : gender
            });
            console.log(response.data);
            setIsShow(true);
            setMsg("Data Saved Successfully");


            setEmployeeName('');
            setSalary('');
            setEmail('');
            setPassword('');
            setDesignation('');
            setDepartment('');
            setGender('');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Employee Form</h2>
            <div className="card p-4 shadow mx-auto" style={{ maxWidth: '500px' }}>
                <form onSubmit={(e) => { e.preventDefault(); SaveMockapi(); }}>
                    <div className="mb-3">
                        <label className="form-label">Employee Name</label>
                        <input type="text" className="form-control" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Salary</label>
                        <input type="number" className="form-control" value={salary} onChange={(e) => setSalary(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Designation</label>
                        <select className="form-select" value={designation} onChange={(e) => setDesignation(e.target.value)} required>
                            <option value="">Select Designation</option>
                            {designations.map((d, index) => <option key={index} value={d}>{d}</option>)}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Department</label>
                        <select className="form-select" value={department} onChange={(e) => setDepartment(e.target.value)} required>
                            <option value="">Select Department</option>
                            {departments.map((d, index) => <option key={index} value={d}>{d}</option>)}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} />
                            <label className="form-check-label">Female</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" value="Other" checked={gender === 'Other'} onChange={(e) => setGender(e.target.value)} />
                            <label className="form-check-label">Other</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
                <br />
                <Link to="/sd">View Details</Link>
                {isShow && <p className="text-success mt-3 text-center">{msg}</p>}
            </div>
        </div>
    );
}