import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import '../DHpages/DH.css';
import { Link } from 'react-router-dom';
function Announcement() {
    const [announcement, setannouncement] = useState();
    const [class_name, setclass] = useState();
    const [list_class, setlistclass] = useState([]);
    const handle = (e) =>{
        e.preventDefault();
        const id = sessionStorage.getItem('course_title');
        const url=`http://localhost/Send-announcement.php?id=${id}`;
        let fData = new FormData(e.target);
        fData.append('announcement', announcement);
      
        axios.post(url, fData).then((response) => alert(response.data)).catch(error=>(error));
    }
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
    <div className='announcemntclass'>
      <div className='announcepage'>
     <div  className='classlink'>
      <h3 className='chooseclass'>Choose class to send announcement </h3>
   {
        list_class.map((classes)=>(
            <div id='btnclassname5'>
              <Link to="" onClick={()=>{
                window.sessionStorage.setItem('Class_name',classes.Class_name);
                window.sessionStorage.setItem('course_title',classes.Course_name);
                }} className='button-17' >{classes.Class_name} </Link>
            </div>
        )
        )  
       }
      </div>
        <div className='cont'>
       <div className='nothing1'></div>
       <div className='InstructorName'>
        <form onSubmit={handle}>
          <div className='announceform'>
        Your message: <input type="textarea" name='announcement' className='textarea1' onChange={(e)=>setannouncement(e.target.value)} required></input>
                      To: <input type='text' name='class' id='class' value={sessionStorage.getItem('Class_name')} onChange={(e)=>setclass(e.target.sessionStorage.getItem('Class_name'))} required/>
        <button type='submit' className='button' id='announcebtn'>Send</button>
        </div>
        </form>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Announcement