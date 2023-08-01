import React, { useRef } from 'react';
import axios from 'axios';
import './assignment.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Link } from 'react-router-dom';
function Assignment() {
  const [pdf_file, setfile] = useState();
  const [response, setresponse] = useState('');
  function handleChange(e){
    setfile(e.target.files[0])
  }
  const Selectedfile = useRef();

   function handle(e){
    if(Selectedfile.current.files.length === 0)
    {
      e.preventDefault();
      setresponse("Please choose a file to upload");
      Selectedfile.current.focus();
    }
    else{
    e.preventDefault()
    const id1 = sessionStorage.getItem('ID');
    const id2 = sessionStorage.getItem('Class_name');
    const id3 = sessionStorage.getItem('course_title');

      const url = `http://localhost/Student_assignment.php?id1=${id1}&id2=${id2}&id3=${id3}`;
      let fData = new FormData(e.target);
      fData.append('file', pdf_file);

      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      axios.post(url,fData, config).then(response=>alert(response.data)).catch(error=>alert(error));
     
    }
  }
  const [assignment_list, setassignmentlist] = useState([]);
      useEffect(()=>{
        const id1 = sessionStorage.getItem('Class_name');
        const id2 = sessionStorage.getItem('course_title')
         fetch(`http://localhost/fetch_assignment.php?id1=${id1}&id2=${id2}`)
         .then(res=>res.json())
         .then((result)=>{
            setassignmentlist(result);
            console.log(assignment_list);
         })
    }
      ,[])
      
    
        const [download, setdownload] = useState('off');
   
  return (
   
   
    <div className='assignment'>
   <div className='givenassi'>
     {
       assignment_list.map(pdf=>(
         <div className='eachassi'>  
          <p>Submission date: {pdf.submission}</p>
        <div className='namedown'>
        <h3>{pdf.src}</h3>
       <div id='linkmar'> <Link
        to={'http://127.0.0.1:8887/'+pdf.src} class="button-33" role="button">
        Download 
      </Link></div>
      </div>
        <div className='space'>
        <p>Description: {pdf.description} </p> </div>
        
         </div>
        ))
       } 
      
    </div>
        <h1>
        Please try to submit your assignment with in the given time!
        </h1>
        <p className='text-[#e44040]'>{response}</p>
       <div className='assignmentsubmit'>
          <form onSubmit={handle}>
            
            <p>Upload your assignment:</p> <input type="file" ref={Selectedfile} name="file" accept=".pdf" onChange={handleChange}></input>
            <div className='btnassi'>
            <button className='button' type="submit">submit</button></div>
            </form>
   </div>
        </div>
  )
}

export default Assignment