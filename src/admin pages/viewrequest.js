import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./admin.css"
import Navbar from "../NavbarA";
import Footer from "../Footer/Footer";

const ViewRequest = () => {
  const { AID } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8888/api/admin/pending/${AID}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the pending information!", error);
      });
  }, [AID]);

  return (
    <div>
      <Navbar/>
      <div className='BG'>
        <div className="containerV">
          <h1>VIEW PENDING REQUEST</h1>
          <div className="content">
            <div className='viewfield'>
              <h2>Applicant Information</h2>
              <p>Full Name: {user.Fullname}</p>
              <p>ID Number: {user.IDNo}</p>
              <p>Applicant: {user.Applicant}</p>
              <p>Position/Designation: {user.Position}</p>
              <p>Course and Year: {user.CourseYr}</p>
              <p>Business: {user.Business}</p>
              <p>Address: {user.Address}</p>
              <p>Mobile Number: {user.MobileNo}</p>
            </div>

            <div className='viewfield'>
              <h2>Driver's License Information</h2>
              <p>Driver's License Number: {user.DLNo}</p>
              <p>Date Issued: {user.DL_IssueDate}</p>
              <p>Expiry: {user.DL_ExpiryDate}</p>
            </div>

            <div className='viewfield'>
              <h2>Vehicle Information</h2>
              <p>Vehicle Wheels: {user.VWheels}</p>
              <p>Plate Number: {user.PlateNo}</p>
              <p>Make: {user.Make}</p>
              <p>Year Model: {user.YearModel}</p>
              <p>Color: {user.Color}</p>
            </div>

            <div className='viewfield'>
              <h2>Official Receipt Information</h2>
              <p>Official Receipt Number: {user.ORNo}</p>
              <p>Date Issued: {user.OR_IssueDate}</p>
              <p>Expiry Date: {user.OR_ExpiryDate}</p>
            </div>

            <div className='viewfield'>
              <h2>Authorized Person to Use</h2>
              <p>Authorized Person 1: {user.APName1}</p>
              <p>Authorized Person 2: {user.APName2}</p>
              <p>Authorized Person 3: {user.APName3}</p>
              <p>Authorized Person 4: {user.APName4}</p>
              <p>Authorized Person 5: {user.APName5}</p>
              <p>Authorized Person 6: {user.APName6}</p>
              <p>Authorized Person 7: {user.APName7}</p>
              <p>Authorized Person 8: {user.APName8}</p>
              <p>Authorized Person 9: {user.APName9}</p>
              <p>Authorized Person 10: {user.APName10}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ViewRequest;