import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contactus from './Contactus'
import Update from './Update'
import AddNewStudent from './AddNewStudent'

// import DataContext from './DataContext'
const Page = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/student' element={<Student/>} ></Route>
    <Route path='/contactus' element={<Contactus/>}></Route>
    <Route path='/update' element={<Update/>}></Route>
    <Route path='/addnewstudent' element={<AddNewStudent/>}></Route>

    </Routes>


  )
}

export default Page