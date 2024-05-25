import Arrow from '../../../../assets/arrow-left.svg'
import { useNavigate } from "react-router-dom";

const Investment = () => {
    const navigate = useNavigate();
    return (
        <div>
             <div className="w-[20rem] flex items-center justify-between">
          <div onClick={() => navigate('/overview')} className='p-6'>
                <img src={Arrow} alt='' className='w-[3rem] bg-[--layer-color] p-3 rounded-3xl' />
            </div>
            <div>
              <p className="font-bold text-2xl">Investment </p>
            </div>
          </div> 
        </div>
    )
}

export default Investment
