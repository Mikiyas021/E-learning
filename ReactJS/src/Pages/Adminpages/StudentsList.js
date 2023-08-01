import React, { useEffect, useState } from 'react'
import '../Pagescss/style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function StudentsList() {
    const navigate = useNavigate();
    const [list, setlist] = useState([]);
    useEffect(()=>{
        fetch("http://localhost/fetch_all_student.php")
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
     const handleblock = (e) =>{
        e.preventDefault();
       const url="http://localhost/Updateblock.php";
       let fData = new FormData(e.target);
      
       axios.post(url, fData).then((response) => alert(response.data)).catch(error =>alert(error));
       navigate('/ad/StudentsList');
        
    }
    const handleunblock = (e) =>{
        e.preventDefault();
       const url="http://localhost/Updateunblock.php";
       let fData = new FormData(e.target);
      
       axios.post(url, fData).then((response) => alert(response.data)).catch(error =>alert(error));
       navigate('/ad/StudentsList');
        
    }
  return (
    <div className="table-wrapper"> 
        <table class="fl-table">
            <thead>
                <tr>
                <th>ID</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Username</th>
                <th>Department</th>
                <th>Action</th>

               </tr>
            </thead>
            <tbody>
                
                 {
                    list.map(list=>(
                    <tr key={list.id}>
                        <td>{list.ID}</td>
                        <td>{list.First_name}</td>
                        <td>{list.Last_name}</td>
                        <td>{list.Username}</td>
                        <td>{list.Department}</td> 
                        <td id='blockunblock'>
                             <form onSubmit={handleblock}>
                            <input type='hidden' name='ID' value={list.ID}></input>
                            <input type='hidden' name='first_name' value={list.First_name}></input>
                            <button type='submit' className='button-15-block' id="button-15-block">Block</button>
                             </form>
                            <form onSubmit={handleunblock}>
                            <input type='hidden' name='ID' value={list.ID}></input>
                            <input type='hidden' name='first_name' value={list.First_name}></input>
                            <button type='submit' className='button-15-unblock'>Unblock</button>
                            </form>
                            </td>
                        </tr>
                    ))
                 }
            </tbody>
        </table>
    </div>
  )
}

export default StudentsList