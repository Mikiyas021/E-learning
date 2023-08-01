import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Pagescss/Material.css';
function MaterialStudent() {
  const [video, setvideo] = useState([]);
  const [pdf, setpdf] = useState([]);
  useEffect(() => {
    const id1 = sessionStorage.getItem('Class_name');
    const id2 = sessionStorage.getItem('course_title')
    fetch(`http://localhost/fetch_video.php?id1=${id1}&id2=${id2}`)
      .then(response => response.json())
      .then(data => {    
        setvideo(data);
        console.log(data);
        
      });
  }, []);
  useEffect(() => {
    const id1 = sessionStorage.getItem('Class_name');
    const id2 = sessionStorage.getItem('course_title')
    fetch(`http://localhost/fetch_pdf_material.php?id1=${id1}&id2=${id2}`)
      .then(response => response.json())
      .then(data => {    
        setpdf(data);
        console.log(data);
        
      });
  }, []);
  return (
    <div className='mat'>
      <h1>Learning Materials</h1>
      <div className='Material'>
        
      { 
       video.map(video=>(
         <div className='videotut'>  
        {video.description}
        <video controls>
        <source src={'http://127.0.0.1:8887/'+video.src} />
        </video>
         </div>
        ))
       }
     
     {
       pdf.map(pdf=>(
         <div className='eachassi'>  
        <div className='namedown'>
        <h3>{pdf.src}</h3>
       <div id='linkmar'> <Link
        to={'http://127.0.0.1:8887/'+pdf.src} class="button-33" role="button">
        Download 
      </Link></div>
      </div>
         </div>
        ))
       } 
       </div>
    </div>
  )
}

export default MaterialStudent;