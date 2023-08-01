import React from 'react';
import Teacher from '../Images/download_allteachers.jpg';
import UserTeacher from '../Images/download_teacher.png';
import Student from '../Images/download_student.png';
import Student_ from '../Images/student.png';
import { useEffect } from 'react';
import { useState } from 'react';
import './AdHome.css';
function DefaultAdminPage() {
  const [list, setlist] = useState([]);
  useEffect(()=>{
  fetch("http://localhost/fetch_total_users.php").then(result=>
  result.json()
  )
  .then(result=>{
    setlist(result);
  
  })
}, []
  )
  return (
   
    <div className='data'>
    <div className='data_box'>
    <div><img src={Student_} className='info'></img></div>
    <div>
      Registered Students
      <div className='value2'><h1>{list.student_user}</h1></div>
    </div>
    </div>
    <div className='data_box'>
    <div><img src={Student} className='info'></img></div>
    <div>
      Total Students
      <div className='value1'><h1>{list.student}</h1></div>
    </div>
    </div>
    <div className='data_box'>
    <div ><img src={UserTeacher} className='info'></img></div>
      <div>
      Registered Teachers
      <div className='value2'><h1>{list.teacher_user}</h1></div>
      </div>
    </div>
        <div className='data_box'>
    <div><img src={Teacher} className='info'></img></div>
        <div>
          Total Teachers
          <div className='value1'><h1>{list.teacher}</h1></div>
          </div>
        </div>
    </div>
  )
}

export default DefaultAdminPage;