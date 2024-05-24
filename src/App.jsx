import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/Home/HomePage'
import LoginPage from './components/Login/LoginPage'
import RegisterPage from './components/Register/RegisterPage'
import ProfilePage from './components/Profile/ProfilePage'
import PaymentPage from './components/Payment/PaymentPage'
import RepairShops from './components/RepairShops/RepairShops'
import ShopServices from './components/ShopServices/ShopServices'
import Services from './components/Services/Services'

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
      <Route path='/repairShops' exact Component={RepairShops}/>
      <Route path='/shopServices/:searchID' exact Component={ShopServices}/>
      <Route path='/services' exact Component={Services}/>
    </Routes>
   </Router>

   </>
   
  

  )
}

export default App
