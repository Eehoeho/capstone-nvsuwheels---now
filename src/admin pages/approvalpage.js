    import React, { useEffect, useState } from 'react';
    import { Link } from 'react-router-dom';
    import './admin.css';
    import axios from 'axios';
    import NavbarA from "../NavbarA";
    import Footer from "../Footer/Footer";

    const ApprovalPage = () => {
      const [users, setUsers] = useState([]);
      const [currentPage, setCurrentPage] = useState(1);
      const usersPerPage = 10; // Number of users to display per page

      useEffect(() => {
        getUsers();
      }, []);

      // Get users with error handling
      function getUsers() {
        axios.get('http://localhost:8888/api/admin/pending').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
      }
      const approveUser  = (userId) => {
        axios.put(`http://localhost:8888/api/admin/${userId}/approve`)
            .then(response => {
                // Check if response data has status and message
                if (response.data && response.data.status !== undefined) {
                    alert(response.data.message);
                    // Refresh the user list after approval
                    getUsers();
                } else {
                    alert("Unexpected response format.");
                }
            })
            .catch(error => {
                console.error("There was an error approving the user!", error);
            });
    };
      const rejectUser  = (userId) => {
        axios.delete(`http://localhost:8888/api/admin/${userId}/reject`)
          .then(response => {
            if (response.data.status === 1) {
              alert(response.data.message);
              // Refresh the user list after rejection
              getUsers();
            } else {
              alert(response.data.message);
            }
          })
          .catch(error => {
            console.error("There was an error rejecting the user!", error);
          });
      };

      const indexOfLastUser     = currentPage * usersPerPage;
      const indexOfFirstUser     = indexOfLastUser     - usersPerPage;
      const currentUsers = users.slice(indexOfFirstUser  , indexOfLastUser  );
      
      const totalPages = Math.ceil(users.length / usersPerPage);
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
                <h2 className='text-center mt-4'>APPROVAL PAGE</h2>
                  <div className="table-container">
                    <table className='table'>
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
                        {currentUsers.map((user, key) =>
                          <tr key={key}>
                            <td>{user.Fullname}</td>
                            <td>{user.IDNo}</td>
                            <td>{user.Applicant}</td>
                            <td>{user.VWheels}</td>
                            <td>{user.PlateNo}</td>
                            <td>{user.Make}</td>
                            <td className='text-center'>
                              <Link to={`/admin/${user.AID}/viewrequest`} className='btn btn-sm btn-info ms-2' data-toggle="tooltip" data-placement="top" title="View">View</Link>
                              <button onClick={() => approveUser (user.AID)} className='btn btn-sm btn-success ms-2' data-toggle="tooltip" data-placement="top" title="Approve">Approve</button>
                              <button onClick={() => rejectUser (user.AID)} className='btn btn-sm btn-danger ms-2' data-toggle="tooltip" data-placement="top" title="Reject">Reject</button>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
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

    export default ApprovalPage;
