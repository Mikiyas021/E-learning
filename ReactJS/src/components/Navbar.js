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
import { useEffect, useRef, useState } from 'react';
import { useLayoutEffect } from 'react';
import {faToggleOn} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import SignupTeacher from '../Pages/SignupTeacher';
import About from './Aboutee';
import Contact from './Contactee';
function Navbar() {
const [dark, setDark] = useState(false);
const cssStyle = {
    backgroundColor: dark? "black": "white",
    color: dark? "white": "black",
    };
    const [Bool, setbool] = useState(false);
    const [auth, setauth] = useState('');
    useEffect(() => {
        if (sessionStorage.getItem('username') !== null) {
          setbool(true);
        }
      }, []);
      
/*const handleclick = () =>{
 sessionStorage.removeItem('username');      
    setbool(false);
}
const han = () =>{
    setbool(true);
}
    */
      
    return(     
        <><div style={cssStyle}>
    <div >
       <nav  className="header">
        <div>
        <img src={Head} className='imgg' alt="CCBH" width={600} height={100}></img>
      </div>
       <ul className='navclass'>
           <li><NavLink to="/">HOME</NavLink></li>
           {
            Bool ?
            <li><NavLink to="/" className="navlink" id="loginout" ></NavLink></li>
            : 
      <li><NavLink to="/Login" className="navlink" id="loginout" >Login</NavLink></li>
            
           }

           <button onClick={()=>setDark(!dark)}><FontAwesomeIcon icon={faToggleOn} size="lg" /></button>
           
            </ul>  
             </nav>
                
              </div>
           <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contact/*" element={<StudentHome  />} />
                    <Route exact path="/Login/*" element={<Login />} />
                    <Route exact path="/about/*" element={<About />} />
                    <Route exact path="/contactee/*" element={<Contact />} />
                    <Route exact path="/choose/*" element={<Choose />} />
                    <Route exact path="/Signup" element={<Signup/>}></Route>
                    <Route exact path="/Signupteacher" element={<SignupTeacher/>}></Route>

                    <Route exact path="/Forgot" element={<Forgot/>}></Route>
                    <Route exact path="/StudentHome" element={<StudentHome/>}></Route>
                    <Route exact path="/new/*" element={<InstructorHome/>}></Route>
                    <Route exact path="/ad/*" element={<AdminHome/>}></Route>
                    <Route exact path="/DH/*" element={<DHhome/>}></Route>


            </Routes>
            </div>
    </>
    )
};
export default Navbar;