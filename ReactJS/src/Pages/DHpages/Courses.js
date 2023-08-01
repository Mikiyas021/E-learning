import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Pagescss/addcourse.css';
import '../Pagescss/style.css';
function Courses() {
    const navigate = useNavigate();
    const [year, setyear] = useState();
    const [semister, setsemister] = useState();
    const [department, setdepartment] = useState();
    const [course_code, setcoursecode] = useState();
    const [title, settitle] = useState();
    const [list, setlist] = useState([]);
    const [list_department, setlistdepartment] = useState([]);
    const handle = (e) =>{
        e.preventDefault();
        const id1 = sessionStorage.getItem('Faculity_name');
       const url=`http://localhost/course.php?id1=${id1}`;
       let fData = new FormData();
       fData.append('course_code', course_code);
       fData.append('title', title);
       fData.append('year', year);
       fData.append('semister', semister);
       fData.append('department', department);
       axios.post(url, fData).then((response) => alert(response.data)).catch(error =>alert(error));
       navigate('/DH/DHcourses');
    }

    const handleinput1 = (e) =>{
        e.preventDefault();
        setcoursecode(e.target.value);

    }
    const handleinput2 = (e) =>{
        e.preventDefault();
        settitle(e.target.value);
    }
        useEffect(()=>{
            const id1 = sessionStorage.getItem('Faculity_name');
            fetch(`http://localhost/course_fetch.php?id1=${id1}`)
            .then(res=> res.json())
            .then(
                (result)=>{
                    setlist(result);
                }
            )
            
        },[])
        useEffect(()=>{
            const id1 = sessionStorage.getItem('Faculity_name');
            fetch(`http://localhost/department_fetch.php?id1=${id1}`)
            .then(res=> res.json())
            .then(
                (result)=>{
                    setlistdepartment(result);
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
                <th>year</th>
                <th>semister</th>
                <th>Department</th>
                <th>Course Code</th>
                <th>Title</th>
            </tr>
            </thead>
            <tbody>
             
                    {  list.map(list=>(
                           <tr key={list.id}>
                        <td>{list.Year_}</td>
                        <td>{list.Semister}</td>
                        <td>{list.Department}</td>
                        <td>{list.Course_code}</td>
                        <td>{list.title}</td>
                           </tr>
                   ) )}
             
            </tbody>
        </table>
        </div>
   </div>
  
        <form className='courseform' onSubmit={handle}>
        <h1>Add Course</h1>
        <div  className='select'>
        <select name="department" onChange={(e)=>setdepartment(e.target.value)} required>
                    <option value="" disabled selected hidden> <span> Choose department</span> <br/> 
                    </option>
                       {
                        list_department.map(list=>(
                           <option>
                          {list.department} 
                          </option>
                        ))}

                   </select>
                  
                   </div>
          <label>
           Enter year: <input type='text' name="year" onChange={(e)=>setyear(e.target.value)} required></input> 
           </label>
           <label>
           Enter semister: <input type='text' name="semister" onChange={(e)=>setsemister(e.target.value)} required></input> 
           </label>
           <label>
           Enter course code: <input type='text' name="course_code" onChange={handleinput1} required></input> 
           </label>
           <label>
           Enter course title: <input type='text' name="title" onChange={handleinput2} required></input>
           </label>
          
           <button type='submit' id='addcoursebtn' className='button' value="Add course">Add Course</button>
        </form>
    </div>
  )
}

export default Courses;
