
import Navbar from "./Navbar"
import '../styles/assignments.css'
export default function Assignments(){
    return(
        <>
        <Navbar/>
        <h2>Assignments / 2024-2025</h2>
        <div className="assignment-nav">
            <button>PENDING</button>
            <button>ALL</button>
        </div>
        </>
    )
}