import {useState} from 'react'
import notification from '../../../../assets/notification.svg';
import user from '../../../../assets/user.svg';
import down from '../../../../assets/down.svg';
import right from '../../../../assets/right.svg';




const Top = () => {
    const [icon, setIcon] = useState<boolean>(true);

    const toggleIcon = (): void => {
        setIcon(!icon)
    }
    return (
        <div className='flex justify-between'>
            <div className='flex gap-2'>
            <p className='text-2xl font-bold'>Welcome,</p>
            <p className='text-2xl'>Victor</p>
            </div>  

            <div className=' items-center gap-6 md:flex hidden'>
            <div className='bg-[#12121220] p-2 rounded-3xl'>
                <img src={notification} alt='' className='w-[24px]'/>
            </div>
            <div onClick={toggleIcon} className='flex items-center gap-2'>
                <img src={user} alt='' className='w-[40px]'/>
                <p className=''>Victor</p>
                {!icon ? <img src={down} alt=''  className='w-[24px]' /> : <img src={right} alt=''  className='w-[24px]' /> }
                        <div className={!icon ? 'fixed  top-[8.5rem] right-[3.6rem] w-[10%] p-2 bg-[#ededed] z-10 ease-in-out duration-500': 'fixed right-[-30%]'}>
              <p className='pb-2 hover:bg-[var(--button-color)]'><a href='/setting'>Settings</a></p> 
               <p><a>log Out</a></p>              
            </div>
            </div>

            </div>            
        </div>
    )
}

export default Top
