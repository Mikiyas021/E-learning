import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function DefaultHome() {
  const [auth, setauth] = useState('');
  const navigate = useNavigate();
    useEffect(()=>{
      var auth = sessionStorage.getItem('username');
        if(auth === null){
            navigate('/Login');
        }
        setauth(auth);
    },[]
    )
  return (
    <div>       
       <div className='welcome'> Welcome: {auth}</div>
       <div className='studenthome'>
      <h1>Welcome to CCOBH E-Learning Support System</h1>
      <p>E-Learning Support(ELS) provides teaching & learning services to Capital college of bussines and health science through the 
        research, <br/>  adoption, and support of campus-wide, Internet-based systems that improve learning and 
        collaboration outcomes.<br/>Specifically, ELS:</p>
       <ul>
        <li>Supports the campus course management system and related online services.</li>
        <li>online training and tutorials to assist faculty and students using supported technologies.</li>
       </ul>
       </div>   
    </div>
  )
}

export default DefaultHome;