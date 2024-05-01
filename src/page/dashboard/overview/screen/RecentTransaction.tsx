import React from 'react'



   
const RecentTransaction = () => {
    return (
        <div>
            <p className='font-bold text-lg'>Recent Transaction</p>
            <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Method</th>
            <th className="px-4 py-2">option</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
        </div>
    )
}

export default RecentTransaction
