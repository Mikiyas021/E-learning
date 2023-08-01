import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pagescss/question.css';
import Addquestion from './Addquestion';
import {Link, Routes, Route} from 'react-router-dom';
import AddandDisplay from './AddandDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Quizradio() {
    const [radio, setradio] = useState();
    const[question, setquestion] = useState();
   const [list, setlist] = useState([]);
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

   const handledelete = (e) =>{
    e.preventDefault();
    const id1 = sessionStorage.getItem('Class_name');
    const id2 = sessionStorage.getItem('course_title');
    const url = `http://localhost/deletequestion.php?id1=${id1}&id2=${id2}`;
    let fData = new FormData();
    fData.append('question', question);
    axios.post(url, fData).then((response) =>alert(response.data)).catch(error=>alert(error));
   }

    useEffect(()=>{
      const id1 = sessionStorage.getItem('Class_name');
    const id2 = sessionStorage.getItem('course_title');
        fetch(`http://localhost/fetch_question.php?id1=${id1}&id2=${id2}`)
        .then(res=>
            res.json()
        )
        .then((result) =>{
            setlist(result);
        })
    }
    ,[])
  return (
       
    <div>
      <button className='button' id='addquestion'>
      
      <Link to="new/quiz/add">Add question</Link></button>
      {
            auth!==null ?
        <Routes>
            <Route exact path="/new/quiz/add" element={<Addquestion/>} ></Route>
        </Routes>
        :
       navigate('/login')
        }
        <div className='outputquestion'>
         {
          list.map(list=>(
            <div>
            <div>
                 
            {list.id}
            
           <label>{list.question_id}. {list.question} </label>
           </div>
         
            <div>
                 <label>Choice A:<input type='radio' name='radio' value="A" className='radioclass' onClick={func1}/>
                 {list.id}
           {list.option1}
                 </label>
           </div>
       
            <div> 
                <label>Choice B: <input type='radio' name='radio' value="B" className='radioclass' onClick={func2}/>
                {list.id}
           {list.option2}
                </label>
         
           </div>
       
            <div>
                 <label>Choice C: <input type='radio' name='radio' value="C" className='radioclass' onClick={func3}/>
            {list.id}
           {list.option3}
           </label>
           </div>
    
            <div>
                        <label>Choice D: <input type='radio' name='radio' value="D" className='radioclass' onClick={func4}/>
            {list.id}
           {list.option4}
           </label>
           </div>
           <div>
                        <label> Ansewer: 
            {list.id}
           {list.answer}
           </label>
           </div>
           </div>
          )
            
          )
        }
            <form on onSubmit={handledelete} className='deleteQ'>
              Enter Question number to be deleted: <input type="text" name='question' onChange={(e)=>setquestion(e.target.value)} />
              <button type='submit' id='deletequestion' className='btnclass'>Delete Question</button>
            </form>

       </div>
    </div>
  )
}

export default Quizradio;
/*
import React, { useEffect, useState } from 'react';
import './pagescss/question.css';
import Addquestion from './Addquestion';
import {Link, Routes, Route} from 'react-router-dom';
function Quizradio() {
    const [radio, setradio] = useState();
   const [list, setlist] = useState([]);
    const func = ()=>{
        setradio("B");
    }
    const func2 = ()=>{
        setradio("C");
    }
    useEffect(()=>{
    
        fetch("http://localhost/fetch_question.php")
        .then(res=>
            res.json()
        )
        .then((result) =>{
            setlist(result);
        })
    }
    ,[])
  return (
       
    <div>
      <button className='button' >
      <Link to="new/quiz/add">Add question</Link></button>
        <Routes>
            <Route exact path="/new/quiz/add" element={<Addquestion/>} ></Route>
        </Routes>
        <div className='outputquestion'>
         {
          list.map(list=>(
            <div>
                 <label>Question:  </label>
            {list.id}
           <label>{list.question} </label>
           </div>
          )

          )
        }
        
         
        
        {
          list.map(list=>(
            <div>
                 <label>Choice A:<input type='radio' name='radio' value="B" className='radioclass' onClick={func}/>
                 {list.id}
           {list.option1}
                 </label>
           
           </div>
          )

          )
        }
        
       
        {
          list.map(list=>(
            <div> 
                <label>Choice B: <input type='radio' name='radio' value="C" className='radioclass' onClick={func2}/>
                {list.id}
           {list.option2}
                </label>
         
           </div>
          )

          )
        }
       
        {
          list.map(list=>(
            <div>
                 <label>Choice C: <input type='radio' name='radio' value="C" className='radioclass' onClick={func2}/>
            {list.id}
           {list.option3}
           </label>
           </div>
          )

          )
        }

            {
          list.map(list=>(
            <div>
                        <label>Choice D: <input type='radio' name='radio' value="C" className='radioclass' onClick={func2}/>
            {list.id}
           {list.option4}
           </label>
           </div>
          )
            
          )
        }
            

       </div>
    </div>
  )
}

export default Quizradio

*/