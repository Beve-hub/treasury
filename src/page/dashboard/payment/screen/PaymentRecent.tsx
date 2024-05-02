import React from 'react'



const PaymentRecent = () => {
    return (
        <div className='h-[20rem]  bg-[#ededed] my-8 overflow-x-auto rounded-lg p-4' >                     
            <p className='font-bold text-lg'>Recent Transaction</p>    
      <table className="table-auto  items-center w-[1000px] mt-2">
        <thead className='border-b-2'>
          <tr className="">            
            <th className="px-4 py-2 sm:text-sm md:text-base lg:text-lg">Name</th>
            <th className="px-4 py-2 sm:text-sm md:text-base lg:text-lg">Amount</th>
            <th className="px-4 py-2 sm:text-sm md:text-base lg:text-lg">Method</th>
            <th className="px-4 py-2 sm:text-sm md:text-base lg:text-lg">option</th>
            <th className="px-4 py-2 sm:text-sm md:text-base lg:text-lg">Date</th>
          </tr>
        </thead>
        <tbody className='border-b-2'>
        <tr className=" text-center ">            
            <td className="px-4 py-2">victor</td>
            <td className="px-4 py-2">Amount</td>
            <td className="px-4 py-2">Method</td>
            <td className="px-4 py-2">option</td>
            <td className="px-4 py-2">Date</td>
          </tr>
        </tbody>
      </table>
    </div>
       
    )
}

export default PaymentRecent