import { useState } from 'react';
import Accept from './Accept';

const RecentAdmin = () => {
  const [icon, setIcon] = useState(false);

  const toggleIcon = (status: string) => {
    setIcon(status === 'pending' ? !icon : false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'cancel':
        return 'text-red-500';
      case 'pending':
        return 'text-yellow-500';
      case 'successful':
        return 'text-green-500';
      default:
        return '';
    }
  };

  return (
    <div className='h-[18rem] bg-[--layer-color] my-8 overflow-x-auto rounded-lg p-4'>
      <p className='font-bold text-lg'>Recent Transaction</p>
      <table className="table-auto w-[60rem]  items-center mt-2">
        <thead className='border-b-2'>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Method</th>
            <th className="px-4 py-2">Option</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody className='border-t-2 mt-4'>
          <tr className="text-center">
            <td className="px-4 py-2">Victor</td>
            <td className="px-4 py-2">Amount</td>
            <td className="px-4 py-2">Method</td>
            <td className="px-4 py-2">Option</td>
            <td className="px-4 py-2">Date</td>
            <td onClick={() => toggleIcon('cancel')} className={`px-4 py-2 cursor-pointer ${getStatusColor('cancel')}`}>Cancel</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2">Victor</td>
            <td className="px-4 py-2">Amount</td>
            <td className="px-4 py-2">Method</td>
            <td className="px-4 py-2">Option</td>
            <td className="px-4 py-2">Date</td>
            <td onClick={() => toggleIcon('pending')} className={`px-4 py-2 cursor-pointer ${getStatusColor('pending')}`}>Pending</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2">Victor</td>
            <td className="px-4 py-2">Amount</td>
            <td className="px-4 py-2">Method</td>
            <td className="px-4 py-2">Option</td>
            <td className="px-4 py-2">Date</td>
            <td onClick={() => toggleIcon('successful')} className={`px-4 py-2 cursor-pointer ${getStatusColor('successful')}`}>Successful</td>
          </tr>
        </tbody>
      </table>

      <Accept toggleIcon={icon} onClose={() => setIcon(false)}>
        <div>
          <div>
            <p className='text-xl py-4'>You Have a Deposit request</p>
            <div className='flex gap-3'>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[--text-extra] bg-[--bg-color]" >
                Accept
              </button>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-[--bg-color] rounded-md shadow-sm text-sm font-medium text-[--bg-color]" >
                Decline
              </button>
            </div>
          </div>
        </div>
      </Accept>
    </div>
  );
}

export default RecentAdmin;
