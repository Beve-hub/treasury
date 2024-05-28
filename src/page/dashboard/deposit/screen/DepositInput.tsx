import InputTransaction from '../../../../component/InputTransaction';



const DepositInput = () => {

    
    return (
        <section   className='min-h-[30rem] top-0  overflow-x-hidden overflow-y-auto '>

            <div className=" w-full grid items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
                
               <div className='flex justify-center items-center'>
              
                  <h2 className="my-3 text-start text-3xl font-extrabold text-gray-900">Make Deposit</h2>
              </div>
            <InputTransaction/>           
            </div>
        </section>
       
    )
}

export default DepositInput
