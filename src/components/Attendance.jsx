import Navbar from './Navbar'
import AttendanceNavbar from './Attendance-navbar'
import AttendancePlot from './Attendance-Plot'
import '../styles/attendance.css'

export default function Attendance(){
    return(<div className='attendance-page' >
    <Navbar/>
    <div >
    <AttendanceNavbar/>
    <AttendancePlot/>
    </div>
    </div>
    )
} 