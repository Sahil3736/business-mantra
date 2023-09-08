import React from 'react'
import Home from './Home'
import About from './About'
import Gold from './Gold'
import Silver from './Silver'
import Contact from './Contact'
import { Routes,Route } from "react-router-dom";

function RouterNav() {
  return (
    <div>
         <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route path='/about' element={<About/>}/>               
                <Route path="/gold" element={<Gold/>}/>
                <Route path="/silver" element={<Silver/>}/> 
                <Route path="/contact" element={<Contact/>}/>                
            </Routes>
    </div>
  )
}

export default RouterNav