import React from 'react';
import Courses from './Courses';
import { Link, Routes,Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
import '../Pagescss/DHhome.css';
import DefaultHome from '../Studentpages/DefaultHome';
import Footer from '../../components/Footer';
import { useEffect } from 'react';
import EffectCleanup from './Check';
import Class from './Class';
import Teacher from './Teacher';
import '../Pagescss/style.css';
import ClassStudent from './ClassStudent';
import {faPersonChalkboard, faUniversity,faBars} from '@fortawesome/free-solid-svg-icons';
import {faBullhorn} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faUsersRectangle} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {faBookOpenReader} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import DHdefault from './DHdefault';
import AddAnnouncement from './AddAnnouncement';
import Departments from './Departments';
import Profile from './Profile';
function DHhome() {
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
      sessionStorage.removeItem('username');
      sessionStorage.clear();
      localStorage.removeItem("session_id");
      localStorage.clear();
      navigate('/Login');
    }
    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  return (
    <>
    <div className='page'>
    <div  className='menu'>
     <button onClick={toggleMenu} id='menuicon'><FontAwesomeIcon icon={faBars} /></button></div>
    <div className={showMenu ? 'side-bar' : 'menu'}>
         <Link className='class' to="Profile" ><FontAwesomeIcon icon={faUser} size="s" /> Profile</Link>
         <Link className='class' to="class" ><FontAwesomeIcon icon={faUsersRectangle} size="sm" /> Classes</Link>
         <Link className='class' to="Teacher" ><FontAwesomeIcon icon={faPersonChalkboard} size="sm"/> Teachers</Link>
         <Link className='class' to="DHcourses"><FontAwesomeIcon icon={faBookOpenReader}size="sm" /> Courses</Link>
         <Link className='class' to="departments"><FontAwesomeIcon icon={faUniversity}size="sm" /> Add departments</Link>
        
         <button className='class'  onClick={Logout}><FontAwesomeIcon icon={faRightFromBracket} size="sm"/> Log out</button>
     </div>
       <div className="Dashboard">
       {
            auth!==null ?
         <Routes>
          <Route exact path = '/Profile/*' element = {<Profile/>} />
           <Route exact path='/' element={<DHdefault />} ></Route>
           <Route exact path="/DHcourses" element={<Courses />} />
           <Route exact path='/check' element={<EffectCleanup />} />
           <Route exact path="/DHannounce" element={<AddAnnouncement />} />
           <Route exact path='/class/*' element={<Class />} />
           <Route exact path='/Teacher' element={<Teacher />} />
          <Route exact path = '/departments' element = {<Departments />} />
         </Routes>
         :
          navigate('/login')
           }
       </div>
     </div>
     <Footer />
     </>
  )
}

export default DHhome;