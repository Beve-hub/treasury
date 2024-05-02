import QuickAction from "./screen/QuickAction"
import RecentTransaction from "./screen/RecentTransaction"
import Top from "./screen/Top"
import TotalCards from "./screen/TotalCards"

const Overview = () => {
    return (
        <section className="relative  min-h-[30rem] w-screen flex md:flex-row  grid-cols-2 items-center justify-center">
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
