import React from 'react'
import { useEffect } from 'react';
const EffectCleanup = () => {
    useEffect(() => {
      const clicked = () => console.log('window clicked')
      window.addEventListener('click', clicked)
      
      // return a clean-up function
      return () => {
        window.removeEventListener('click', clicked)
         
      }
    }, [])
  return(
    <div>
       
    </div>
  )
  }


export default EffectCleanup