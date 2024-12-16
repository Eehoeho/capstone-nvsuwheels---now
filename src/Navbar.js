import React from "react";
import NVSULogo from "./NVSU2.png"
import { IoMdNotifications, IoMdArrowDropdown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import "./nav.css";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    const GotoLogin= (event) =>{
        navigate('/login')
    }
    return ( 
        <nav className="nav">
            <img src={NVSULogo} alt=""/>
            <div className="links notification-bell">
                <a href="/user/rules_and_regulations">Home</a>
                <IoMdNotifications className="bell"/>
                
            </div>
            <div className="dropdown">
                <button className="dropbtn"><FaUserCircle className="dropicon"/><IoMdArrowDropdown /></button>
                <div className="dropdown-content">
                    <a href=" " onClick={GotoLogin}>Logout</a>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;