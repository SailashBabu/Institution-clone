
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar(){
    return(
       <div className="navbar">
            <div className="topbar">
                <p>Kumaraguru College Of Technology</p>
            </div>
            <div className="sidebar">
                <img src="https://www.mycamu.co.in/camu_attachment/get/60252d3d1b906378e63fb078" alt="Logo" />
                    <div className="nav-items">
                        <button onClick={useNavigate("/institution")} >My Institution</button>
                        <button onClick={useNavigate("/attendance")} >Attendance</button>
                        <button onClick={useNavigate("/institution")} >Assignments</button> 
                        <button onClick={useNavigate("/institution")} >Exam Schedules</button> 
                        <button onClick={useNavigate("/institution")} >Reports</button> 
                        <button onClick={useNavigate("/institution")} >Assessments</button> 
                        <button onClick={useNavigate("/institution")} >Holidays</button> 
                        <button onClick={useNavigate("/institution")} >Timetable</button> 
                        <button onClick={useNavigate("/institution")} >Teaching content</button>
                    </div>
            </div> 

       </div>
    );
};

export default Navbar;