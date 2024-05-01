import QuickAction from "./screen/QuickAction"
import RecentTransaction from "./screen/RecentTransaction"
import Top from "./screen/Top"
import TotalCards from "./screen/TotalCards"

const Overview = () => {
    return (
        <section className="min-h-[30rem] w-screen flex md:flex-row  grid-cols-2 items-center justify-center">
            <div className=" grid justify-between ">
            <div className="max-w-[100rem] grid justify-between">
                 <Top/> 
                 <TotalCards/>
                 <QuickAction/>
                                             
                </div>
            </div>               

        </section>
    )
}

export default Overview
