import {  BrowserRouter as Router,  Routes, Route, } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import Overview from "../page/dashboard/overview/Overview";
import Payment from "../page/dashboard/payment/Payment";
import Wallet from "../page/dashboard/wallet/Wallet";
import Company from "../page/dashboard/company/Company";
import Settings from "../page/dashboard/setting/Settings";
import Personal from "../page/dashboard/setting/personal/Personal";
import SecurityDetails from "../page/dashboard/setting/security/SecurityDetails";
import TransactionPin from "../page/dashboard/setting/transactionpin/TransactionPin";
import Transfer from "../page/dashboard/transfer/Transfer";
import Withdraw from "../page/dashboard/withdraw/Withdraw";
import Deposit from "../page/dashboard/deposit/Deposit";



const MainPage= () => {
    return (
        <Router>
            
            <Sidebar/>
            

            <Routes>
                
            </Routes>
        </Router>
    )
}

export default MainPage
