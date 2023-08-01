import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Pagescss/profile.css';
function Profile() {
  const navigate = useNavigate();
 
  const [password_new, setnewpassword] = useState();
  const [password_confirm, setPasswordconfirm] = useState();
  const handlechange = (e) =>{
    e.preventDefault();
    if(password_new !== password_confirm){
      alert("please confirm password!")
    }
    else{
      e.preventDefault();
      const id1 = sessionStorage.getItem('username');
     const url=`http://localhost/changepassword_student.php?id1=${id1}`;
     let fData = new FormData(e.target);

     fData.append('password_new', password_new);
     fData.append('Password_confirm', password_confirm);
     axios.post(url, fData).then((response) => alert(response.data)).catch(error =>alert(error));
     navigate('/contact/profile');
    }   
  } 
  return (
    <div>
               <form className='createaccount' id="createDH" onSubmit={handlechange}>
       
        <div className='nameinput' id='nameinputid'> <div>New Password:</div><div> <input type='password' name='password_new' onChange={(e)=>setnewpassword(e.target.value)} required></input></div></div>
        <div className='nameinput' id='nameinputid'> <div>Confirm Password:</div><div> <input type='password' name='password_confirm' onChange={(e)=>setPasswordconfirm(e.target.value)} required></input></div></div>

        <button type='submit'  className='button-43'>Save Changes</button>
       </form>
    </div>
  )
}
export default Profile