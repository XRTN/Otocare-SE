import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './UniversalComponents/Navbar'
import Home from './components/Home/Home'


function App() {
  

  return (
   <>
   <Router>
  <Navbar/>
    <Routes>
      <Route path='/' exact component={Home} />
    </Routes>
   </Router>

   </>
   
  

  )
}

export default App
