import React from 'react'
import PaymentTop from './screen/PaymentTop'
import PaymentRecent from './screen/PaymentRecent'
import PaymentSearch from './screen/PaymentSearch'


const Payment = () => {
    return (
        <section className="relative  min-h-[30rem] w-screen flex md:flex-row  grid-cols-2 items-center justify-center">
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
