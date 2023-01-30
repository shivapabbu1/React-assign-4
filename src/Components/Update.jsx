import React from 'react'

import Student from './Student'
import DataContext from './DataContext'
import { createContext } from 'react'
 

const Update = () => {
    const context=createContext(DataContext);

   
  return (
    
 <div className='editbox'>
    <div className='update'>
        <div >
        <label htmlFor="name">Name:</label> <br/>
         <input type="text" name="name" required="required"   /> <br/>
         </div>
         <div>
         <label htmlFor="age">Age:</label><br/>
         <input type="text" name="age"  /> <br/>
         </div>
         <div>
         <label htmlFor="batch">Batch:</label><br/>
         <input type="text" name="batch"  /> <br/>
         </div>
         <div>
         <label htmlFor="course">Course:</label><br/>
         <input type="text" name="course"  /> <br/>
         </div>
         </div>
         <div className='btndiv'>
         <button  className='updatebutton'>Update</button>
         <button  className='cancelbtn'>Cancel</button>
         </div>
         </div>
   )
 }
  

export default Update