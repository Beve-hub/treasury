
import arrow from '../../../../assets/leftarrow.svg';
import { useNavigate } from 'react-router-dom';

const DepositTop = () => {
    const navigate = useNavigate();


   
    return (

        <div  >  

                <p onClick={() => navigate('/overview')}>
                    <img src={arrow} alt='' className='w-[3rem] bg-[--layers-colo] p-3 rounded-full'/>
                </p>
        </div>       
    )
}

export default DepositTop
