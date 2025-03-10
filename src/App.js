import React  from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Attendance from './components/Attendance'
import Assignments from "./components/assignment";

const App = ()=>{
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/attendance' element={<Attendance />}/>
        <Route path='/assignment' element={<Assignments />}/>
        
        
      </Routes>
    </Router>
  )
}
export default App;
