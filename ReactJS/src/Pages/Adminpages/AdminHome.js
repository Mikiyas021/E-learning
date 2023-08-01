import React from 'react';
import { Link, Routes,Route } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import {useState, useLayoutEffect } from 'react'
import Footer from '../../components/Footer';
import StudentsList from './StudentsList';
import TeachersList from './TeachersList';
import {faHouse,faBars} from '@fortawesome/free-solid-svg-icons';
import {faPersonChalkboard} from '@fortawesome/free-solid-svg-icons';
import {faChalkboardUser} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import DefaultAdminPage from './DefaultAdminPage';
import CreateAccount from './CreateAccount';
import Manageaccount from './Manageaccount';
function AdminHome() {
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
         <Link className='class' to=""><FontAwesomeIcon icon={faHouse} /> Dashboard</Link>
         
         <Link className='class' to="StudentsList" ><FontAwesomeIcon icon={faChalkboardUser} /> Students List</Link>
         <Link className='class' to="TeachersList" ><FontAwesomeIcon icon={faPersonChalkboard} size="sm"/> Teachers List</Link>
         <Link className='class' to="Manageaccount" ><FontAwesomeIcon icon={faUsers} /> Manage account</Link>
       9
         <button className='class' onClick={Logout}><FontAwesomeIcon icon={faRightFromBracket} size="sm"/>Log out</button>
 
     </div>
       <div className="Dashboard">
       {
            auth!==null ?
        <Routes>
        <Route exact path='/' element={<DefaultAdminPage />} />
          <Route exact path='/studentsList' element={<StudentsList />} />
          <Route exact path='/TeachersList' element={<TeachersList />} />
          <Route exact path='/Manageaccount/*' element={<Manageaccount />} />
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

export default AdminHome