import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Pagescss/addcourse.css';
import '../Pagescss/style.css';
function Departments() {
    const navigate = useNavigate();
    const [department, setdepartment] = useState();
    const [list, setlist] = useState([]);
    const handle = (e) =>{
        e.preventDefault();
        const id1 = sessionStorage.getItem('Faculity_name');
       const url=`http://localhost/AddDepartment.php?id1=${id1}`;
       let fData = new FormData(e.target);
       fData.append('department', department);
       axios.post(url, fData).then((response) => alert(response.data)).catch(error =>alert(error));
       navigate('/DH/departments');
    }

        useEffect(()=>{
            const id1 = sessionStorage.getItem('Faculity_name');
            fetch(`http://localhost/department_fetch.php?id1=${id1}`)
            .then(res=> res.json())
            .then(
                (result)=>{
                    setlist(result);
                    console.log(list)
                }
            )
            
        },[])
       
  return (
    <div>
    <div>
        <div className='table-wrapper'>
      <table className='fl-table'>
            <thead>
                <tr>
                <th>Departments List</th>
            </tr>
            </thead>
            <tbody>
             
                    {  list.map(list=>(
                           <tr key={list.id}>
                        <td>{list.department}</td>
                           </tr>
                   ) )}
             
            </tbody>
        </table>
        </div>
   </div>
  
        <form className='courseform' onSubmit={handle}>
        <h1>Add Department</h1>

           <label>
           Enter department: <input type='text' name="department" onChange={(e)=>setdepartment(e.target.value)} required></input>
           </label>
          
           <button type='submit' id='addcoursebtn' className='button' value="Add course">Add</button>
        </form>
    </div>
  )
}

export default Departments