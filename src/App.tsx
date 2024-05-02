import {  BrowserRouter as Router,  Routes, Route, } from "react-router-dom";
import LandingPage from "./page/LandingPage/LandingPage";
import Navbar from "./layout/Navbar";
import About from "./page/LandingPage/About/About";
import Solution from "./page/LandingPage/Solution/Solution";
import NavbarWrapper from "./context/NavbarWrapper";
import Contact from "./page/LandingPage/contact/Contact";
import Register from "./page/auth/signup/Register";
import Login from "./page/auth/login/Login";
import Reg from "./page/auth/signup/Reg";
import Amount from "./page/auth/payment/Amount";
import Overview from "./page/dashboard/overview/Overview";
import MainPage from "./navigation/MainPage";
import Payment from "./page/dashboard/payment/Payment";
import Wallet from "./page/dashboard/wallet/Wallet";
import Company from "./page/dashboard/company/Company";
import Settings from "./page/dashboard/setting/Settings";
import Personal from "./page/dashboard/setting/personal/Personal";
import SecurityDetails from "./page/dashboard/setting/security/SecurityDetails";
import TransactionPin from "./page/dashboard/setting/transactionpin/TransactionPin";
import Transfer from "./page/dashboard/transfer/Transfer";
import Withdraw from "./page/dashboard/withdraw/Withdraw";
import Deposit from "./page/dashboard/deposit/Deposit";
import Sidebar from "./layout/Sidebar";
import Loan from "./page/dashboard/company/screen/Loan";
import Exchange from "./page/dashboard/company/screen/Exchange";
import Investment from "./page/dashboard/company/screen/Investment";
import WalletAddress from "./page/dashboard/wallet/screen/WalletAddress";
import Card from "./page/dashboard/wallet/screen/Card";
import Admin from "./page/admin/Admin";
function App() {
  return (
    <Router>

      <NavbarWrapper>
      <Navbar />
      <Sidebar/>
      </NavbarWrapper>
      
      <Routes>
        <Route index element={<LandingPage />} />        
        <Route path='/about' element={<About />} />
        <Route path='/solution' element={<Solution />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/reg' element={<Reg />} />
        <Route path='/login' element={<Login/>} /> 
        <Route path='/amount' element={<Amount/>} />  
        <Route path='/overview' element={<Overview/>} />    
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/wallet' element={<Wallet/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/personal' element={<Personal/>}/>
        <Route path='/security' element={<SecurityDetails/>}/>
        <Route path='/pin' element={<TransactionPin/>}/>
        <Route path='/transfer' element={<Transfer/>}/>
        <Route path='/withdraw' element={<Withdraw/>}/>
        <Route path='/deposit' element={<Deposit/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/address' element={<WalletAddress/>}/>
        <Route path='/investment' element={<Investment/>}/>
        <Route path='/exchange' element={<Exchange/>}/>
        <Route path='/loan' element={<Loan/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
