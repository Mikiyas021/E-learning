import './Pagescss/signup.css';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {faSchool} from '@fortawesome/free-solid-svg-icons';
import {faIdCard} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Select from 'react-select'
import './stylediamond.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Signup(){
const [username, setUsername] = useState();
const [password, setPassword] = useState();
const [email, setemail] = useState();
const [department, setdepartment] = useState("");
const [class_id, setclassid] = useState("");
const [password2, setpassword2] = useState();
const [firstname, setfirstname] = useState();
const [lastname, setlastname] = useState();
const [ID, setId] = useState();
const [msg, setmsg] = useState('');
const [list, setlist] = useState([]);
const [list_department, setlistdepartment] = useState([]);
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
 
    if(department.length ===0 || class_id.length === 0){
      toast.error('Please fulfill all inputs!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: false,
        theme: "light",
        });
    }
    else{
    const url ="http://localhost/index.php";
    let fData = new FormData();
    fData.append('username', username);
    fData.append('password', password);
    fData.append('username', username);
    fData.append('password2', password2);
    fData.append('email', email);
    fData.append('department', department);
    fData.append('class_id', class_id);
    fData.append('ID', ID);
    fData.append('firstname', firstname);
    fData.append('lastname', lastname);
    axios.post(url, fData).then(resonse =>{
      toast(resonse.data, {
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
      navigate('/Login');
    }
    }
    
    useEffect(()=>{
      fetch("http://localhost/fetch_classes_list.php")
      .then(res=> res.json())
      .then(
          (result)=>{
              setlist(result);
              console.log(list)
          }
      )
      
  },[])
  useEffect(()=>{
    
    fetch("http://localhost/department_fetch_student.php")
    .then(res=> res.json())
    .then(
        (result)=>{
            setlistdepartment(result);
            console.log(list)
        }
    )
    
},[])
 
    return(
        <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2> Create Account</h2>
          </div>
          <div class=".row-clearfix1">
            <div class="">
              <form className='formclass' onSubmit={HandleData}>
                <div class="input_field"><span><FontAwesomeIcon icon={faIdCard} size="sm"/></span>
                <input type="ID" name="ID" id='ID' placeholder="Your ID" required onChange={(e) => setId(e.target.value)} />
                    </div>
          
                <div class="input_field" id='select'><span><FontAwesomeIcon icon={faGraduationCap} size="xs" /></span>
                <div  className='select'>
        <select name="department" onChange={(e)=>setdepartment(e.target.value)} required>
                    <option value="" disabled selected hidden> <span> Choose department</span> <br/> 
                    </option>
                       {
                        list_department.map(list=>(
                           <option>
                          {list.department} 
                          </option>
                        )

                        )
                       }

                   </select>
                  
                   </div>
                    </div> 
                    <div class="input_field" id='select'><span><FontAwesomeIcon icon={faSchool} size="xs"/></span>
                    <div className='select'>
                    <select name="class_id" onChange={(e)=>setclassid(e.target.value)} required>
                    <option value="" disabled selected hidden> <span> Choose Your class</span> <br/> 
                    </option>
                       {
                        list.map(list=>(
                           <option>
                          {list.class_name} 
                          </option>
                        )

                        )
                       }
                     
                     
                   </select>
                     </div>
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
                 
                      
                <input  class="button" type="submit" value="Signup" onClick={HandleData} />
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
              </form>
            </div>
          </div>
        </div>
      </div>
      
    );
}
export default Signup;