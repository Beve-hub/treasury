import CryptoChart from "./screen/CryptoChart"
import ExchangeChart from "./screen/ExchangeChart"
import QuickAction from "./screen/QuickAction"
import RecentTransaction from "./screen/RecentTransaction"
import Top from "./screen/Top"
import TotalCards from "./screen/TotalCards"


const Overview = () => {
    
    return (
        <section   className='md:pl-[16rem]   min-h-[30rem] top-0  overflow-x-hidden overflow-y-auto '>
            <div className=" grid justify-between ">
            <div className="max-w-[120rem] grid justify-between py-10 gap-6 mx-4">
                 <Top /> 
                 <TotalCards/> 
                 <QuickAction/>                                                 
                 <RecentTransaction/>
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
    )
}

export default Overview
