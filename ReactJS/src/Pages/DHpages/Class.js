import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes,Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Pagescss/addcourse.css';
import './DH.css';
import '../Pagescss/signup.css';
import ClassStudent from './ClassStudent';
function Class() {
    const navigate = useNavigate();
    const [classes, setClass] = useState();
    const [class_id_delete, setClassiddelete] = useState();
  
    const [class1, setclasses] = useState();
    const [list, setlist] = useState([]);
    const [Student, setStudent] = useState([]);

    const handle = (e) =>{
        e.preventDefault();
        if(classes.length === 0){
            alert("Enter class name");
        }
        else{
       const id1 = sessionStorage.getItem('Faculity_name');
       const url=`http://localhost/CreateClass.php?id1=${id1}`;
       let fData = new FormData();
       fData.append('classes', classes);

       axios.post(url, fData).then((response) => alert(response.data)).catch(error =>alert(error));
       navigate('/DH/class');
        }
    }
    const handledelete = (e) =>{
        e.preventDefault();
       const url="http://localhost/deleteClass.php";
       let fData = new FormData();
       fData.append('class_id_delete', class_id_delete);
       axios.post(url, fData).then((response) => alert(response.data)).catch(error =>alert(error));
       navigate('/DH/class');
        
    }
    const handleremovestudent = (e) =>{
        e.preventDefault();
       const url="http://localhost/removestudent.php";
       let fData = new FormData(e.target);
     
       axios.post(url, fData).then((response) => alert(response.data)).catch(error =>alert(error));
       navigate('/DH/class');
        
    }
    const handleupdate = (e) =>{
        e.preventDefault();
       const url="http://localhost/Updatesemister.php";
       let fData = new FormData(e.target);
      
       axios.post(url, fData).then((response) => alert(response.data)).catch(error =>alert(error));
       navigate('/DH/class');
        
    }
    const handle2 = (e) =>{
        e.preventDefault();
        const url="http://localhost/fetch_students_list.php";
       let fData = new FormData();
       fData.append('class', class1);

       axios.post(url, fData).then((response) => 
       {
       setclasses(response)
       alert(response.data)
    }).catch(error =>alert(error));
       
       navigate('/DH/class');
    }

        useEffect(()=>{
            const id1 = sessionStorage.getItem('Faculity_name');
            fetch(`http://localhost/fetch_class_list_faculity.php?id1=${id1}`)
            .then(res=> res.json())
            .then(
                (result)=>{
                    setlist(result);
                    
                }
            )
            
        },[])
        useEffect(()=>{
            const id1 = sessionStorage.getItem('Faculity_name');
            fetch(`http://localhost/fetch_students_list.php?id1=${id1}`)
            .then(res=> res.json())
            .then(
                (result)=>{
                    setStudent(result)
                    
                }
            )
            
        },[])
        
  const [auth, setauth] = useState('');
    useEffect(()=>{
      var auth = sessionStorage.getItem('username');
          setauth(auth);
        if(auth === null){
            navigate('/Login');
        }
        
    },[]
    )
  return (
    <div className='StudentClass'>
        <div className='classList'>
    <div className="table-wrapper" id='class'>
        <table class="fl-table" id='classtable'>
            <thead>
                <tr>
                <th>Classes</th>
            </tr>
            </thead>
            <tbody>
              
                    {  list.map(list=>(
                           <tr key={list.id}>
                           <td>{list.class_name}</td>
                           </tr>
                   ) )}
             
            </tbody>
        </table>
</div>
   <div>
        <form className='courseform' onSubmit={handle} id='deleteclass'>
          <label className='labelclass'>
           Enter class(DepartmentYearSection):
           </label>
           <label className='labelclass'>
            <input type='text' name="classes" onChange={(e)=>setClass(e.target.value)} required></input> 
           </label>
           <button type='submit' name='submit' id='addcoursebtn' className='button' value="Add Class">Add Class</button>
        </form>
        <form className='courseform' onSubmit={handledelete} id='deleteclass'>
          <label className='labelclass'>
           Choose class(DepartmentYearSection):
           </label>
        <label>
      <div  className='select' id='deleteclass'>
<select name="class_id_delete" onChange={(e)=>setClassiddelete(e.target.value)} required>
      <option value="" disabled selected hidden> <span> Choose class</span> <br/> 
      </option>
         {
          list.map(list=>(
             <option>
            {list.class_name} 
            </option>
          ))
         }
     </select>
     </div>
</label>
<button type='submit' name='submit' id='addcoursebtn' className='button' value="Delete Class">Delete Class</button>
        </form>

        <h1>Update students semister to semister 2</h1>
 
         
        <div className="table-wrapper" id="table-wrapper_stud">
        <table class="fl-table" id='f1_table_student'>
            <thead>
                <tr>
                <th>Class name</th>
                <th>Action</th>
                
            </tr>
            </thead>
                    <tbody>
         {
          list.map(list=>(

                        <tr>
                       <td> {list.class_name}</td>   
          <td><form onSubmit={handleupdate}>
            <input type='hidden' name='class_name' value={list.class_name}></input>
            <button type = 'submit' className="button-15" >Update</button> </form></td> </tr>
       
         ))
         }     </tbody>
         </table>
    
        </div>
        </div>
        </div>
        <div className='addstudent'>
            <Link to='Addtoclass' className = "button-17">Add students to their class</Link>
            {
            auth!==null ?
        <Routes>
          <Route exact path="/Addtoclass" element={<ClassStudent />} />
        </Routes>
        :
        navigate('/login')
         }
</div>
<div className='studentslist'>
    <div className="table-wrapper" id="table-wrapper_stud">
        <table class="fl-table" id='f1_table_student'>
            <thead>
                <tr>
                <th>Student ID</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Department</th>
                <th>Class</th>
                <th>Action</th>

            </tr>
            </thead>
            <tbody>
              
                    {  Student.map(Student=>(
                           <tr key={Student.id}>
                           <td>{Student.Student_id}</td>
                           <td>{Student.First_name}</td>
                           <td>{Student.Last_name}</td>
                           <td>{Student.Department}</td>
                           <td>{Student.Class_name}</td>
                           <td>
                            <form onSubmit={handleremovestudent}>
                                <input type='hidden' name='stud_id' value={Student.Student_id}></input>
                                <button type='submit' className='button-15'>Remove</button>
                            </form>
                           </td>

                           </tr>
                   ) )}
             
            </tbody>
        </table>
</div>
</div>
    </div>
  )
}

export default Class;
