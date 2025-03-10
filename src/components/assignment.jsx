
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
        <div className="selection-bar">
        <input type="date"></input>
        <input type="date"></input>
        <select name="Subjects">
            <option>Subjects</option>
            <option>FullStack</option>
            <option>Devops</option>
        </select>
        </div>
       
        <table>
            <div className="table-header">
            <tr>
                <th>DUE DATE</th>
                <th>PROJECT</th>
                <th>TYPE</th>
                <th>STATUS</th>
            </tr>
            </div>
        </table>

        </>
    )
}