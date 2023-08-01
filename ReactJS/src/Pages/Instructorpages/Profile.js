import React from 'react';
import '../Pagescss/profile.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Link,Routes,Route } from 'react-router-dom';
import Editprofile from './Editprofile';
import Changepasswordteacher from './Changepasswordteacher';
function Profile() {
  const navigate = useNavigate();
  const [auth, setauth] = useState('');
    useEffect(()=>{
      var auth = sessionStorage.getItem('username');
          setauth(auth);
        if(auth === null){
            navigate('/Login');
        }
        
    },[]
    )
  return (
    <div>
     <div className='linkcreate'>
            <div className='linktocreate'>
        <Link to='Editprofile' className="button-17" id='managelink'>Edit profile</Link>
        <Link to='changepasswordteacher' className="button-17" id='managelink'>Change password</Link>

            </div>
          <div>
          {
            auth!==null ?
          <Routes>
          <Route exact path='/Editprofile' element={<Editprofile />} />
          <Route exact path='/Changepasswordteacher' element={<Changepasswordteacher />} />
          </Routes>
          :
          navigate('/login')
           }
          </div>
        </div>
     
        
    </div>
  )
}

export default Profile