import {useState} from 'react'
import dots from '../../../../assets/dots.svg'

const WalletCard = () => {
    const [icon, setIcon] = useState<boolean>(false);
    const [add, setAdd] = useState<boolean>(false);

    const toggleAdd = (): void => {
        setAdd(!add)
    }   
    const toggleIcon = (): void => {
        setIcon(!icon)
    }
    return (
        <div className='grid gap-6 '>
            
            <div className='grid items-center justify-center gap-6 md:grid-cols-2 max-w-screen-lg mx-auto'>
                <div className='grid  rounded-2xl  bg-[--transparent] w-[20rem] h-[15rem] md:w-[30rem] md:h-[20rem] outline-dashed outline-2 outline-offset-2'>
                <button onClick={toggleIcon} className='absolute m-2 '>
                        <img src={dots} alt='' className='w-[24px]'/>
                    </button>
                    {icon && (
                     <div className="absolute top-[18.4rem] ml-4 rounded-lg bg-[#ededed] grid items-center justify-center  w-[8rem]">
                      <ul className='grid p-2 items-center cursor-pointer'>
                        <li className="flex items-center gap-2 ">
                            <a href='/setting' className='flex items-center gap-2'> <p className='text-lg '>+</p>
                            <p className='text-md '>Add Card</p></a>
                        </li>
                      </ul>   
                    </div>
                )}
                    
                    <div className='grid justify-center items-center gap-1'>
                        <h2 className='text-sm  text-center'>Add Card</h2>
                    </div>
                </div>
                <div className='grid  rounded-2xl  bg-[--transparent] w-[20rem] h-[15rem] md:w-[30rem] md:h-[20rem] outline-dashed outline-2 outline-offset-2'>
                <button onClick={toggleAdd} className='absolute m-2 '>
                        <img src={dots} alt='' className='w-[24px]'/>
                    </button>
                    {add && (
                     <div className="absolute top-[18.4rem] ml-4 rounded-lg bg-[#ededed] grid items-center justify-center  w-[8rem]">
                      <ul className='grid p-2 items-center cursor-pointer'>
                        <li className="flex items-center gap-2 ">
                            <a href='/setting' className='flex items-center gap-2'> <p className='text-lg '>+</p>
                            <p className='text-md '>Add Card</p></a>
                        </li>
                      </ul>   
                    </div>
                )}
                    <div className='grid justify-center items-center gap-1'>
                        <h2 className='text-sm text-center'>Add wallet address</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WalletCard;
