import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Changepassword from './Changepassword';
function Profile() {
  return (
    <div>
          <div className='linkcreate'>
            <div className='linktocreate'>
        <Link to='changepassword' className="button-17" id='managelink'>Change Password</Link>
            </div>
          <div>
          <Routes>
          <Route exact path='/changepassword' element={<Changepassword />} />
          </Routes>
          </div>
        </div>
    </div>
  )
}

export default Profile;