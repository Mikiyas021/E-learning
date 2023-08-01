import React from 'react';
import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pagescss/AssessmentForm.css';
import GradeStudent from './GradeStudent';
function Grade() {
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
    const [list_class, setlistclass] = useState([]);

useEffect(()=>{
    const id = sessionStorage.getItem('Teacher_id');
    fetch(`http://localhost/fetch_teacher_class.php?id=${id}`)
    .then(res=> res.json())
    .then(
        (result)=>{
            setlistclass(result)
           
            
        }
    )
    
},[])
  return (
    <div>
         <div  className='classlink'>
      <h3 className='chooseclass'>Choose class </h3>
   {
        list_class.map((classes)=>(
            <div id='btnclassname5'>
              <Link to="gradestudent" onClick={()=>{
                window.sessionStorage.setItem('Class_name',classes.Class_name);
                window.sessionStorage.setItem('course_title',classes.Course_name);
                }} className='button-17' >{classes.Class_name} </Link>
            </div>
        )
        )  
       }
      </div>
      {
            auth!==null ?
            <Routes>
            <Route exact path='/gradestudent' element={<GradeStudent />}></Route>
            </Routes>
            :
           navigate('/login')
            }
    </div>
  )
}

export default Grade