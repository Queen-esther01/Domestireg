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
import SubBouquets from './pages/SubBouquets';
import SubBouquetDetails from './pages/SubBouquetDetails';
import Verify from './auth/Verify';
import ConfigureStore from './store/configureStore';
import { Provider } from 'react-redux';
import DomesticEmployeeForm from './pages/DomesticEmployeeForm';
import AdditionalEmployeeForm from './pages/AdditionalEmployeeForm';
import Order from './pages/Order';
import TransactionConfirmation from './pages/TransactionConfirmation';

const store = ConfigureStore()

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/subbouquet" element={<SubBouquets/>} />
          <Route path="/subbouquet/:id" element={<SubBouquetDetails/>} />
          <Route path="/checkoutform" element={<DomesticEmployeeForm/>} />
          <Route path="/checkoutform/additionalinfo" element={<AdditionalEmployeeForm/>} />
          <Route path="/orders" element={<Order/>} />
          <Route path="/paymentconfirmation" element={<TransactionConfirmation/>} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
