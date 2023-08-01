import './Pagescss/signup.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {faIdCard} from '@fortawesome/free-solid-svg-icons';
import {faSchool} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
function SignupTeacher(){
const [username, setUsername] = useState();
const [password, setPassword] = useState();
const [email, setemail] = useState();

const [password2, setpassword2] = useState();
const [firstname, setfirstname] = useState();
const [lastname, setlastname] = useState();
const [ID, setId] = useState();
const [msg, setmsg] = useState('');
const navigate = useNavigate();
  const HandleData = (e) =>{
    e.preventDefault();
  
    if(ID.length === 0)
    {
      alert("please enter your ID");
    }
    if(username.length === 0)
    {
      alert("please enter username");
    }
    if(email.length===0)
    {
      alert("please enter your email");
    }
   
    if(password.length===0)
    {
      alert("please enter your password");
    }
    if(password2.length===0)
    {
      alert("please Re-enter your password");
    }
   if(firstname.length===0)
    {
      alert("please your first name");
    }
   if(lastname.length ===0)
    {
      alert("please enter your last name");
    }
    
    else{
    const url ="http://localhost/teacher_signup.php";
    let fData = new FormData();
    fData.append('username', username);
    fData.append('password', password);
    fData.append('username', username);
    fData.append('password2', password2);
    fData.append('email', email);
  
    fData.append('ID', ID);
    fData.append('firstname', firstname);
    fData.append('lastname', lastname);
    axios.post(url, fData).then(resonse =>alert(resonse.data)
    )
      .catch(error => alert(error));
      navigate('/Login');
    }
    }
    
    
    return(
        <div class="form_wrappersign">
        <div class="form_container">
          <div class="title_container">
            <h2> Create Account</h2>
          </div>
          <div class="row-clearfix1">
            <div class="">
              <form className='formclass' onSubmit={HandleData}>
                <div class="input_field"><span><FontAwesomeIcon icon={faIdCard} size="sm"/></span>
                <input type="ID" name="ID" id='ID' placeholder="Your ID" required onChange={(e) => setId(e.target.value)} />
                    </div>
               
                <div class="input_field"><span><FontAwesomeIcon icon={faEnvelope} /></span>
                  <input type="email" name="email" id='email' placeholder="Email" required onChange={(e) => setemail(e.target.value)} />
                </div>
                <div class="input_field">  <span><FontAwesomeIcon icon={faUser} /></span>
                <input type="text" name="username" placeholder="username" required onChange={(e) => setUsername(e.target.value)} /></div>
                <div class="input_field"> <span><FontAwesomeIcon icon={faLock} /></span>
                  <input type="password" name="password" id='password' placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div class="input_field"> <span><FontAwesomeIcon icon={faLock} /></span>
                  <input type="password" name="password2" id='password2' placeholder="Confirm Password" required onChange={(e) => setpassword2(e.target.value)} />
                </div>
                
                 
                    <div class="input_field"> <span><FontAwesomeIcon icon={faUser} /></span>
                      <input type="text" name="firstname" id='firstname' placeholder="First Name" required onChange={(e) => setfirstname(e.target.value)} />
                   
                  </div>
                 
                    <div class="input_field"> <span><FontAwesomeIcon icon={faUser} /></span>
                      <input type="text" name="lastname" id='lastname' placeholder="Last Name" required onChange={(e) => setlastname(e.target.value)} />
                  
                  </div>
                   
                <input  class="button" type="submit" value="Signup" />
              </form>
            </div>
          </div>
        </div>
      </div>
      
    );
}
export default SignupTeacher;