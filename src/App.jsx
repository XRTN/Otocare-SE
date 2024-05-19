import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/Home/HomePage'
import LoginPage from './components/Login/LoginPage'
import RegisterPage from './components/Register/RegisterPage'
import ProfilePage from './components/Profile/ProfilePage'
import PaymentPage from './components/Payment/PaymentPage'

function App() {
  

  return (
   <>
   <Router>
    <Routes>      
      <Route path='/' exact Component={HomePage} />
      <Route path='/profile' exact Component={ProfilePage}/>
      <Route path='/login' exact Component={LoginPage}/>
      <Route path='/register' exact Component={RegisterPage}/>
      <Route path='/payment' exact Component={PaymentPage}/>
    </Routes>
   </Router>

   </>
   
  

  )
}

export default App
