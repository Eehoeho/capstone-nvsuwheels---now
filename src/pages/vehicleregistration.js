import React, { useState } from 'react';
import './reg.css';
import axios from 'axios';
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from 'react-router-dom';

const RegForm = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({})

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting data:", inputs); // Log the inputs to see what is being sent
    
        // Define required fields
        const requiredFields = [
            'Fullname',
            'IDNo',
            'Applicant',
            'Address',
            'MobileNo',
            'DLNo',
            'DL_IssueDate',
            'DL_ExpiryDate',
            'VWheels',
            'PlateNo',
            'Make',
            'YearModel',
            'Color',
            'ORNo',
            'OR_IssueDate',
            'OR_ExpiryDate',
        ];
    
        // Check for empty required fields
        for (const field of requiredFields) {
            if (!inputs[field]) {
                alert("Please fill out the fields.");
                return; // Stop the submission if a required field is empty
            }
        }

        axios.post('http://localhost:8888/api/user/submit', inputs)
            .then(response => {
                console.log(response.data);
                if (response.data.status === 1) {
                    navigate('/user/rules_and_regulations');
                } else {
                    alert(response.data.message);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
                alert('An error occurred while submitting the form.');
            });
    }
    const handleCancel = () => {
        navigate('/user/rules_and_regulations');
    }

    return ( 
        <div>
            <Navbar/>
                <div className='regBG'>
                    <div className='containerR'>
                    <h1>Vehicle Registration</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className="info">
                                    <span className="title">Applicant Information</span>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <label>Full Name</label>
                                            <input type="text" name='Fullname' placeholder="Enter your name" className='form-control' onChange={handleChange}/>
                                        </div>
                                        <div className="inputField2">
                                            <label htmlFor='idno'>ID Number</label>
                                            <input type="text" name='IDNo' placeholder="Enter your ID number" className='form-control' onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <label htmlFor='applicant'>Applicant</label>
                                            <select name='Applicant' className='form-control' onChange={handleChange}>
                                                <option>Please Select</option>
                                                <option>Employee</option>
                                                <option>Student</option>
                                                <option>Concessionaires</option>
                                            </select>
                                        </div>
                                        <div className="inputField2">
                                            <label htmlFor='position'>[Employee] Position/Designation</label>
                                            <input type="text" name='Position' placeholder="Enter your position" className='form-control' onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <label htmlFor='position'>[Student] Course and Year</label>
                                            <input type="text" name='CourseYr' placeholder="Enter your course and year" className='form-control' onChange={handleChange}/>
                                        </div>
                                        <div className="inputField2">
                                            <label htmlFor='position'>[Concessionaire] Business</label>
                                            <input type="text" name='Business' placeholder="Enter your business" className='form-control' onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <label htmlFor='address'>Address</label>
                                            <input type="text" name='Address' placeholder="Enter your address" className='form-control' onChange={handleChange}/>
                                        </div>
                                        <div className="inputField2">
                                            <label htmlFor='mobilenumber'>Mobile Number</label>
                                            <input type="number" name='MobileNo' placeholder="Enter your mobile number" className='form-control' onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField3">
                                            <label htmlFor='driverslicense'>Driver's License Number</label>
                                            <input type="text" name='DLNo' placeholder="Enter your Driver's License Number" className='form-control' onChange={handleChange}/>
                                        </div>
                                        <div className="inputField3">
                                            <label htmlFor='dateissued'>Date Issued</label>
                                            <input type="date" name='DL_IssueDate' className='form-control' onChange={handleChange}/>
                                        </div>
                                        <div className="inputField3">
                                            <label htmlFor='expiry'>Expiry</label>
                                            <input type="date" name='DL_ExpiryDate' className='form-control' onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <span className="title">Vehicle Information</span>
                                    <div className="fields">
                                        <div className="inputField3">
                                                <label>Vehicle Wheels</label>
                                                <select name='VWheels' onChange={handleChange}>
                                                    <option >Please Select</option>
                                                    <option >2-Wheeled</option>
                                                    <option >3-Wheeled</option>
                                                    <option >4-Wheeled</option>
                                                </select>
                                        </div>
                                        <div className="inputField3">
                                            <label>Plate Number</label>
                                            <input type="text" name='PlateNo' placeholder="Enter Plate Number" onChange={handleChange}/>
                                        </div>
                                        <div className="inputField3">
                                            <label>Make</label>
                                            <input type="text" name='Make' placeholder="Enter Make" onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <label>Year Model</label>
                                            <input type="number" name='YearModel' placeholder="Enter Year Model" onChange={handleChange}/>
                                        </div>
                                        <div className="inputField2">
                                            <label>Color</label>
                                            <input type="text" name='Color' placeholder="Enter Color" onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField3">
                                            <label>Official Receipt Number</label>
                                            <input type="number" name='ORNo' placeholder="Enter Official Receipt Number" onChange={handleChange}/>
                                        </div>
                                        <div className="inputField3">
                                            <label>Date Issued</label>
                                            <input type="date" name='OR_IssueDate' onChange={handleChange}/>
                                        </div>
                                        <div className="inputField3">
                                            <label>Expiry Date</label>
                                            <input type="date" name='OR_ExpiryDate' onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <label>Authorized Person to Use</label>
                                            <input type="text" name='APName1' placeholder="Enter Authorize Person No. 1" onChange={handleChange}/>
                                        </div>
                                        <div className="inputField2">
                                            <label>&nbsp;</label>
                                            <input type="text" name='APName2' placeholder="Enter Authorize Person No. 2" onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <input type="text" name='APName3' placeholder="Enter Authorize Person No. 3" onChange={handleChange}/>
                                        </div>
                                        <div className="inputField2">
                                            <input type="text" name='APName4' placeholder="Enter Authorize Person No. 4" onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <input type="text" name='APName5' placeholder="Enter Authorize Person No. 5" onChange={handleChange}/>
                                        </div>
                                        <div className="inputField2">
                                            <input type="text" name='APName6' placeholder="Enter Authorize Person No. 6" onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <input type="text" name='APName7' placeholder="Enter Authorize Person No. 7" onChange={handleChange}/>
                                        </div>
                                        <div className="inputField2">
                                            <input type="text" name='APName8' placeholder="Enter Authorize Person No. 8" onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <input type="text" name='APName9' placeholder="Enter Authorize Person No. 9" onChange={handleChange}/>
                                        </div>
                                        <div className="inputField2">
                                            <input type="text" name='APName10'  placeholder="Enter Authorize Person No. 10" onChange={handleChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="Btn">
                                    <button type="button" onClick={handleCancel} className="cancelButton">Cancel</button>
                                    <button type="submit" className="submitButton">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}
 
export default RegForm;