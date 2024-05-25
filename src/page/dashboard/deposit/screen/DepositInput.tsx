import InputTransaction from '../../../../component/InputTransaction';
import { useNavigate } from 'react-router-dom';
import Arrow from '../../../../assets/arrow-left.svg'


const DepositInput = () => {
    const navigate = useNavigate();
    
    return (
        <section   className='min-h-[30rem] top-0  overflow-x-hidden overflow-y-auto '>

            <div className="pt-24 w-full grid items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
                
               <div className='flex justify-center items-center'>
               <div onClick={() => navigate('/overview')} className='pt-6 pr-6'>
                  <img src={Arrow} alt='' className='w-[3rem] bg-[#12121210] p-3 rounded-3xl' />
                </div>
                  <h2 className="mt-6 text-start text-3xl font-extrabold text-gray-900">Make Deposit</h2>
              </div>
            <InputTransaction/>           
            </div>
        </section>
       
    )
}

export default DepositInput
