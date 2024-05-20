import { useEffect, useState } from "react";
import CryptoChart from "./screen/CryptoChart";
import ExchangeChart from "./screen/ExchangeChart";
import QuickAction from "./screen/QuickAction";
import RecentTransaction from "./screen/RecentTransaction";
import Top from "./screen/Top";
import TotalCards from "./screen/TotalCards";

const Overview = () => {
    const [randomNumber, setRandomNumber] = useState<string>('');

    useEffect(() => {
        const accountNumber = sessionStorage.getItem('accountNumber');
        if (accountNumber) {
            setRandomNumber(accountNumber);
        } else {
            generateRandomNumber();
        }
    }, []);

    const generateRandomNumber = () => {
        const randomNum = Math.floor(1000000000 + Math.random() * 9000000000).toString();
        const accountNumber = randomNum.substring(0, 10);
        setRandomNumber(accountNumber);
        sessionStorage.setItem('accountNumber', accountNumber);
    };
    
    return (
        <section className='md:pl-[16rem] bg-[--text-extra] min-h-[30rem] top-0 overflow-x-hidden overflow-y-auto'>
            <div className="grid justify-between">
                <div className="max-w-[120rem] grid justify-between py-10 gap-6 mx-4">
                    <Top randomNumber={randomNumber} /> 
                    <TotalCards /> 
                    <QuickAction />                                                 
                    <RecentTransaction />
                    <div className="grid md:grid-cols-2 justify-center items-center gap-4">
                        <div className="bg-[--layer-color] p-4">
                            <ExchangeChart />
                        </div>
                        <div className="bg-[--layer-color] p-4">
                            <CryptoChart />
                        </div>
                    </div>                           
                </div>
            </div>               
        </section>
    );
};

export default Overview;
