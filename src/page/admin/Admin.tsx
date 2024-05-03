
import RecentAdmin from './screen/RecentAdmin'



const Admin = () => {
    return (
        <section   className='md:pl-[16rem]  w-screen min-h-[30rem] top-0  overflow-x-hidden overflow-y-auto '>
            <div className=" grid ">
            <div className="w-screen grid justify-between py-10 gap-6 mx-4">
                <RecentAdmin/>
                </div>            
           </div>
        </section>        
    )
}

export default Admin
