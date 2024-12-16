import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser , FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import NVSUlogo from './NVSU2.3.png';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const LoginForm = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        try {
            const response = await axios.post('http://localhost:8888/api/user/login', {
                Username,
                Password
            });

            if (response.data.status === 1) {
                // Assuming the response contains the user role
                const userRole = response.data.role; // Adjust this based on your API response structure

                if (userRole === 'admin') {
                    navigate('/admin/approval');
                } else if (userRole === 'user') {
                    navigate('/user/rules_and_regulations');
                } else {
                    Swal.fire('Error', 'Invalid user role', 'error');
                }
            } else {
                Swal.fire('Error', response.data.message, 'error');
            }
        } catch (error) {
            console.error('Login error:', error);
            Swal.fire('Error', 'An error occurred while logging in.', 'error');
        }
    };

    return (
        <div className="loginBG">
            <div className="container">
                <div className="containerLogo">
                    <img src={NVSUlogo} alt="NVSU Logo" />
                </div>
                <div className="containerLogin">
                    <h1>LOGIN</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-9">
                                <div className="inputBox">
                                    <input
                                        type="text"
                                        placeholder="Username or ID Number"
                                        value={Username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                    <FaUser  className="icon" />
                                </div>
                                <div className="inputBox passwordBox">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        value={Password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <FaLock className="icon" />
                                    <span onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                <div className="RForgot">
                                    <label>
                                        <input type="checkbox" /> Remember me?
                                    </label>
                                </div>
                                <div className="regLink">
                                    <p>
                                        Don't have an account? <Link to="/signup">Register</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="Btn">
                                    <button type="submit">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;