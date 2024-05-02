import {useState} from 'react'
import downwhite from '../../../../assets/downwhite.svg';
import rightwhite from '../../../../assets/rightwhite.svg';
import right from '../../../../assets/right.svg';
import search from '../../../../assets/search.svg';

const CompanySearch  = () => {
    const [action, setAction] = useState<boolean>(false);

  
    const toggleAction = (): void => {
        setAction(!action)
    }

    return (
        <div className='flex gap-1 justify-between pb-[3rem] max-w-screen md:grid-cols-2'>
            <div>
                <div className="relative">
                   <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-700">
                    <img src={search} alt='' className='w-[22px]'/>
                   </span>
                    <input
                     id="search"
                     name="search"
                     type="search"
                      className="pl-10 block w-[15rem] px-3 bg-[--layer-color] rounded-3xl py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="search...."                                        
                     />
                </div>
            </div> 

            <div className=' items-center gap-6 '>

            <div >
                <button onClick={toggleAction} className='bg-[--bg-color] py-2 px-6 rounded-md  flex items-center gap-2'>
                <p className='text-[--text-extra]'>Action</p>
                {!action ? <img src={rightwhite} alt=''  className='w-[10px]' /> : <img src={downwhite} alt=''  className='w-[10px]' /> }
                </button>
                
               
                {action && (
                     <div className="absolute top-[12rem] rounded-lg bg-[#ededed] grid items-center justify-center ">
                      <ul className='grid p-2 items-center cursor-pointer'>
                        <li className="flex items-center gap-2  p-1 hover:bg-[--button-color] rounded-lg">
                            <a href='/deposit' className="flex items-center gap-4">
                                Deposit   <img src={right} alt=''  className='w-[16px]' /></a>
                        </li>
                        <li className="flex items-center gap-2 p-1 hover:bg-[--button-color] rounded-lg">
                            <a href='/withdraw' className="flex items-center gap-1">
                                Withdraw <img src={right} alt=''  className='w-[16px]' /></a>
                        </li>
                        <li className="flex items-center gap-2 p-1 hover:bg-[--button-color] rounded-lg">
                            <a href='/transfer' className="flex items-center gap-4">
                                Transfer <img src={right} alt=''  className='w-[16px]' /></a>
                        </li>
                      </ul>   
                    </div>
                )}      
            </div>

            </div>            
        </div>
    )
}

export default CompanySearch
