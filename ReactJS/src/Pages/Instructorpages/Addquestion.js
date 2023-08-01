import React, { useState } from 'react';
import axios from 'axios';
import { Link, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import "./pagescss/question.css";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Quizradio from './Quizradio';
function Addquestion() {
    const navigate = useNavigate();
    const [auth, setauth] = useState('');
      useEffect(()=>{
        var auth = sessionStorage.getItem('username');
          if(auth === null){
              navigate('/Login');
          }
          setauth(auth);
      },[]
      )
    const [question, setquestion] = useState();
    const [option1, setoption1] = useState(); 
    const [option2, setoption2] = useState(); 
    const [option3, setoption3] = useState(); 
    const [option4, setoption4] = useState(); 
    const [answer, setanswer] = useState(); 
    const [question_id, setquestion_id] = useState(); 
    
    const handleexam= (e)=>{
        e.preventDefault();
        const id1 = sessionStorage.getItem('Class_name');
        const id2 = sessionStorage.getItem('course_title');
        const url = `http://localhost/question.php?id1=${id1}&id2=${id2}`;
        let fData = new FormData();
        fData.append('question', question);
        fData.append('option1', option1);
        fData.append('option2', option2);
        fData.append('option3', option3);
        fData.append('option4', option4);
        fData.append('answer', answer);
        fData.append('question_id', question_id);
        
        axios.post(url, fData).then(res=>alert(res.data)).catch(error=>alert(error));
        navigate('/new/quiz/new/quiz');
    }

  return (
    <div>
      <div className='back'>
      <Link to="new/quiz" ><FontAwesomeIcon icon={faCircleArrowLeft} size='lg'/></Link>
      </div>
      {
            auth!==null ?
      <Routes>
          <Route exact path='/new/quiz' element={<Quizradio/>}></Route>
      </Routes>
          :
          navigate('/login')
           }
         <form onSubmit={handleexam} className='Addquestionform'>
<label>Question iD <input type='number' name='question_id' onChange={(e)=>setquestion_id(e.target.value)}  required></input></label>
<label>Question <input type='textarea' name='question' onChange={(e)=>setquestion(e.target.value)} required ></input></label>
  <div className='option'>
<label>option 1:<input type='text' name='option1' onChange={(e)=>setoption1(e.target.value)} required></input> </label>
<label>option 2:<input type='text' name='option2' onChange={(e)=>setoption2(e.target.value)} required></input> </label>
<label>option 3:<input type='text' name='option3' onChange={(e)=>setoption3(e.target.value)} required></input> </label>
<label>option 4:<input type='text' name='option4' onChange={(e)=>setoption4(e.target.value)} required></input> </label>
<label>Answer:  <input type='text' name='answer' onChange={(e)=>setanswer(e.target.value)} required></input> </label>
</div>
    <button type='submit' id='questionsubmit' className='button'>Submit</button>
</form>
    </div>
  )
}

export default Addquestion