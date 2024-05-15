import { ReactElement } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavbarWrapper from './context/NavbarWrapper';
import Sidebar from './layout/Sidebar';
import Navbar from './layout/Navbar';
import LandingPage from './page/LandingPage/LandingPage';
import About from './page/LandingPage/About/About';
import Solution from './page/LandingPage/Solution/Solution';
import Contact from './page/LandingPage/contact/Contact';
import Register from './page/auth/signup/Register';
import Login from './page/auth/login/Login';
import Overview from './page/dashboard/overview/Overview';
import Amount from './page/auth/payment/Amount';
import AdminFood from './page/admin/AdminFood';
import Loan from './page/dashboard/company/screen/Loan';
import Exchange from './page/dashboard/company/screen/Exchange';
import Investment from './page/dashboard/company/screen/Investment';
import Deposit from './page/dashboard/deposit/Deposit';
import Withdraw from './page/dashboard/withdraw/Withdraw';
import Transfer from './page/dashboard/transfer/Transfer';
import Settings from './page/dashboard/setting/Settings';
import Company from './page/dashboard/company/Company';
import Wallet from './page/dashboard/wallet/Wallet';
import Payment from './page/dashboard/payment/Payment';


export default function App(): ReactElement {
  return (
    <Router>
      <NavbarWrapper>
        <Navbar />
        <Sidebar />
      </NavbarWrapper>

      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/solution' element={<Solution />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/amount' element={<Amount />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/company' element={<Company />} />
        <Route path='/settings' element={<Settings oldPass="oldPassword" newPass="newPassword" conPass="confirmPassword" />} />
        <Route path='/transfer' element={<Transfer />} />
        <Route path='/withdraw' element={<Withdraw />} />
        <Route path='/deposit' element={<Deposit />} />
        <Route path='/investment' element={<Investment />} />
        <Route path='/exchange' element={<Exchange />} />
        <Route path='/loan' element={<Loan />} />
        <Route path='/adminFood' element={<AdminFood />} />
       
        
      </Routes>
    </Router>
  );
}
