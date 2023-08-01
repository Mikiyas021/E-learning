import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Quizradio from './Quizradio';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Addquestion from './Addquestion';
function AddandDisplay() {
  const navigate = useNavigate();
  const [auth, setauth] = useState('');
  const [list_class, setlistclass] = useState([]);
    useEffect(()=>{
      var auth = sessionStorage.getItem('username');
        if(auth === null){
            navigate('/Login');
        }
        setauth(auth);
    },[]
    )
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
      <h1>Exam page</h1>
      {
        list_class.map((classes)=>(
            <div id='btnclassname5'>
              <Link to="new/quiz" onClick={()=>{
                window.sessionStorage.setItem('Class_name',classes.Class_name);
                window.sessionStorage.setItem('course_title',classes.Course_name);
                }} className='button-17' >Quiz to {classes.Class_name} </Link>
            </div>
        )
        )  
       }
            
            {
            auth!==null ?
        <Routes>
        <Route exact path="/new/quiz/*" element={<Quizradio/>} />
        </Routes>
        :
        navigate('/login')
         }
    </div>
  )
}

export default AddandDisplay