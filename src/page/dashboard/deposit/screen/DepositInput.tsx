import InputTransaction from '../../../../component/InputTransaction';



const DepositInput = () => {
 
    
    return (
        <section   className='   min-h-[30rem] top-0  overflow-x-hidden overflow-y-auto '>

            <div className="pt-24  grid items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
               <div className=' grid justify-center'>
                  <h2 className="mt-6 text-start text-3xl font-extrabold text-gray-900">Make Deposit</h2>
              </div>
            <InputTransaction/>           
            </div>
        </section>
       
    )
}

export default DepositInput
