import React from 'react'
import CompanyCard from './screen/CompanyCard'
import CompanySearch from './screen/CompanySearch'
import CompanyTop from './screen/CompanyTop'



const Company  = () => {
    return (
    <section className="relative  min-h-[30rem] w-screen flex md:flex-row  grid-cols-2 items-center justify-center">
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
