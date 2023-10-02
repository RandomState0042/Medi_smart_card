import React, { useState } from 'react';
import './Login.css';

function LoginPage() {

    const [selectedRole, setSelectedRole] = useState('Doctor');
    const [patientId, setPatientId] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Role:', selectedRole);
        console.log('Patient ID:', patientId);
        console.log('Mobile Number:', mobileNumber);
    };

    return (
        <div className="login-container">
            <h1>
                <div className="mylogin">
                    <span className="login-text">Login</span>
                </div>

            </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group" >
                    <div className="myformgroup">
                        <label htmlFor="role">Select Role:</label>
                        <select
                            id="role"
                            name="role"
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                        >
                            <option value="Doctor">Doctor</option>
                            <option value="Patient">Patient</option>
                            <option value="Lab Assistant">Lab Assistant</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="pid">PID (Patient ID):</label>
                    <input
                        type="text"
                        id="pid"
                        name="pid"
                        placeholder="Enter Patient ID"
                        value={patientId}
                        onChange={(e) => setPatientId(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile Number:</label>
                    <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        placeholder="Enter Mobile Number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage;