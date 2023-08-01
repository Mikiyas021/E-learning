import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Pagescss/AssessmentForm.css';
function GradeStudent() {
    const [test, settest1] = useState();
    const [assignment, setassignment] = useState();
    const [Mid, setmid] = useState();
    const [final, setfinal] = useState();
    const [list, setlist] = useState([]);
    const [list_grade, setlist_grade] = useState([]);
    function transferData(e){
        e.preventDefault();
        const id1 = sessionStorage.getItem('course_title');
        const id2 = sessionStorage.getItem('Class_name');
        const url = `http://localhost/grade.php?id1=${id1}&id2=${id2}`;
        let fData = new FormData(e.target);
         fData.append('test', test);
         fData.append('Assignment', assignment);
         fData.append('Midexam', Mid);
         fData.append('Finalexam', final);

         axios.post(url, fData).then(res=>alert(res.data)).catch(error=>alert(error));
  }
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
useEffect(()=>{
    const id1 = sessionStorage.getItem('Class_name');
    const id2 = sessionStorage.getItem('course_title');
    fetch(`http://localhost/fetch_grade_teacher.php?id1=${id1}&id2=${id2}`)
    .then(res=> res.json())
    .then(
        (result)=>{
            setlist_grade(result);
        }
    )
},[])
  return (
    <div>
                <h1>Students Continous Assesment </h1>
        <div className="table-wrapper"> 
    <table class="fl-table">
        <thead>
       
            <tr>
            <th>Student ID</th>
                <th>First name</th>
                <th>Last name</th>
                 <th>Test</th>
                 <th>Assignment</th>
                 <th>Mid exam</th>
                 <th>Final exam</th>
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
                        
                        <td><input className='inputsize' type='number' name='test' onChange={(e)=>settest1(e.target.value)} ></input></td>
                        <td><input className='inputsize' type='number' name='Assignment' onChange={(e)=>setassignment(e.target.value)} ></input></td>
                        <td><input className='inputsize' type='number' name='Midexam' onChange={(e)=>setmid(e.target.value)} ></input></td>
                        <td><input className='inputsize' type='number' name='Finalexam' onChange={(e)=>setfinal(e.target.value)} ></input></td>
                        
                       <td>
                         <form onSubmit={transferData}>
                           
                            <input type='hidden' name='Student_id' value={list.ID} required></input>
                            <input type='hidden' name='first_name' value={list.First_name} required></input>
                            <input type='hidden' name='last_name' value={list.Last_name} required></input>
                            <button type='submit' className='button-10'>Submit</button> 
                             </form></td>
                </tr>
))} 
            </tbody>
     
       </table> 
      
       </div>
       <div className='graderesultfetch'>
       <div className="table-wrapper"> 
    <table class="fl-table">
        <thead>
            <tr>
            <th>Student ID</th>
                <th>First name</th>
                <th>Last name</th>
                 <th>Test</th>
                 <th>Assignment</th>
                 <th>Mid exam</th>
                 <th>Final exam</th>
                
            </tr>
            </thead>
           
            <tbody>
            { 
                list_grade.map(list=>(
                    <tr key={list.id}>
                         <td>{list.Student_id}</td>
                        <td>{list.First_name}</td>
                        <td>{list.Last_name}</td>
                        <td>{list.Test}</td>
                        <td>{list.Assignment}</td>
                        <td>{list.Mid_exam}</td>
                        <td>{list.Final_exam}</td>

                        </tr>
                ))}
                </tbody>
</table>
                </div>
    </div>
    </div>
  )
}

export default GradeStudent