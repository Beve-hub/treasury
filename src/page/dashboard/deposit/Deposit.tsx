import DepositInput from "./screen/DepositInput"
import DepositTop from "./screen/DepositTop"



const Deposit = () => {
    
    return (
        <section   className='md:pl-[10rem]  bg-[--text-extra] min-h-[30rem] top-0  overflow-x-hidden overflow-y-auto '>
            <div className=" grid justify-between ">
            <div className="max-w-[120rem] grid justify-between py-10 gap-6 mx-4">      
            <DepositTop/>            
                 <DepositInput/>                        
                </div>
            </div>               

        </section>
    )
}

export default Deposit
