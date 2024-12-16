import React, { useState } from "react";
import "./RnR.css";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const RnRContent = () => {
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleProceed = () => {
        if (isChecked) {
            navigate('/user/vehicle_registration'); // Adjust the path to your registration form
        }
    };

    return ( 
        <div>
            <Navbar/>
                <div className="rnrBG">
                    <div className="containerRnR">
                        <h1>RULES AND REGULATIONS</h1>
                        <p>(Culled from the provision of Circular No. 2015-002 or the Rules and Guidelines on the Application and Issuance of University Motor Vehicle Security Pass Sticker and Implementation of Pertinent Rules and Regulations Governing Land Transportation within Nueva Vizcaya State University Campuses.)</p>
                        <div className="content">
                            <ul>
                                <li className="tList">Observance of the following rules:</li>
                                    <ol type="1" className="List">
                                        <li>No Sticker, No Entry</li>
                                        <li>One Vehicle, One Sticker.</li>
                                        <li>Speed limit of 15kph for all types of vehicles.</li>
                                        <li>Lowering down of window for tinted vehicles and removal of helmet for identification at the university entrance.</li>
                                        <li>Road signs shall be strictly followed.</li>
                                    </ol>
                                <li className="tList">Prohibited acts:</li>
                                    <ol className="List">
                                        <li>Blowing of the horn.</li>
                                        <li>Playing loud radio or music.</li>
                                        <li>Parking along busy areas, sharp curves, and corners or in non-designated parking areas.</li>
                                        <li>Reckless driving.</li>
                                        <li>Driving without a valid driver's license</li>
                                        <li>Driving an unregistered motor vehicle.</li>
                                        <li>Driving a motor vehicle while under the influence of alcohol or dangerous drugs.</li>
                                        <li>Carrying illegal and/or prohibited cargoes.</li>
                                        <li>Unauthorized motor vehicle modification.</li>
                                        <li>Motor vehicle operating without or with defective/improper/unauthorized accessories, devices, equipment, and parts.</li>
                                        <li>Failure to attach or improper attachment/tampering of authorized motor vehicle license plates and/or third plate stickers.</li>
                                        <li>Smoking belching.</li>
                                    </ol>
                                <li className="tList">Violation of these rules may be met with the following:</li>
                                    <ol type="a" className="List">
                                        <li>First Offense:&emsp;&emsp;&emsp;&emsp;&emsp;Verbal Warning</li>
                                        <li>Second Offense:&emsp;&emsp;&emsp;&nbsp;Written Warning</li>
                                        <li>Third Offense:&emsp;&emsp;&emsp;&emsp;&ensp;Suspension of the privilege to use the sticker and denial of access to the vehicle to the university premises.</li>
                                        <li>Fourth Offense:&emsp;&emsp;&emsp;&emsp;Revocation of the privilege to use the sticker and denial of the vehicle to the university</li>
                                    </ol>
                            </ul>
                            <div className="terms-container">
                                <label>
                                    <input 
                                        type="checkbox" 
                                        checked={isChecked} 
                                        onChange={handleCheckboxChange} 
                                    />
                                    I agree to the Terms and Conditions
                                </label>
                                <button 
                                    type="button" 
                                    onClick={handleProceed} 
                                    disabled={!isChecked}
                                >
                                    Proceed to Registration
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}
 
export default RnRContent;