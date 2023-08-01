import axios from "axios";
import React, { useEffect, useState } from 'react';
import './quiz.css';
import {Link, Routes, Route} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Quizstudent() {
    const [radio, setradio] = useState();
   const [list, setlist] = useState([]);
   const [count, setcount] = useState(0);
   const [text, setText] = useState("Start");
    const func1 = ()=>{
    setradio("A");
     }
    const func2 = ()=>{
        setradio("B");
    }
    const func3 = ()=>{
        setradio("C");
    }
    const func4 = ()=>{
      setradio("D");
   }
   const nextq = () =>{
    setcount(count =>(count+1));
}
  const start = () =>{
    setcount(1);
    }
  const finish = () =>{
    setcount(0);
  }

   const handle = (e) =>{
    e.preventDefault();
        const id1 = sessionStorage.getItem('ID');
        const id2 = sessionStorage.getItem('Class_name');
        const id3 = sessionStorage.getItem('course_title');
    const url = `http://localhost/Quiz/Student_answer/student_answer`+count+`.php?id1=${id1}&id2=${id2}&id3=${id3}`;
    let fData = new FormData();
    fData.append('radio' ,radio);
    axios.post(url, fData).then((response) =>{
      toast(response.data, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme:"dark",
        });
    }).catch(error=>alert(error));
   }

    useEffect(()=>{
         console.log(count);
         const id1 = sessionStorage.getItem('Class_name');
        const id2 = sessionStorage.getItem('course_title');
        fetch(`http://localhost/Quiz/Question/fetch_question_student`+count+`.php?id1=${id1}&id2=${id2}`)
        .then(res=>
            res.json()
        )
        .then((result) =>{
            setlist(result);
        })
    }
    ,[count])
  return (
    
    <div className="exam">
        <div className='outputquestion'>
          <form onSubmit={handle}>
         {
          list.map(list=>(
            <div>
            <div>
                 
            {list.id}
           <label className="Question">{list.question_id}. {list.question} </label>
           </div>
         
            <div>
                 <label className="choice"> A:<input type='radio' name='radio' value="A" className='radioclass' onClick={func1}/>
                 {list.id}
                 {list.option1}
                 </label>
           </div>
            <div> 
                <label className="choice"> B: <input type='radio' name='radio' value="B" className='radioclass' onClick={func2}/>
                {list.id}
           {list.option2}
                </label>
         
           </div>
       
            <div>
                 <label className="choice"> C: <input type='radio' name='radio' value="C" className='radioclass' onClick={func3}/>
            {list.id}
           {list.option3}
           </label>
           </div>
    
            <div>
                 <label className="choice"> D: <input type='radio' name='radio' value="D" className='radioclass' onClick={func4}/>
            {list.id}
           {list.option4}
           </label>
           </div>

           </div>
          )
            
          )
        }
        {
          count>0?
            <button type="submit" onClick={nextq} className="btnclass" id="btnsubmit" >Submit Answer</button>
            :
            <button></button>
        }
        <ToastContainer
                 position="top-center"
                 autoClose={3000}
                 hideProgressBar={false}
                 newestOnTop={false}
                 closeOnClick
                 rtl={false}
                 pauseOnFocusLoss
                 draggable
                 pauseOnHover
                 theme="dark"
                  />
          </form>
          <button className="button" id="btnstart" onClick={start} style={{display: count>=1 ? 'none':'block' }}>{text}</button>
          <button className="button" id="btnfinish" onClick={finish} style={{display: count===0 ? 'none':'flex' }}>Start again</button>
       </div>
    </div>
  )
}
export default Quizstudent