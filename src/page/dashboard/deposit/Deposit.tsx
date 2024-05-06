import DepositInput from "./screen/DepositInput"



const Deposit = () => {
    
    return (
        <section   className='md:pl-[10rem]   min-h-[30rem] top-0  overflow-x-hidden overflow-y-auto '>
            <div className=" grid justify-between ">
            <div className="max-w-[120rem] grid justify-between py-10 gap-6 mx-4">                  
                 <DepositInput/>                        
                </div>
            </div>               

        </section>
    )
}

export default Deposit
