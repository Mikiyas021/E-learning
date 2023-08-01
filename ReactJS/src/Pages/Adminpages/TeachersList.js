import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function TeachersList() {
    const [list, setlist] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("http://localhost/fetch_all_teachers.php")
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
       const url="http://localhost/Updateteacherblock.php";
       let fData = new FormData(e.target);
      
       axios.post(url, fData).then((response) => alert(response.data)).catch(error =>alert(error));
       navigate('/ad/TeachersList');
        
    }
    const handleunblock = (e) =>{
        e.preventDefault();
       const url="http://localhost/Updateteacherunblock.php";
       let fData = new FormData(e.target);
      
       axios.post(url, fData).then((response) => alert(response.data)).catch(error =>alert(error));
       navigate('/ad/TeachersList');
        
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
                <th>Action</th>

               </tr>
            </thead>
            <tbody>
                
                 {
                    list.map(list=>(
                    <tr key={list.id}>
                        <td>{list.Teacher_id}</td>
                        <td>{list.First_name}</td>
                        <td>{list.Last_name}</td>
                        <td>{list.Username}</td>
                        <td id='blockunblock'>
                             <form onSubmit={handleblock}>
                            <input type='hidden' name='ID' value={list.Teacher_id}></input>
                            <input type='hidden' name='first_name' value={list.First_name}></input>
                            <button type='submit' className='button-15-block' >Block</button>
                             </form>
                            <form onSubmit={handleunblock}>
                            <input type='hidden' name='ID' value={list.Teacher_id}></input>
                            <input type='hidden' name='first_name' value={list.First_name}></input>
                            <button type='submit' className='button-15-unblock'>Unblock</button>
                            </form>
                            </td>
                        </tr>
                    )

                    )
                 }
               
               
            </tbody>
        </table>
    </div>
  )
}

export default TeachersList;