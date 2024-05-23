import IMG from '../../../assets/phone.png'
import Bal from '../../../assets/balance.svg'
import wal from '../../../assets/et_wallet.svg'
import card from '../../../assets/card.svg'
import mon from '../../../assets/monitor.svg'
import dia from '../../../assets/diamond.svg'
import cal from '../../../assets/cal.svg'

const Features = () => {
    return (
        <section  className="min-h-[30rem] bg-[--text-extra] py-20 flex  md:flex-row grid-col-2 items-center justify-center ">
            <div>
            <div className='flex gap-10 items-center justify-center'>
                <img src={IMG} alt='' className='md:flex hidden'/>
                <div className='grid md:grid-cols-2 gap-4'>
                <div className='flex gap-4'>
                    <div className='w-[4rem] h-[4rem] border-2 p-4 border-[--button-color] rounded-full'>
                        <img src={Bal} alt='' className='w-[2rem] h-[2rem]'/>
                    </div>
                    <div className='w-[20rem]'>
                        <p className='font-bold text-2xl text-[--bg-color] hover:text-[var(--button-color)] cursor-pointer' >Loan insurance</p>
                        <p className='text-[#12121270]'>Loan insurance is essential to protect your loved ones and the property you buy in case of a hard blow.</p>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <div className='w-[4rem] h-[4rem] border-2 p-4 border-[--button-color] rounded-full'>
                        <img src={wal} alt='' className='w-[2rem] h-[2rem]'/>
                    </div>
                    <div className='w-[20rem]'>
                        <p className='font-bold text-2xl text-[--bg-color] hover:text-[var(--button-color)] cursor-pointer' >Life insurance</p>
                        <p className='text-[#12121270]'>Do you want to maintain your standard of living and that of your family in the event of death, work stoppage, job loss or disability?</p>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <div className='w-[4rem] h-[4rem] border-2 p-4 border-[--button-color] rounded-full'>
                        <img src={cal} alt='' className='w-[2rem] h-[2rem]'/>
                    </div>
                    <div className='w-[20rem]'>
                        <p className='font-bold text-2xl text-[--bg-color] hover:text-[var(--button-color)] cursor-pointer' >Housing insurance</p>
                        <p className='text-[#12121270]'>Because your home needs to be protected from burglary or fire, this option is yours.</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='w-[4rem] h-[4rem] border-2 p-4 border-[--button-color] rounded-full'>
                        <img src={card} alt='' className='w-[2rem] h-[2rem]'/>
                    </div>
                    <div className='w-[20rem]'>
                        <p className='font-bold text-2xl text-[--bg-color] hover:text-[var(--button-color)] cursor-pointer' >Transport</p>
                        <p className='text-[#12121270]'>Because every driver is different, our warranties and options have been designed to fit your needs.</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='w-[4rem] h-[4rem] border-2 p-4 border-[--button-color] rounded-full'>
                        <img src={mon} alt='' className='w-[2rem] h-[2rem]'/>
                    </div>
                    <div className='w-[20rem]'>
                        <p className='font-bold text-2xl text-[--bg-color] hover:text-[var(--button-color)] cursor-pointer' >Optimal Protection</p>
                        <p className='text-[#12121270]'>Ensure your housing, your health, your transport equipment or other. It is a significant security.</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='w-[4rem] h-[4rem] border-2 p-4 border-[--button-color] rounded-full'>
                        <img src={dia} alt='' className='w-[2rem] h-[2rem]'/>
                    </div>
                    <div className='w-[20rem]'>
                        <p className='font-bold text-2xl text-[--bg-color] hover:text-[var(--button-color)] cursor-pointer' >Financial security</p>
                        <p className='text-[#12121270]'>Because each heritage tells a unique story, yours, and because you have strong demands, that's what you need.</p>
                    </div>
                </div>
               </div>                
            </div>
            </div>            
        </section>        
    )
}

export default Features
