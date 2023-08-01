import React from 'react'
import Course from '../Images/download_teacher.png';
import { useState } from 'react';
import { useEffect } from 'react';
import {Link,Routes,Route} from 'react-router-dom';
import './Mycourse.css';
import Coursetitle from './Coursetitle';
function Mycourses() {
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

  return (
    <div>
         <h1>My Courses</h1>
    <div className='course_list'>
       {
        listcourse.map((course)=>(
            
             <div className='data_box2'><img src={Course} className='info2'></img><h3><Link to='coursetitle' onClick={()=>{
                window.sessionStorage.setItem('Course_id',course.Course_code);
                window.sessionStorage.setItem('course_title',course.title);
                }}>{course.title} {course.Course_code}</Link></h3> 
                
                  </div>
        )
        )  
       }
    </div>
   </div>
  
  )
}

export default Mycourses;