import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser,FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import NVSUlogo from './NVSU2.3.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate()
    const GotoLogin = (event) =>{
        navigate('/login')
    }
    
    const [inputs, setInputs] = useState({})

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Submitting data:", inputs); // Log the inputs to see what is being sent
  
      // Ensure that all required fields are filled out before sending the request
      if (!inputs.Username || !inputs.IDNo || !inputs.Email || !inputs.Password || !inputs.ConfirmPassword) {
          alert("Please fill out all fields.");
          return;
      }
  
      // Optionally, you can add a check to ensure Password and Confirm Password match
      if (inputs.Password !== inputs.ConfirmPassword) {
          alert("Passwords do not match.");
          return;
      }
  
      axios.post('http://localhost:8888/api/user/signup', inputs)
      .then(response => {
          console.log(response.data);
          if (response.data.status === 1) {
              navigate('/login');
          } else {
              alert(response.data.message);
          }
      })
      .catch(error => {
          console.error('There was an error!', error);
          alert('An error occurred while submitting the form.');
      });
  }

    return (
        <div className="loginBG">
            <div className="container">
                <div className="containerLogo">
                    <img src={ NVSUlogo } alt="" />
                </div>
                <div className="containerLogin">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign Up</h1>
                        <div className="row">
                            <div className="inputBox">
                                <input type="text" name="Username" placeholder="Username" onChange={handleChange}/>
                                <FaUser className="icon"/>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="IDNo" placeholder="ID Number" onChange={handleChange}/>
                                <FaUser className="icon"/>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="Email" placeholder="Email" onChange={handleChange}/>
                                <MdEmail className="icon"/>
                            </div>
                            <div className="inputBox">
                                <input type="password" name="Password" placeholder="Password" onChange={handleChange}/>
                                <FaLock className="icon"/>
                            </div>
                            <div className="inputBox">
                                <input type="password" name="ConfirmPassword" placeholder="Confirm Password" onChange={handleChange}/>
                                <FaLock className="icon"/>
                            </div>
                            <div className="btn-signup">
                                <button type="submit">Sign Up</button>
                            </div>
                            <div className='have'>
                                <p>Already have an account? <a href=" " onClick={GotoLogin}>Login</a></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default SignUp;