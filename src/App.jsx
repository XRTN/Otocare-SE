import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/Home/HomePage'


function App() {
  

  return (
   <>
   <Router>
    <Routes>
      <Route path='/' exact Component={HomePage} />
    </Routes>
   </Router>

   </>
   
  

  )
}

export default App
