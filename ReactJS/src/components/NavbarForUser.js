import '../Pages/Pagescss/Front.css';
import Head from '../components/images/CAPITAL.png';

import Course from './Course';
import Home from '../Pages/Home';
import Login from '../Pages/Loginpage/Login';
import Choose from '../Pages/Loginpage/Choose';
import Signup from '../Pages/Signup';
import Forgot from '../Pages/Forgot';
import StudentHome from '../Pages/Studentpages/StudentHome';
import InstructorHome from '../Pages/Instructorpages/InstructorHome';
import AdminHome from '../Pages/Adminpages/AdminHome';
import DHhome from '../Pages/DHpages/DHhome';
import Quiz from '../Pages/Studentpages/Quiz';
import { Routes, Route, NavLink } from "react-router-dom";
import { useRef, useState } from 'react';
import { useLayoutEffect } from 'react';
import {faToggleOn} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import SignupTeacher from '../Pages/SignupTeacher';
function NavbarForUser() {
const [dark, setDark] = useState(false);
const cssStyle = {
backgroundColor: dark? "black": "white",
color: dark? "white": "black",
};
    return(     
        <>
    <div style={cssStyle}>
       <nav  className="header">
        <div>
        <img src={Head} className='imgg' alt="CCBH" width={600} height={100}></img>
      </div>
       <ul className='navclass'>
           <li><NavLink to="/">Home</NavLink></li>
           <button onClick={()=>setDark(!dark)}><FontAwesomeIcon icon={faToggleOn} size="lg" /></button>           
            </ul>  
             </nav>
                
              </div>
           <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contact/*" element={<StudentHome  />} />
        
                    <Route exact path="/StudentHome" element={<StudentHome/>}></Route>
                  


            </Routes>
    </>
    )
};
export default NavbarForUser;