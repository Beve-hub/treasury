import QuickAction from "./screen/QuickAction"
import RecentTransaction from "./screen/RecentTransaction"
import Top from "./screen/Top"
import TotalCards from "./screen/TotalCards"

const Overview = () => {
    return (
        <section   className='md:pl-[16rem]   min-h-[30rem] top-0  overflow-x-hidden overflow-y-auto '>
            <div className=" grid justify-between ">
            <div className="max-w-[120rem] grid justify-between py-10 gap-6 mx-4">
                 <Top/> 
                 <TotalCards/> 
                 <QuickAction/>                                 
                 <RecentTransaction/>                          
                </div>
            </div>               

        </section>
    )
}

export default Overview
