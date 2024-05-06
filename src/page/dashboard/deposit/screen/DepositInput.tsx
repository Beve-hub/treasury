import { useNavigate } from 'react-router-dom';
import InputTransaction from '../../../../component/InputTransaction';



const DepositInput = () => {
    const navigate = useNavigate()
    
    return (
        <section   className=' mt-10  min-h-[30rem] top-0  overflow-x-hidden overflow-y-auto '>

            <div className="pt-24  grid items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
               <div className=' grid justify-center'>
                  <h2 className="mt-6 text-start text-3xl font-extrabold text-gray-900">Make Deposit</h2>
              </div>
            <InputTransaction/>
            <div className='grid items-center justify-center py-3'>
                            <button
                                type="submit"
                                className="w-[20rem] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--bg-color] bg-[--button-color]"
                                onClick={() => navigate('/overview')}
                            >
                                Submit
                            </button>
            </div>
            </div>
        </section>
       
    )
}

export default DepositInput
