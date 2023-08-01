import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Newone from './Newone';
function Allinone() {
  return (
    <div>
        
        <Routes>
            <Route exact path='/new' element={<Newone/>}></Route>
            <Route exact path='/navbar' element={<Navbar/>}></Route>
        </Routes>
    </div>
  )
}

export default Allinone;