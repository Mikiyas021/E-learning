import React from 'react'
import './AdHome.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function CreateAccount() {
  const navigate = useNavigate();
  const [faculityname, setfaculityname] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const handlecreate = (e) =>{
      e.preventDefault();
     const url="http://localhost/Createaccount.php";
     let fData = new FormData();
     fData.append('faculityname', faculityname);
     fData.append('Username', username);
     fData.append('Password', password);
     axios.post(url, fData).then((response) => alert(response.data)).catch(error =>alert(error));
     navigate('/ad');
      
  }
  return (
    <div>
        <h1>Create account for Faculities </h1>
            <form className='createaccount' id="createDH" onSubmit={handlecreate}>
        <div> Faculity:  <input type='text' name='faculityname' onChange={(e)=>setfaculityname(e.target.value)} required></input></div>
        <div> Username: <input type='text' name='Username' onChange={(e)=>setUsername(e.target.value)} required></input></div>
        <div> Password: <input type='password' name='Password' onChange={(e)=>setPassword(e.target.value)} required></input></div>
        <button type='submit' id='button-19' className='button-19'>Add DH</button>
       </form>
    </div>
  )
}

export default CreateAccount;