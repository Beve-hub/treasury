
import CompanyCard from './screen/CompanyCard'
import CompanySearch from './screen/CompanySearch'
import CompanyTop from './screen/CompanyTop'



const Company  = () => {
    return (
      <section   className='md:pl-[16rem] bg-[--text-extra]  min-h-[30rem] top-0  overflow-x-hidden overflow-y-auto '>
        <div className=" grid justify-between ">
          <div className="max-w-[120rem] grid justify-between py-10 gap-6 mx-4">
            <CompanyTop/>    
            <CompanySearch/>
            <CompanyCard/>                      
          </div>
        </div>               

    </section>
    )
}

export default Company
