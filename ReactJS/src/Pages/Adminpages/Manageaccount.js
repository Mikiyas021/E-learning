import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdHome.css';
function Manageaccount() {
    const [list, setlist] = useState([]);
    const navigate = useNavigate();
    const [auth, setauth] = useState('');
    useEffect(()=>{
        fetch("http://localhost/fetchfaculity.php")
        .then(res=>
            res.json()
            )
        .then((result)=>
        {
            
            setlist(result);
        }
        )
        console.log(list);
    } ,[])
    useEffect(()=>{
        var auth = sessionStorage.getItem('username');
            setauth(auth);
          if(auth === null){
              navigate('/Login');
          }
          
      },[]
      )
  return (
    <div className='manage'>
        <div className='linkcreate'>
            <div className='linktocreate'>
        <Link to= 'createaccount' className="button-17" id='managelink'>Create account</Link>
            </div>
          <div>
          {
            auth!==null ?
          <Routes>
          <Route exact path='/createaccount' element={<CreateAccount />} />
          </Routes>
           :
           navigate('/login')
            }
          </div>
        </div>
         <div className="table-wrapper" id='dhtable'> 
        <table class="fl-table">
            <thead>
                <tr>
               
                <th>Faculity name</th>
                <th>Username</th>
            
                
               </tr>
            </thead>
            <tbody>
                
                 {
                    list.map(list=>(
                    <tr key={list.id}>
                      
                        <td>{list.Faculity_name}</td>
                        <td>{list.username}</td>
                      
                        </tr>
                    )

                    )
                 }
               
               
            </tbody>
        </table>
    </div>

    </div>
  )
}

export default Manageaccount