import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './choose.css'
function Choose() {
  return (
    <div className='choosesignup'>
        <div className='shead'>
        <h3>New to CCOBH E-learning system</h3>
        </div>
        
          <div className='choosesignuplink'>
          <h3><FontAwesomeIcon icon={faPenToSquare} /> Sign up</h3>
            <Link to='/signup' id='addcoursebtn' className='button'>I'm a Student</Link>
            <Link to='/signupteacher' id='addcoursebtn' className='button'>I'm a Teacher</Link>
          </div>
    </div>
  )
}

export default Choose;