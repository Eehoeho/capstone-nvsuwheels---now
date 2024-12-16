import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { QRCodeCanvas } from 'qrcode.react';
import "./admin.css";
import Navbar from "../NavbarA";
import Footer from "../Footer/Footer";

const ViewInformation = () => {
  const { AID } = useParams();
  const [user, setUser] = useState({});
  const qrCodeCanvasRef = useRef(null); // Create a ref to hold the canvas reference

  useEffect(() => {
    axios.get(`http://localhost:8888/api/admin/information/${AID}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the pending information!", error);
      });
  }, [AID]);

  const qrCodeData = `Full Name: ${user.Fullname}, 
    Mobile Number: ${user.MobileNo}, 
    Driver's License Number: ${user.DLNo}, 
    DL Issued Date: ${user.DL_IssueDate}, 
    DL Expiry Date: ${user.DL_ExpiryDate}, 
    Plate Number: ${user.PlateNo}, 
    OR Number: ${user.ORNo}, 
    OR Issued Date: ${user.OR_IssueDate}, 
    OR Expiry Date: ${user.OR_ExpiryDate}`;

  // Function to trigger download of QR Code
  const downloadQRCode = () => {
    const canvas = qrCodeCanvasRef.current; // Directly access the canvas from ref
    console.log("Canvas reference:", canvas); // Log the reference to verify it's pointing to the correct element

    if (canvas) {
      console.log("Canvas found:", canvas); // Log the canvas object
      const qrCodeImageUrl = canvas.toDataURL("image/jpeg"); // Get the image as data URL
      const link = document.createElement("a");
      link.href = qrCodeImageUrl;
      link.download = `${user.Fullname}_QRCode.jpg`; // Name the file based on the user's full name
      document.body.appendChild(link); // Add the link to the DOM temporarily
      link.click(); // Trigger the download
      document.body.removeChild(link); // Clean up by removing the link
    } else {
      console.error("QR Code canvas not found");
    }
  };

  // Check if QRCodeCanvas is being rendered properly
  useEffect(() => {
    if (qrCodeCanvasRef.current) {
      console.log("QRCodeCanvas Ref:", qrCodeCanvasRef.current);
      if (qrCodeCanvasRef.current) {
        console.log("Canvas element found:", qrCodeCanvasRef.current);
      } else {
        console.log("Canvas element not found.");
      }
    }
  }, [user]);  // Run when user data is loaded

  return (
    <div>
      <Navbar />
      <div className='BG'>
        <div className="containerV">
          <h1>INFORMATION</h1>
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

              <h2>QR Code</h2>
              {/* Render the QR Code with ref to ensure it's rendered */}
              <QRCodeCanvas
                ref={qrCodeCanvasRef} // Attach the ref directly to the QRCodeCanvas component
                value={qrCodeData.trim()}
                size={200}
                level={"H"}
              />
              <button onClick={downloadQRCode}>Download QR Code</button>
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
      <Footer />
    </div>
  );
}

export default ViewInformation;