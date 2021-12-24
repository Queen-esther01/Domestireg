import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Register from './auth/Register';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import Cart from './pages/Cart';
import MedicalBouquet from './pages/MedicalBouquet';
import MedicalCheckDetails from './pages/MedicalCheckDetails';
import BackgroundBouquet from './pages/BackgroundBouquet';
import BackgroundChecks from './components/medical/BackgroundChecks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/medical-bouquet" element={<MedicalBouquet/>} />
        <Route path="/medical-bouquet/:id" element={<MedicalCheckDetails/>} />
        <Route path="/background-bouquet" element={<BackgroundBouquet/>} />
        <Route path="/background-bouquet/:id" element={<MedicalCheckDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
