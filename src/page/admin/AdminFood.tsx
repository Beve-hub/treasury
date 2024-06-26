
import AdminCard from './screen/AdminCard'
import AdminImages from './screen/AdminImages'
import Loan from './screen/Loan'
import RecentAdmin from './screen/RecentAdmin'
import RecentCard from './screen/RecentCard'



const AdminFood = () => {
    return (
        <section   className='md:pl-[16rem]  w-screen min-h-[30rem] top-0  overflow-x-hidden overflow-y-auto '>
            <div className=" grid ">
            <div className="mt-[2rem] grid justify-between py-10 gap-6 mx-4">
                <p className='font-bold text-2xl py-2'>Admin</p>
                <RecentCard/>
                <RecentAdmin/>
                <Loan/>
                <AdminImages/>
                <AdminCard/>
                </div>            
           </div>
        </section>        
    )
}

export default AdminFood
