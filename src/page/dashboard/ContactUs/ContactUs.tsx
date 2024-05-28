import LiveChat from '../../LandingPage/chat/LiveChat'
import ContactBody from './screen/ContactBody'




const ContactUs = () => {
    return (
        <section   className='md:pl-[16rem] bg-[--text-extra]  min-h-[30rem] top-0  overflow-x-hidden overflow-y-auto '>
        <div className=" grid justify-between ">
        <div className=" grid justify-between py-10 gap-6 mx-4">   
             <ContactBody/>  
             <LiveChat/>   
        </div>
        </div>               

    </section>
    )
}

export default ContactUs
