import React, { useEffect, useState } from 'react';
import './pagescss/studentlist.css';
import '../Pagescss/style.css';
function StudentsListClass() {
    const [list, setlist] = useState([]);
useEffect(()=>{
    const id1 = sessionStorage.getItem('Class_name');
    fetch(`http://localhost/Student_list_forteacher.php?id1=${id1}`)
    .then(res=> res.json())
    .then(
        (result)=>{
            setlist(result);
        }
    )
     console.log(list);
},[])
  return (
    <div>
        <div className="table-wrapper">
    <table class="fl-table">
        <thead>
            <tr>
                <th>First name</th>
                <th>Last name</th>
            </tr>
            </thead>
            <tbody>
                { 
                list.map(list=>(
                    <tr key={list.id}>
                    <td>{list.First_name}</td>
                    <td>{list.Last_name}</td>
                   
                </tr>
))}
            </tbody>
       
       </table>
       </div>
    </div>
  )
}

export default StudentsListClass