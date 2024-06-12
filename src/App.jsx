import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home/HomePage';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';
import ProfilePage from './components/Profile/ProfilePage';
import PaymentPage from './components/Payment/PaymentPage';
import RepairShops from './components/RepairShops/RepairShops';
import ShopServices from './components/ShopServices/ShopServices';
import Services from './components/Services/Services';
import ConfirmationPage from './components/Confirmation/ConfirmationPage';
import Orders from './components/Orders/Orders';
import { useContext } from 'react';
import ScrollToTop from './UniversalComponents/ScrollToTop';
import { AuthContext } from './context/AuthContext';


function App() {
 
  const {currentUser}=useContext(AuthContext)
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  console.log(currentUser);
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route
          path="/payment/:searchID"
          element={
            <RequireAuth>
              <PaymentPage />
            </RequireAuth>
          }
        />
        <Route
          path="/repairShops"
          element={
            <RequireAuth>
              <RepairShops />
            </RequireAuth>
          }
        />
        <Route
          path="/shopServices/:searchID"
          element={
            <RequireAuth>
              <ShopServices />
            </RequireAuth>
          }
        />
        <Route
          path="/services"
          element={
            <RequireAuth>
              <Services />
            </RequireAuth>
          }
        />
        <Route
          path="/confirmation"
          element={
            <RequireAuth>
              <ConfirmationPage />
            </RequireAuth>
          }
        />
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;