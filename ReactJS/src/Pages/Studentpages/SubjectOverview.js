import React from 'react';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './subject.css';
function SubjectOverview() {
  const [photo, setphoto] = useState([]);
  useEffect(() => {
    const id1 = sessionStorage.getItem('Class_name');
    const id2 = sessionStorage.getItem('course_title');
    fetch(`http://localhost/fetch_profile_for_student.php?id1=${id1}&id2=${id2}`)
      .then(response => response.json())
      .then(data => {    
        setphoto(data);
        console.log(data);
        //setvideosrc('http://127.0.0.1:8887/'+data.src);
        //console.log(videosource);
      });
  }, []);
  const [outline, setoutline] = useState([]);
      useEffect(()=>{
        const id1 = sessionStorage.getItem('Class_name');
        const id2 = sessionStorage.getItem('course_title')
         fetch(`http://localhost/fetch_course_outline.php?id1=${id1}&id2=${id2}`)
         .then(res=>res.json())
         .then((result)=>{
            setoutline(result);
            console.log(result);
         })
    }
      ,[])
  return (
    <div className='subject'>
       <div className='nothing'> <h1>Subject Overview</h1> </div>
        { photo.map(photo=>(<div className='InstructorName'> Instructor: {photo.name} {photo.last}</div>))}
       <div className='profile' >
      
       { photo.map(photo=>(
   <div className='profilepic'>
       <img src={'http://127.0.0.1:8887/'+photo.src} class="imgteacher"  alt="avatar" />
      </div>
       ))
    }
      
   
       </div>
       {
       outline.map(pdf=>(
       <Link to={'http://127.0.0.1:8887/'+pdf.src} className='Outline'>View Course outline</Link>
       ))}
      
    </div>
  )
}

export default SubjectOverview