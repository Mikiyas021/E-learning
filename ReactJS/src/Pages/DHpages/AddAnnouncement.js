import React from 'react';
import './DH.css';
function AddAnnouncement() {
  return (
    <div>
        <h1 className='announcetitle'>Announcement Page</h1>
         <div className='cont'>
       <div className='nothing1'></div>
       <div className='InstructorName'>
        <form>
        your message: <input className='textarea1' type="textarea" name='announcement'></input> 
        <button type='submit' className='button' id='announcebtn'>Send</button>
       </form>
        </div>
    </div>
    </div>
  )
}

export default AddAnnouncement