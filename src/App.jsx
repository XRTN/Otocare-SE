import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import ScrollToTop from './UniversalComponents/ScrollToTop';

// Keep Login and Register with regular imports since they're entry points
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';

// Lazy load all protected routes
const HomePage = lazy(() => import('./components/Home/HomePage'));
const ProfilePage = lazy(() => import('./components/Profile/ProfilePage'));
const PaymentPage = lazy(() => import('./components/Payment/PaymentPage'));
const RepairShops = lazy(() => import('./components/RepairShops/RepairShops'));
const ShopServices = lazy(() => import('./components/ShopServices/ShopServices'));
const Services = lazy(() => import('./components/Services/Services'));
const ConfirmationPage = lazy(() => import('./components/Confirmation/ConfirmationPage'));
const Orders = lazy(() => import('./components/Orders/Orders'));
const WorkshopHome = lazy(() => import('./components/workshop-home/workshop-home'));
const WorkshopFormPage = lazy(() => import('./components/workshop-form/WorkshopFormPage'));

function App() {
  const { currentUser } = useContext(AuthContext);
  
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  // Loading component for Suspense fallback
  const LoadingSpinner = () => (
    <div className="loading-spinner">
      Loading...
    </div>
  );

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Non-protected routes without Suspense */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected routes with Suspense */}
        <Route
          path="/"
          element={
            <RequireAuth>
              <Suspense fallback={<LoadingSpinner />}>
                <HomePage />
              </Suspense>
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Suspense fallback={<LoadingSpinner />}>
                <ProfilePage />
              </Suspense>
            </RequireAuth>
          }
        />
        <Route
          path="/payment/:searchID"
          element={
            <RequireAuth>
              <Suspense fallback={<LoadingSpinner />}>
                <PaymentPage />
              </Suspense>
            </RequireAuth>
          }
        />
        <Route
          path="/repairShops"
          element={
            <RequireAuth>
              <Suspense fallback={<LoadingSpinner />}>
                <RepairShops />
              </Suspense>
            </RequireAuth>
          }
        />
        <Route
          path="/shopServices/:searchID"
          element={
            <RequireAuth>
              <Suspense fallback={<LoadingSpinner />}>
                <ShopServices />
              </Suspense>
            </RequireAuth>
          }
        />
        <Route
          path="/services"
          element={
            <RequireAuth>
              <Suspense fallback={<LoadingSpinner />}>
                <Services />
              </Suspense>
            </RequireAuth>
          }
        />
        <Route
          path="/confirmation"
          element={
            <RequireAuth>
              <Suspense fallback={<LoadingSpinner />}>
                <ConfirmationPage />
              </Suspense>
            </RequireAuth>
          }
        />
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Suspense fallback={<LoadingSpinner />}>
                <Orders />
              </Suspense>
            </RequireAuth>
          }
        />
        <Route
          path="/workshopHome"
          element={
            <RequireAuth>
              <Suspense fallback={<LoadingSpinner />}>
                <WorkshopHome />
              </Suspense>
            </RequireAuth>
          }
        />
        <Route
          path="/workshop-form"
          element={
            <RequireAuth>
              <Suspense fallback={<LoadingSpinner />}>
                <WorkshopFormPage />
              </Suspense>
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;