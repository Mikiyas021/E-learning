import React from 'react'
import { useEffect,useState } from 'react';
function Grade() {
    const [list_grade, setlist_grade] = useState([]);
    useEffect(()=>{
        const id1 = sessionStorage.getItem('Class_name');
        const id2 = sessionStorage.getItem('course_title');
        const id3 = sessionStorage.getItem('ID');
        fetch(`http://localhost/fetch_grade_student.php?id1=${id1}&id2=${id2}&id3=${id3}`)
        .then(res=> res.json())
        .then(
            (result)=>{
                setlist_grade(result);
            }
        )
    },[])
  return (
    <div>
        <h1>Your grade on this Course</h1>
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

export default Grade