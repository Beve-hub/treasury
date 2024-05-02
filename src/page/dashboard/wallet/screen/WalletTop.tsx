import {useState} from 'react'
import notification from '../../../../assets/notification.svg';
import user from '../../../../assets/user.svg';
import down from '../../../../assets/down.svg';
import right from '../../../../assets/right.svg';

const WalletTop = () => {
    const [icon, setIcon] = useState<boolean>(false);

    const toggleIcon = (): void => {
        setIcon(!icon)
    }
    return (
      
            <div className='flex justify-between pb-[3rem] max-w-screen'>
            <div className='flex gap-2'>
            <p className='text-2xl font-bold'>Wallet</p>            
            </div>  

            <div className=' items-center gap-6 md:flex hidden'>

            <div className='bg-[--layer-color] p-2 rounded-3xl'>
                <img src={notification} alt='' className='w-[20px]'/>
            </div>
            <div onClick={toggleIcon} className='flex items-center gap-2'>
                <img src={user} alt='' className='w-[40px]'/>
                <p className=''>Victor</p>
                {!icon ? <img src={right} alt=''  className='w-[24px]' /> : <img src={down} alt=''  className='w-[24px]' /> }
                {icon && (
                     <div className="absolute top-[6rem] rounded-lg bg-[#ededed] grid items-center justify-center  w-[8rem]">
                      <ul className='grid p-2 items-center cursor-pointer'>
                        <li className="flex items-center gap-2  p-1 hover:bg-[--button-color] rounded-lg">
                            <a href='/setting'>Settings</a>
                        </li>
                        <li className="flex items-center gap-2 p-1 hover:bg-[--button-color] rounded-lg">
                            <a href='/setting'>Log out</a>
                        </li>
                      </ul>   
                    </div>
                )}      
            </div>

            </div>            
        </div>
              
    )
}

export default WalletTop
