import React from 'react';
import '../Pagescss/Studentpage.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Assignment from './Assignment';
import StudentsList from './StudentsList';
import Announcement from './Announcement';
import DefaultHome from '../Studentpages/DefaultHome';
import {faFileCircleCheck,faBars} from '@fortawesome/free-solid-svg-icons';
import {faClipboardQuestion} from '@fortawesome/free-solid-svg-icons';
import {faBullhorn} from '@fortawesome/free-solid-svg-icons';
import {faFile} from '@fortawesome/free-solid-svg-icons';
import {faListCheck} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';
import Quizradio from './Quizradio';
import AddandDisplay from './AddandDisplay';
import Material from './Material';
import AssessmentForm from './Grade';
import Profile from './Profile';
function InstructorHome() {
  const navigate = useNavigate();
  const [auth, setauth] = useState('');
    useEffect(()=>{
      var auth = sessionStorage.getItem('username');
        if(auth === null){
            navigate('/Login');
        }
        setauth(auth);
    },[]
    )
    const Logout = () =>{
      sessionStorage.removeItem('username');
      sessionStorage.clear();
      localStorage.removeItem("session_id");
      localStorage.clear();
      navigate('/Login');
    }
    const [photo, setphoto] = useState([]);
    useEffect(() => {
      const id1 = sessionStorage.getItem('Teacher_id');
      fetch(`http://localhost/fetch_profile.php?id1=${id1}`)
        .then(response => response.json())
        .then(data => {    
          setphoto(data);
          console.log(data);
          
        });
    }, []);
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
        <Link to='profile' class="class" id="protext" role="button">   { photo.map(photo=>(
     
       <img src={'http://127.0.0.1:8887/'+photo.src} class="avatarhome img-circle" alt="avatar" />

       ))
    } Profile</Link>
        <Link className='class' to="assignment"><FontAwesomeIcon icon={faListCheck}  /> Assignment</Link>
        <Link className='class' to="quiz"><FontAwesomeIcon icon={faClipboardQuestion} size="lg" /> Quiz</Link>
        <Link className='class' to="material" ><FontAwesomeIcon icon={faFile} size="lg"/> Learning materials</Link>
        <Link className='class' to="grade" ><FontAwesomeIcon icon={faFileCircleCheck} />Grade</Link>
        <Link className='class' to="announcement" ><FontAwesomeIcon icon={faBullhorn} /> Announcement</Link>
        <Link className='class' to="StudentsList" ><FontAwesomeIcon icon={faList} /> Students List</Link>
        <Link to='/Login' className='class' onClick={Logout}> <FontAwesomeIcon icon={faRightFromBracket} /> Log out</Link>

    </div>
      <div className="Dashboard">
      {
            auth!==null ?
        <Routes>
           <Route exact path="/" element={<DefaultHome />} />
          <Route exact path="/assignment" element={<Assignment />} />
          <Route exact path="/StudentsList/*" element={<StudentsList />} />
          <Route exact path="/announcement" element={<Announcement />} />
          <Route exact path="/quiz/*" element={<AddandDisplay />} />
          <Route exact path= "/material" element ={<Material />} />
          <Route exact path= "/profile/*" element ={<Profile />} />
          <Route exact path= "/grade/*" element ={<AssessmentForm />} />

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

export default InstructorHome