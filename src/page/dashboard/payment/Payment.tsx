import PaymentTop from './screen/PaymentTop'
import PaymentRecent from './screen/PaymentRecent'
import PaymentSearch from './screen/PaymentSearch'


const Payment = () => {
    return (
        <section   className='md:pl-[16rem] bg-[--text-extra]  min-h-[30rem] top-0  overflow-x-hidden overflow-y-auto '>
            <div className=" grid justify-between ">
            <div className="max-w-[120rem] grid justify-between py-10 gap-6 mx-4">
                 <PaymentTop/> 
                 <PaymentSearch/>  
                 <PaymentRecent/>        
            </div>
            </div>               

        </section>
    )
}

export default Payment
