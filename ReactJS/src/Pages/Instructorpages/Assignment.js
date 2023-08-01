import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, redirect } from 'react-router-dom';
import '../Pagescss/giveassi.css';
function Assignment() {
  const [filee, setfile] = useState([0]);
  const [file, setafile] =useState([]);
  const [describe, setdesription] = useState();
  const [class_name, setclass] = useState();
  const [list_class, setlistclass] = useState([]);
  const [submitted, setsubmitted] = useState([]);
 function transferData(e){
      e.preventDefault();
      const id = sessionStorage.getItem('course_title');
      const url = `http://localhost/upload.php?id=${id}`;
      let fData = new FormData(e.target);
       fData.append('file', filee);
       fData.append('description', describe);
       axios.post(url, fData).then(res=>alert(res.data)).catch(error=>alert(error));
  
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
useEffect(()=>{
  const id1 = sessionStorage.getItem('Class_name');
  const id2 = sessionStorage.getItem('course_title');

    fetch(`http://localhost/fetch_Student_assignment.php?id1=${id1}&id2=${id2}`)
  .then(res=> res.json())
  .then(
      (result)=>{
          setsubmitted(result);
          console.log(result);
      }
  )
  
},[])
const [redirected, setRedirected] = useState(false);

  const handleClick = () => {
    if (!redirected) {
      window.location.reload();
      setRedirected(true);
    }
  };

  return (
    <div>
      <h1>Assignment to students</h1>
      <div className='divflex'>
      <div  className='classlink'>
      <h3 className='chooseclass'>Choose class</h3>
   {
        list_class.map((classes)=>(
            <div id='btnclassname5'>
              <Link to="/new/assignment" onClick={()=>{
                window.sessionStorage.setItem('Class_name',classes.Class_name);
                window.sessionStorage.setItem('course_title',classes.Course_name);
              
                }} className='button-17' >{classes.Class_name} </Link>
            </div>
        )
        )  
       }
      </div>
      <form onSubmit={transferData}>
        <div className='giveassi' >
          <label>
        Description: <input type='textarea' name='description' height={200} onChange={(e)=>setdesription(e.target.value)} required /> </label>
        <label>Choose file: <input type='file' name='file' accept='.pdf'  onChange={(e)=>setfile(e.target.files[0])}></input></label>
        <label>To class: <input type='text' name='class' id='class' value={sessionStorage.getItem('Class_name')} onChange={(e)=>setclass(e.target.sessionStorage.getItem('Class_name'))} required/></label>
        <label>Submission date: <input type='date' name='date' id='date'></input> </label>
        <button type='submit' className='button'>Submit
        </button>
        </div>
      </form>
      </div>
      <h1>Submitted Assignments</h1>
      <Link to="/new/assignment" onClick={handleClick} className='button-34'> view Assignment</Link>
      <div className='givenassi' id='assignment_list'>
      {
       submitted.map(pdf=>(
         <div className='eachassi'>  
          <p>Submitted on : {pdf.submitted_date}</p>
        <div className='namedown'>
        <h3>{pdf.src}</h3>
       <div id='linkmar'> <Link
        
        to={'http://127.0.0.1:8887/'+pdf.src} class="button-33" role="button">
        Download 
      </Link></div>
      </div>
        <div className='space'>
        <p>Student ID: {pdf.Student_id} </p> </div>
        
         </div>
        ))
       } 
       </div>
    </div>
  )
}

export default Assignment