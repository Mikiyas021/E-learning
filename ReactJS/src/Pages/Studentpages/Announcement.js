import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './announce.css';
function Announcement() {
const [announce, setannounce] = useState([]);
      useEffect(()=>{
        const id1 = sessionStorage.getItem('Class_name');
        const id2 = sessionStorage.getItem('course_title')
         fetch(`http://localhost/announcement.php?id1=${id1}&id2=${id2}`)
         .then(res=>res.json())
         .then((result)=>{
            setannounce(result);
         })
    }
      ,[])
  return (
 
        <div className='announcement'>
            <h1>Announcement</h1>
                {
                    announce.map(announce=>(
                        <div className='announce'>
                        <p>{announce.announcement}</p>
                        <p className='announce_date'>{announce.date}</p>
                        </div>
                    )
                    )
                }
        </div>
  )
}

export default Announcement