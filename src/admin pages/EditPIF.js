import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './admin.css';
import axios from 'axios';
import NavbarA from "../NavbarA";
import Footer from "../Footer/Footer";

const EditPIF = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const { AID } = useParams();

    useEffect(() => {
        getUser ();
    }, []);

    // Get user data with error handling
    function getUser () {
        axios.get(`http://localhost:8888/api/admin/information/${AID}`)
            .then(function(response) {
                console.log(response.data);
                setInputs(response.data);
            })
            .catch(function(error) {
                console.error("There was an error fetching the user!", error);
            });
    }
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8888/api/admin/${AID}/edit`, inputs)
            .then(function(response) {
                console.log(response.data);
                navigate('/admin/information');
            })
            .catch(function(error) {
                console.error("There was an error updating the user!", error);
            });
    }

    return ( 
        <div>
            <NavbarA/>
                <div className='regBG'>
                    <div className='containerR'>
                    <h1>Edit Information</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className="info">
                                    <span className="title">Applicant Information</span>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <label>Full Name</label>
                                            <input type="text" value={inputs.Fullname} name='Fullname' placeholder="Enter your Fullname" className='form-control' onChange={handleChange}/>
                                        </div>
                                        <div className="inputField2">
                                            <label htmlFor='idnumber'>ID Number</label>
                                            <input value={inputs.IDNo} type="text" name='IDNo' placeholder="Enter your ID number" className='form-control' onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <label htmlFor='applicant'>Applicant</label>
                                            <select value={inputs.Applicant} name='Applicant' className='form-control' onChange={handleChange}>
                                                <option>Please Select</option>
                                                <option>Employee</option>
                                                <option>Student</option>
                                                <option>Concessionaires</option>
                                            </select>
                                        </div>
                                        <div className="inputField2">
                                            <label htmlFor='position'>[Employee] Position/Designation</label>
                                            <input type="text" value={inputs.Position} name='Position' placeholder="Enter your position" className='form-control' onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <label htmlFor='position'>[Student] Course and Year</label>
                                            <input type="text"  value={inputs.CourseYr} name='CourseYr' placeholder="Enter your course and year" className='form-control' onChange={handleChange}/>
                                        </div>
                                        <div className="inputField2">
                                            <label htmlFor='position'>[Concessionaire] Business</label>
                                            <input type="text"  value={inputs.Business} name='Business' placeholder="Enter your business" className='form-control' onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <label htmlFor='address'>Address</label>
                                            <input type="text" value={inputs.Address} name='Address' placeholder="Enter your address" className='form-control' onChange={handleChange}/>
                                        </div>
                                        <div className="inputField2">
                                            <label htmlFor='mobilenumber'>Mobile Number</label>
                                            <input type="number" value={inputs.MobileNo} name='MobileNo' placeholder="Enter your mobile number" className='form-control' onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField3">
                                            <label htmlFor='driverslicense'>Driver's License Number</label>
                                            <input type="text" value={inputs.DLNo} name='DLNo' placeholder="Enter your Driver's License Number" className='form-control' onChange={handleChange}/>
                                        </div>
                                        <div className="inputField3">
                                            <label htmlFor='dateissued'>Date Issued</label>
                                            <input type="date" value={inputs.DL_IssueDate} name='DL_IssueDate' className='form-control' onChange={handleChange}/>
                                        </div>
                                        <div className="inputField3">
                                            <label htmlFor='expiry'>Expiry</label>
                                            <input type="date" value={inputs.DL_ExpiryDate} name='DL_ExpiryDate' className='form-control' onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <span className="title">Vehicle Information</span>
                                    <div className="fields">
                                        <div className="inputField3">
                                                <label>Vehicle Wheels</label>
                                                <select  value={inputs.VWheels} name='VWheels' onChange={handleChange}>
                                                    <option >Please Select</option>
                                                    <option >2-Wheeled</option>
                                                    <option >3-Wheeled</option>
                                                    <option >4-Wheeled</option>
                                                </select>
                                        </div>
                                        <div className="inputField3">
                                            <label>Plate Number</label>
                                            <input type="text"  value={inputs.PlateNo} name='PlateNo' placeholder="Enter Plate Number" onChange={handleChange}/>
                                        </div>
                                        <div className="inputField3">
                                            <label>Make</label>
                                            <input type="text"  value={inputs.Make} name='Make' placeholder="Enter Make" onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <label>Year Model</label>
                                            <input type="number"  value={inputs.YearModel} name='YearModel' placeholder="Enter Year Model" onChange={handleChange}/>
                                        </div>
                                        <div className="inputField2">
                                            <label>Color</label>
                                            <input type="text"  value={inputs.Color} name='Color' placeholder="Enter Color" onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField3">
                                            <label>Official Receipt Number</label>
                                            <input type="number"  value={inputs.ORNo} name='ORNo' placeholder="Enter Official Receipt Number" onChange={handleChange}/>
                                        </div>
                                        <div className="inputField3">
                                            <label>Date Issued</label>
                                            <input type="date"  value={inputs.OR_IssueDate} name='OR_IssueDate' onChange={handleChange}/>
                                        </div>
                                        <div className="inputField3">
                                            <label>Expiry Date</label>
                                            <input type="date"  value={inputs.OR_ExpiryDate} name='OR_ExpiryDate' onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <label>Authorized Person to Use</label>
                                            <input type="text" value={inputs.APName1} name='APName1' placeholder="Enter Authorize Person No. 1" onChange={handleChange}/>
                                        </div>
                                        <div className="inputField2">
                                            <label>&nbsp;</label>
                                            <input type="text" value={inputs.APName2} name='APName2' placeholder="Enter Authorize Person No. 2" onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <input type="text" value={inputs.APName3} name='APName3' placeholder="Enter Authorize Person No. 3" onChange={handleChange}/>
                                        </div>
                                        <div className="inputField2">
                                            <input type="text" value={inputs.APName4} name='APName4' placeholder="Enter Authorize Person No. 4" onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <input type="text" value={inputs.APName5} name='APName5' placeholder="Enter Authorize Person No. 5" onChange={handleChange}/>
                                        </div>
                                        <div className="inputField2">
                                            <input type="text" value={inputs.APName6} name='APName6' placeholder="Enter Authorize Person No. 6" onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <input type="text" value={inputs.APName7} name='APName7' placeholder="Enter Authorize Person No. 7" onChange={handleChange}/>
                                        </div>
                                        <div className="inputField2">
                                            <input type="text" value={inputs.APName8} name='APName8' placeholder="Enter Authorize Person No. 8" onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="fields">
                                        <div className="inputField2">
                                            <input type="text" value={inputs.APName9} name='APName9' placeholder="Enter Authorize Person No. 9" onChange={handleChange}/>
                                        </div>
                                        <div className="inputField2">
                                            <input type="text" value={inputs.APName10} name='APName10' placeholder="Enter Authorize Person No. 10" onChange={handleChange}/>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="Btn">
                                    <button type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}
 
export default EditPIF;