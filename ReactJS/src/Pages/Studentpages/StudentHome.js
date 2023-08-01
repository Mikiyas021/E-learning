import React, { useEffect, useLayoutEffect } from 'react';
import pro from '../Images/770137_man_512x512 (1).png';
import axios from 'axios';
import Course from '../Images/download_teacher.png';
import { Routes, Route, Link } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Quiz from './Quiz';
import Assignment from './Assignment';
import Announcement from './Announcement';
import '../Pagescss/Studentpage.css';
import {faBookOpenReader, faFileCircleCheck,faBars} from '@fortawesome/free-solid-svg-icons';
import {faClipboardQuestion} from '@fortawesome/free-solid-svg-icons';
import {faBullhorn} from '@fortawesome/free-solid-svg-icons';
import {faChalkboard} from '@fortawesome/free-solid-svg-icons';
import {faFile} from '@fortawesome/free-solid-svg-icons';
import {faListCheck} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import DefaultHome from './DefaultHome';
import Logout from './Logout';
import { useState } from 'react';
import Login from '../Loginpage/Login';
import SubjectOverview from './SubjectOverview';
import Mycourses from './Mycourses';
import MaterialStudent from './MaterialStudent';
import Profile from './Profile';
import Grade from './Grade';
import Coursetitle from './Coursetitle';
function StudentHome() {
  const navigate = useNavigate();
  const [auth, setauth] = useState('');
 
    useLayoutEffect(()=>{
      var auth = sessionStorage.getItem('username');
          setauth(auth);
        if(auth === null){
            navigate('/Login');
        }
        
    },[]
    )
 
    const Logout = () =>{
      fetch("http://localhost/logout.php")
      sessionStorage.removeItem('username');
      sessionStorage.clear();
      localStorage.removeItem("session_id");
      localStorage.clear();
      navigate('/Login');
    }
    const [listcourse, setcourse] = useState([]);
    
    useEffect(()=>{
        const id = sessionStorage.getItem('ID');
        fetch(`http://localhost/Course_fetch_student.php?id=${id}`)
        .then(res=>res.json())
        .then(
            (result)=>{
                setcourse(result);
                console.log(listcourse);
            }
        )
        
    },[])
     const [Course_id, setcourseid] = useState(null);
     const [coursename, setcoursename] = useState("choose");
     useEffect(()=>{
      const course = sessionStorage.getItem('Course_id');

    
      setcourseid(course);
      const course_name = sessionStorage.getItem('course_title');
      {course_name === null?
      setcoursename("Choose course")
      :
      setcoursename(course_name + " course");
      }
     }
     )
     const [showMenu, setShowMenu] = useState(true);

     const toggleMenu = () => {
       setShowMenu(!showMenu);
     };

  return (
    <>
    
   <div className='page'>
    <div  className='menu'>
     <button onClick={toggleMenu} id='menuicon' ><FontAwesomeIcon icon={faBars} /></button></div>
    <div className={showMenu ? 'side-bar' : 'menu'}>
    
              <Link to='profile' class="class" role="button"><FontAwesomeIcon icon={faUser} /> Profile</Link>

        <Link className='' to=""></Link>
        <Link className='class' to="course"><FontAwesomeIcon icon={faBookOpenReader} size="s" />  My courses</Link>
        <h3 className='coursename'>{coursename}</h3>
        {
          Course_id !== null ?
        <div>
          
        <Link className='class' to="quiz"><FontAwesomeIcon icon={faClipboardQuestion} size="sm" /> Quiz</Link>
        <Link className='class' to="assignment" ><FontAwesomeIcon icon={faListCheck}  size="sm"/> Assignments</Link>
        <Link className='class' to="subject" ><FontAwesomeIcon icon={faChalkboard} size="sm"/> Subject overview</Link>
        <Link className='class' to="studentmaterial" ><FontAwesomeIcon icon={faFile} size="sm"/> Learning materials</Link>
        <Link className='class' to="studentgrade" ><FontAwesomeIcon icon={faFileCircleCheck} size="sm"/>Grade</Link>
        <Link className='class' to="announcement" ><FontAwesomeIcon icon={faBullhorn} size="sm"/> Announcements</Link>
       
        </div>
        :
         <p></p>
        }
       <Link to='/Login' className='class' id="logout" onClick={Logout}> <FontAwesomeIcon icon={faRightFromBracket} /> Log out</Link>
    </div>
  
      <div className="Dashboard">
        
          {
            auth!==null ?
            <Routes>
          <Route exact path="" element={<DefaultHome />} />
          <Route exact path="/course/*" element={<Mycourses />} />
          <Route exact path='/course/coursetitle' element={<Coursetitle />} />
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/studentmaterial" element={<MaterialStudent />} />
          <Route exact path="/subject" element={<SubjectOverview />} />
          <Route exact path="/assignment" element={<Assignment />} />
          <Route exact path="/announcement" element={<Announcement />} />
          <Route exact path="/studentgrade" element={<Grade />} />
          <Route exact path="/profile" element={<Profile />} />

          </Routes>
           :
          navigate('/login')
           }
        
      </div>
    </div>
    <Footer />
    </>
    
  )
};

export default StudentHome;
