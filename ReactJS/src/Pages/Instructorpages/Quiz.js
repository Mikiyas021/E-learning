import React, { useState } from 'react';
import axios from 'axios';
function Quiz() {

    const handle= (e)=>{
        e.preventDefault();
        const url = "http://localhost/quiz.php";
        let fData = FormData();
        fData.append('question', question);
       
        axios.post(url, fData).then(res=>alert(res.data)).catch(error=>alert(error));
    }
  return (
    <div>
        <h2>Exam page</h2>
           
    </div>
  )
}

export default Quiz;
/*
  <form onSubmit={handle}>
                <label>Question <input type='textarea' name='question' onChange={(e)=>setquestion(e.target.value)} ></input></label>
                <label>option A <input type='radio' name='A'  ></input> 
                <input type='textarea' name='choice_A' onChange={(e)=>setchoice_A(e.target.value)} ></input> 
                </label>

                <label>option B <input type='radio' name='B'></input> 
                <input type='textarea' name='choice_B' onChange={(e)=>setchoice_B(e.target.value)} ></input> 
                </label>

                <label>option C <input type='radio' name='C'></input> 
                <input type='textarea' name='choice_C' onChange={(e)=>setchoice_C(e.target.value)}></input> 
                </label>

                <label>option D <input type='radio' name='D'></input> 
                <input type='textarea' name='choice_D' onChange={(e)=>setchoice_D(e.target.value)}></input> 
                </label>

                <label>Answer: <input type='text' name='answer'></input></label>

                <button type="submit"> Add </button>
            </form>
*/