import React from 'react'
import './App.css';
function Coursetitle() {
    const title = sessionStorage.getItem('course_title');
    const Course_code = sessionStorage.getItem('Course_id');
    
  return (
    <div className='coursetitle-2'>
        <div className='coursetitle-div-2'> Course title: 
     {title}
     </div>
     <div className='coursetitle-div-2'> Course code: 
     {Course_code}
     </div>
    </div>
  )
}

export default Coursetitle;