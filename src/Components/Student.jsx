import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Update from './Update';
import "../App.css";


const Student = () => {

const [value,setvalue]=useState([
  {name:"shiva",age:"21", batch:"oct",course:"MERN",edit:"edit"},
  {name:"prasad",age:"21",batch:"oct",course:"MERN",edit:"edit"},
  {name:"shiva",age:"21",batch:"oct",course:"MERN",edit:"edit"}
])

 


  return (
    <div className='main'>
      <div className='container'> 
      <h2>Student Details</h2>
        <Link to='/addnewstudent'><button>Add New Student</button></Link>
      </div>
   
<div className='tablebox'>

<table className='innertable'>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Batch</th>
          <th>Course</th>
          <th>Edit</th>
        </tr>
        <tbody>
             {value.map((i,index)=>{
              return (
                 
              <tr key={index}>
              <td>{i.name}</td>
              <td>{i.age}</td>
              <td>{i.batch}</td>
              <td>{i.course}</td>
              <td>
              {" "}
                    
                    <Link to='/update' className='editbutn'>{i.edit}</Link>
              
              </td>
            </tr>
              )
             })}
          
            </tbody>
            
          
            
          
      </table>
      </div>

    </div>
  )
}

export default Student