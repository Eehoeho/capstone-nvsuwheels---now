import React from "react";
import { CiFacebook, CiYoutube, CiLocationOn } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import "./Footer.css";
import NVSUlogo from "../NVSU2.1.png";

const  Footer = () => {
    return ( 
        <footer>
        <div className="ContainerF">
{/* ------------------------------- Left ----------------------------------------------------- */}
            <div className="left">
                <img src={NVSUlogo} alt="" />
            </div>
{/* ------------------------------ Center -----------------------------------------------------*/}
            <div className="center">
                    <p><CiLocationOn className="icons"/>Heroes Blvd, Bambang, Nueva Vizcaya <br /> &emsp;&emsp;&emsp;&nbsp;Region II - Cagayan Valley, Philippines</p>
                    <p><IoIosPhonePortrait className="icons"/>(078) 321 2112</p>
                    <p><FaRegEnvelope className="icons"/><a href=" "> info@nvsu.edu.ph</a></p>
            </div>
{/* ---------------------------------- Right ------------------------------------------------ */}
            <div className="right">
                <div className="about">
                    <h1>About the University</h1>
                    <p>A leading university in education, innovation, and sustainable development</p>
                </div>
        
                <div className="centerRight">
                    <a href=" "><CiFacebook className="icons"/></a>
                    <a href=" "><CiYoutube className="icons"/></a>
                </div>
            </div>
{/*----------------------------------- Copyright ---------------------------------------------*/}
            <div className="copyright">
                <p>Copyright © 2023 All Rights Reserved. Developed by <span>NVSU Bambang INTE Student</span></p>
            </div>
        </div> 
        </footer>
    );
}
 
export default Footer;