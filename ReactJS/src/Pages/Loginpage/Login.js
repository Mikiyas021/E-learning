import axios from 'axios';
import { useEffect, useState,useLayoutEffect } from 'react';
import { createContext } from 'react';
import {useNavigate} from "react-router";
import '../Pagescss/Login.css';
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router';
import Signup from '../Signup';
import StudentHome from '../Studentpages/StudentHome';
import './loginbody.css';
import '../Pagescss/Login.css';
import Loginimg from './6343823.png';
import {faRectangleXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Login(){
  const history = useNavigate(); 
  const [user,setUser]=useState({username:'',passwordd:''})
  const handleChange=(e)=>{
      setUser({...user, [e.target.name]: e.target.value}); 
  }

 
const HandleData = (e) =>{
const url ="http://localhost/loginphp.php";
const  fData = {
  username: user.username,
  passwordd: user.passwordd
}
e.preventDefault()
axios.post(url, fData).then((result) => 
  { 

    if (result.data.status === '200' && result.data.role ==='student' && result.data.activeinactive !== 'inactive') { 
      window.sessionStorage.setItem('username', result.data.username);
      window.sessionStorage.setItem('session_id', result.data.session_id);
      window.sessionStorage.setItem('ID', result.data.ID);
      window.sessionStorage.setItem('Class_name', result.data.Class_name);

  
    
        toast.success('Logged in successfully!', {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

    setTimeout(() => {
      history('/contact');
    }, 2000);
            
  }
  else if(result.data.status === '200' && result.data.role ==='teacher' && result.data.activeinactive !== 'inactive'){
    window.sessionStorage.setItem('username', result.data.username);
    window.sessionStorage.setItem('session_id', result.data.session_id);
    window.sessionStorage.setItem('Teacher_id', result.data.ID);
    toast.success('Logged in successfully!', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    setTimeout(() => {
      history('/new');
    }, 2000);
            
  }
  else if(result.data.status === '200' && result.data.role ==='admin'){
    window.sessionStorage.setItem('username', result.data.username);
    window.sessionStorage.setItem('session_id', result.data.session_id);
    toast.success('Logged in successfully!', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    setTimeout(() => {
      history('/ad');
    }, 2000);
            
  }
  else if(result.data.status === '200' && result.data.role ==='DH'){
    window.sessionStorage.setItem('username', result.data.username);
    window.sessionStorage.setItem('session_id', result.data.session_id);
    window.sessionStorage.setItem('Faculity_name', result.data.Faculity_name);
    toast.success('Logged in successfully!', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    setTimeout(() => {
      history('/DH');
    }, 2000);
            
  }
  else{
    toast.error('Incorrect Username or Password!', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  }
)
.catch(error => alert(error));

}



    return(
     
      <div className='loginclass'>
        <div className='imgclass'>
            <img src={Loginimg} width={400} height={400}></img>
        </div>
        <div className='formclass1' onSubmit={HandleData}>
        <form className='formclass'>
          <div className='loginheading'>
            <h2 className='loginhead'>Login </h2>
            </div>
            <div class="input_field">   <span><i aria-hidden="true" class="fa-solid fa-user"></i></span>
                <input type="text" name="username" id="username" placeholder="username" required onChange={handleChange} value={user.username} /></div>
                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                  <input type="password" name="passwordd" id="passwordd" placeholder="Password" required onChange={handleChange} value={user.passwordd} /> </div>
                 <input class="button" id='loginbtn' type="submit"  value="Login" onClick={HandleData} />
                  <ToastContainer
                 position="top-center"
                 autoClose={3000}
                 hideProgressBar={false}
                 newestOnTop={false}
                 closeOnClick
                 rtl={false}
                 pauseOnFocusLoss
                 draggable
                 pauseOnHover
                 theme="dark"
                  />
              <div className='Linkinlogin'>
               <Link to="/choose">Create account</Link>
               <Link className='Forgot' to="http://localhost/php-reset-password/forgot-password.php" target="_blank">Forgot account?</Link>
      
               </div>
          </form>
          </div>
          </div>
    );

}
export default Login;
/*<>
        <BrowserRouter></BrowserRouter>
        <NavLink to="/Signup">Signup</NavLink>
        </div>
        <Routes>
                    <Route exact path="/Signup" element={<Signup />} />
        </Routes>
        </BrowserRouter>
    </>
    */