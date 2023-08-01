import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Changepassword() {
    const navigate = useNavigate();
    const [faculityname, setfaculitynameedit] = useState();
    const [username, setUsernameedit] = useState();
    const [password, setPasswordedit] = useState();
    const handlechange = (e) =>{
        e.preventDefault();
        const id1 = sessionStorage.getItem('Faculity_name');
       const url=`http://localhost/changepassword.php?id1=${id1}`;
       let fData = new FormData();
       fData.append('faculityname', faculityname);
       fData.append('Username', username);
       fData.append('Password', password);
       axios.post(url, fData).then((response) => alert(response.data)).catch(error =>alert(error));
       navigate('/dh');
        
    }
  return (
    <div>
               <form className='createaccount' id="createDH" onSubmit={handlechange}>
       
        <div className='nameinput'> <div>Username:</div><div> <input type='text' name='Username' onChange={(e)=>setUsernameedit(e.target.value)} required></input></div></div>
        <div className='nameinput'> <div>New Password:</div><div> <input type='password' name='Password' onChange={(e)=>setPasswordedit(e.target.value)} required></input></div></div>
        <button type='submit'  className='button-43'>Save Changes</button>
       </form>
    </div>
  )
}

export default Changepassword