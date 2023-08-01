import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {
    const [status, setstatus] = useState();
    const navigate = useNavigate();
    useEffect(()=>{
    fetch("http://localhost/logout.php").then((res)=>
    {
        console.log(res.data);
        alert(res.data);
        if(res.data === 'true'){
            alert(res.data)
              navigate('/');
            }
            
        }
    )
},[])
  return (
    <div></div>
  )
}

export default Logout