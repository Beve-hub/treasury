
import { useNavigate } from 'react-router-dom';

const QuickAction = () => {
    const navigate = useNavigate();
    return (
        <div className='max-w-[80rem] grid pb-4 bg-[--layer-color] item-center px-2 rounded-lg'>
            <div >
                <p className='font-semibold text-lg my-4'>Quick Action</p>
            <div className='max-w-[60rem] grid items-center justify-around gap-3 md:grid-cols-3'>
            
            <button onClick={() => navigate('/deposit')} className='grid justify-center p-1 rounded-2xl  bg-[--text-extra] w-[17rem]'>
            <h2 className='text-lg '>Deposit</h2> 
            </button>

            <button onClick={() => navigate('/withdraw')} className='grid justify-center p-1 rounded-2xl  bg-[--text-extra] w-[17rem]'>
            <h2 className='text-lg '>Withdrawal</h2> 
            </button>

            
           
        </div>
            </div>

        
        </div>
        
    )
}

export default QuickAction
