
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Pagescss/signup.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Forgot() {
  const [username, setUsername] = useState();
  const [email, setemail] = useState();

  const handle = (e) =>{
    e.preventDefault();
    
      const url ="http://localhost/reset.php";
      let fData = new FormData();
      fData.append('username', username);
      fData.append('email', email);

      axios.post(url, fData).then(resonse =>{
        toast(resonse, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      )
        .catch(error => alert(error));
  
  }
  const cssstyle = {
    height:"200",
  };
  return (
    <div>
      <form className="formclass" id="forgot" onSubmit={handle}>
      Reset your password
         <input type='text' placeholder='username' name="username" required></input>
         <input type='text' placeholder='email' name="email" onChange={(e)=>setemail(e.target.value)}></input>
         <button type='submit' className='button'>Reset</button>
      </form>
    </div>
  )
}

export default Forgot;