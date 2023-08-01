import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import '../Pagescss/style.css';
function ClassStudent() {
    const [list, setlist] = useState([]);
    const [list_department, setlistdepartment] = useState([]);
    const [ID, setid] = useState();
    const [first_name, setfirstname] = useState();
    const [last_name, setlastname] = useState();
    const [department, setdepartment] = useState();
    const [class_id, setClassid] = useState();
    const [year, setyear] = useState();
    const [semister, setsemister] = useState();
    
    const handle = (e) =>{
      e.preventDefault();
      const id1 = sessionStorage.getItem('Faculity_name');
        const url = `http://localhost/DHStudentAdd.php?id1=${id1}`;
        let fData = new FormData();
        fData.append('ID',ID);
        fData.append('First_name',first_name);
        fData.append('Last_name',last_name);
        fData.append('Department',department);
        fData.append('class_id',class_id);
        fData.append('year',year);
        fData.append('semister',semister);
    axios.post(url, fData).then(result=>{
        alert(result.data);
    })
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

       <form onSubmit={handle}>
        <div className='AddStudent'>
        <div className='nameinput1'> <div>Student ID</div><div><input  name='ID' onChange={(e)=>setid(e.target.value)}></input></div></div>
        <div className='nameinput1'> <div>First name</div><div><input name='First_name' onChange={(e)=>setfirstname(e.target.value)}></input></div></div>
        <div className='nameinput1'> <div>Last name</div><div><input name='Last_name' onChange={(e)=>setlastname(e.target.value)}></input></div></div>
        <div className='nameinput1'> <div>Department</div><div>
                    
        <div  className='select'>
        <select name="Department" onChange={(e)=>setdepartment(e.target.value)} required>
                    <option value="" disabled selected hidden> <span> Choose department</span> <br/> 
                    </option>
                       {
                        list_department.map(list=>(
                           <option>
                          {list.department} 
                          </option>
                        )

                        )
                       }

                   </select>
                  
                   </div>
                   </div></div>
                   <div className='nameinput1'> <div>Year</div><div><input name='year' onChange={(e)=>setyear(e.target.value)}></input></div></div>
                   <div className='nameinput1'> <div>Semister</div><div><input name='semister' onChange={(e)=>setsemister(e.target.value)}></input></div></div>
                   <div className='nameinput1'> <div>Class</div><div>
      
                    <div  className='select'>
        <select name="class_id" onChange={(e)=>setClassid(e.target.value)} required>
                    <option value="" disabled selected hidden> <span> Choose Student's class</span> <br/> 
                    </option>
                       {
                        list.map(list=>(
                           <option>
                          {list.class_name} 
                          </option>
                        )

                        )
                       }

                   </select>
                  
                   </div>
                   </div></div>
   
        <button type='submit' className='button'>Add Student</button>
        </div>
       </form>
    </div>
  )
}

export default ClassStudent