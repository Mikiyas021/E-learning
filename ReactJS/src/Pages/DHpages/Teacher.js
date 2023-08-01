import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Pagescss/addcourse.css';
import '../Pagescss/style.css';
import './DH.css';
function Teacher() {
    const navigate = useNavigate();
    const [Teacher_id, setId] = useState();
    const [First_name, setfirstname] = useState();
    const [Last_name, setlastname] = useState();
    const [Department, setdepartment] = useState();
    const [teacher_id2, seteacherid] = useState();
    const [teacher_name, setteachername] = useState();
    const [teacher_last, setteacherlastname] = useState();
    const [class_name, setclass] = useState();
    const [course, setcourse] = useState();


    const [list, setlist] = useState([]);
    const [list_class, setlistclass] = useState([]);
    const [list_course, setlistcourse] = useState([]);
    const [list_assigned, setlistassign] = useState([]);

    
    const handle = (e) =>{
        e.preventDefault();
        const id1 = sessionStorage.getItem('Faculity_name');
       const url=`http://localhost/AddTeacher.php?id1=${id1}`;
       let fData = new FormData(e.target);
       fData.append('teacher_id', Teacher_id);
       fData.append('first_name', First_name);
       fData.append('last_name', Last_name);


       axios.post(url, fData).then((response) => alert(response.data)).catch(error =>alert(error));
       navigate('/DH/Teacher');
    }
    const handle2 = (e) =>{
        e.preventDefault();
        const id1 = sessionStorage.getItem('Faculity_name');
       const url=`http://localhost/AssignTeacher.php?id1=${id1}`;
       let fData = new FormData();
       fData.append('teacher_id2', teacher_id2);
       fData.append('first_name2', teacher_name);
       fData.append('last_name2', teacher_last);
       fData.append('class', class_name);
       fData.append('course', course);

       axios.post(url, fData).then((response) => alert(response.data)).catch(error =>alert(error));
       navigate('/DH/Teacher');
    }
    const [index, setindex1] = useState();
    const [Teacher_id_, setteacher1] = useState();
    const [course_title_, setcourse1] = useState();
       
   
    const handleunassign = (e) =>{
       e.preventDefault();
       const url="http://localhost/unassignTeacher.php";
       let fData = new FormData(e.target);
   
        axios.post(url, fData).then((response) => alert(response.data)).catch(error =>alert(error));
       navigate('/DH/Teacher');
    }
  
        useEffect(()=>{
            const id1 = sessionStorage.getItem('Faculity_name');
            fetch(`http://localhost/fetch_teacher_list.php?id1=${id1}`)
            .then(res=> res.json())
            .then(
                (result)=>{
                    setlist(result);
                }
            )
            
        },[])

        useEffect(()=>{
         
            fetch("http://localhost/fetch_classes_list.php")
            .then(res=> res.json())
            .then(
                (result)=>{
                    setlistclass(result);
                    
                }
            )
            
        },[])
        useEffect(()=>{
            const id1 = sessionStorage.getItem('Faculity_name');
            fetch(`http://localhost/course_fetch.php?id1=${id1}`)
            .then(res=> res.json())
            .then(
                (result)=>{
                    setlistcourse(result);
                }
            )
            
        },[])
        useEffect(()=>{
            const id1 = sessionStorage.getItem('Faculity_name');
            fetch(`http://localhost/Assigned_fetch.php?id1=${id1}`)
            .then(res=> res.json())
            .then(
                (result)=>{
                    setlistassign(result);
                    console.log(list_assigned);
                }
            )
            
        },[])
       
  return (
    <div className='Teach'>
    <div className='teacherlist'> <h1>Teacher List</h1>
    <div className="table-wrapper" id='teachlist'>
    <table class="fl-table">
            <thead>
                <tr>
                <th>Teacher Id</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Faculity</th>
                
            </tr>
            </thead>
            <tbody>
             
                    {  list.map(list=>(
                           <tr key={list.id}>
                        <td>{list.Teacher_id}</td>
                        <td>{list.First_name}</td>
                        <td>{list.Last_name}</td>
                        <td>{list.Faculity_name}</td>
                        
                           </tr>
                   ) )}
             
            </tbody>
        </table>
        </div>
        <form className='courseform' onSubmit={handle}>
          <label>
           Enter Teacher ID: <input type='text' name="teacher_id" onChange={(e)=>setId(e.target.value)} required></input> 
           </label>
           <label>
           Enter First name: <input type='text' name="first_name" onChange={(e)=>setfirstname(e.target.value)} required></input> 
           </label>
           <label>
           Enter Last name: <input type='text' name="last_name" onChange={(e)=>setlastname(e.target.value)} required></input> 
           </label>
         
          
           <button type='submit' id='addcoursebtn' className='button' value="Add Teacher">Add Teacher</button>
        </form>
    </div>
    <div className='Allocate'>
         <h1>Allocate Teachers to their class</h1>
         <div className="table-wrapper">
           
    <table class="fl-table">
            <thead>
                <tr>
                    <th>id</th>
                <th>Teacher Id</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Class</th>
                <th>Course title</th>
                <th>Action</th>
                
            </tr>
            </thead>
            <tbody>
             
                    {  list_assigned.map((list, index)=>(
                       
                           <tr key={index}> 
                          
                    
                        
                       <td>{index + 1}</td> 
                        <td>{list.Teacher_id}</td>
                        <td>{list.Teacher_name}</td>
                        <td>{list.Teacher_last_name}</td>
                        <td>{list.Class_name}</td>
                        <td>{list.Course_name}</td>
                    
                       <td>
                        <form onSubmit={handleunassign}>
                            <input type='hidden' name='teacher_id1' value={list.Teacher_id}></input>
                            <input type='hidden' name='class_name1' value={list.Class_name} required></input>
                            <input type='hidden' name='course_name1' value={list.Course_name} required></input>
                            <button type='submit'  value={index} className='button-62' >Un assign</button>
                        </form>
                       </td>
                           </tr>
                     
                           ) )
                   }
             
            </tbody>
        </table>
      
        </div>
         <div>
            <form className='assign'  onSubmit={handle2}>
                <div className = "form-g">
            <div>ID: </div>
            <div className = "inpu">
            <select name="teacher_id2" onChange={(e)=>seteacherid(e.target.value)} required>
                    <option value="" disabled selected hidden> <span> Choose ID</span> <br/> 
                    </option>
                       {list.map(list=>(
                           <option>
                          {list.Teacher_id} 
                          </option>
                        ))}
                   </select>
                        </div>
                   </div>
                    <div className = "form-g">
                   <div>First Name: </div>
                    <div className = "inpu">

                    <select name="first_name2" onChange={(e)=>setteachername(e.target.value)} required>
                    <option value="" disabled selected hidden> <span> First name</span> <br/> 
                    </option>
                       {list.map(list=>(
                           <option>
                          {list.First_name} 
                          </option>
                        ))}
                   </select>

                   </div>
                   </div>
                     <div className = "form-g">
                   <div>Last Name: </div> 
                   <div className = "inpu">
                   <select name="last_name2" onChange={(e)=>setteacherlastname(e.target.value)} required>
                    <option value="" disabled selected hidden> <span> Last name</span> <br/> 
                    </option>
                       {list.map(list=>(
                           <option>
                          {list.Last_name} 
                          </option>
                        ))}
                   </select>
                   </div>
                   </div>
                 <div className = "form-g">
                   <div>Class: </div>
                   <div className = "inpu">
                   <select name="class" onChange={(e)=>setclass(e.target.value)} required>
                    <option value="" disabled selected hidden> <span> Choose class</span> <br/> 
                    </option>
                       {list_class.map(classname=>(
                           <option>
                          {classname.class_name} 
                          </option>
                        ))}
                   </select>
                   </div>
                   </div>
                   <div className = "form-g">
                   <div>Course: </div>
                   <div className = "inpu">
                   <select name="course" onChange={(e)=>setcourse(e.target.value)} required>
                    <option value="" disabled selected hidden> <span> Choose Course</span> <br/> 
                    </option>
                       {list_course.map(coursename=>(
                           <option>
                          {coursename.title} 
                          </option>
                        ))}
                   </select>
                   </div>
                   </div>
           <button type='submit' id='addcoursebtn' className='button' value="Add Teacher">Assign</button>

            </form>
         </div>
    </div>
    </div>
  )
}

export default Teacher;