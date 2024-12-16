import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './admin.css';
import axios from 'axios';
import NavbarA from "../NavbarA";
import Footer from "../Footer/Footer";

const Infopage = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10; // Number of users to display per page

  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get('http://localhost:8888/api/admin/information')
      .then(function(response) {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(function(error) {
        console.error("There was an error fetching the users!", error);
      });
  }

  // Filter users based on search term
  const filteredUsers = users.filter(user => 
    user.Fullname.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.IDNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.Applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.VWheels.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.Make.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.PlateNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser  = currentPage * usersPerPage;
  const indexOfFirstUser  = indexOfLastUser  - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser , indexOfLastUser );
  
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <NavbarA/>
        <div className='BG'>
          <div className='containerA'>
            <h2 className='text-center mt-4'>INFORMATION</h2>
            <div className="table-container">
              <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="form-control mb-3" 
              />
              <div className="table-responsive">
                <table className='table table-striped table-bordered'>
                  <thead>
                    <tr>
                      <th>Fullname</th>
                      <th>ID Number</th>
                      <th>Applicant</th>
                      <th>Vehicle Wheels</th>
                      <th>Plate Number</th>
                      <th>Make</th>
                      <th className='text-center'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentUsers.map((user, index) =>
                      <tr key={index}>
                        <td>{user.Fullname}</td>
                        <td>{user.IDNo}</td>
                        <td>{user.Applicant}</td>
                        <td>{user.VWheels}</td>
                        <td>{user.PlateNo}</td>
                        <td>{user.Make}</td>
                        <td className='text-center'>
                          <Link to={`/admin/${user.AID}/edit`} className='btn btn-sm btn-primary' title="Edit">Edit
                          </Link>
                          <Link to={`/admin/${user.AID}/viewinfo`} className='btn btn-sm btn-info ms-2' title="View">
                            View
                          </Link>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="d-flex justify-content-end mt-3 pagination-buttons">
              <button 
                onClick={handlePrevious} 
                disabled={currentPage === 1} 
                className="btn btn-primary me-2"
              >
                Previous
              </button>
              <span className="pt-1 me-2">Page {currentPage} of {totalPages}</span>
              <button 
                onClick={handleNext} 
                disabled={currentPage === totalPages} 
                className="btn btn-primary"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  );
};

export default Infopage;