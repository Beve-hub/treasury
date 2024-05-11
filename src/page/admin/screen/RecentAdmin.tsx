import { useEffect, useState } from 'react';
import Accept from './Accept';
import { database } from '../../../firebase';
import { ref, get } from 'firebase/database';

interface UserData {
  amount: string,
  accountType: string,
  paymentMethod: string,
  cryptoWallet: string,
  date: string, 
  serialId: string,
  key: string,
}


const RecentAdmin = () => {
  const [icon, setIcon] = useState(false);
  const [storedData, setStoredData] = useState<UserData[]>([]);
  const [status, setStatus] = useState<{ [key: string]: string | null }>({});

  const handleAccept = (key: string) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      [key]: "successful",
    }))
  }

  const handleDecline = (key: string) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      [key]: "failed",
    }))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRef = ref(database, 'DepositData');
        const snapshot = await get(usersRef);
        if (snapshot.exists()) {
          const userData: UserData[] = [];
         // console.log('data from firebase snapshot',snapshot)
          snapshot.forEach((childSnapshot) => {
            const userKey = childSnapshot.key
            const data = childSnapshot.val();
            console.log('Data',snapshot)
            userData.push({
              amount: data.amount,
              accountType: data.accountType,
              paymentMethod: data.paymentMethod,
              date: formatDate(data.date), 
              cryptoWallet: data.cryptoWallet,
              serialId: data.serialId,
              key: userKey,
            });
           
          });
          console.log('storedData',userData)
          setStoredData(userData);
          const initialStatus = userData.reduce((acc, item) => {
            acc[item.key] = null;
            return acc;
          }, {} as {[key: string]: string | null});
          setStatus(initialStatus)
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Function to format the date
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is zero-based
    const year = date.getFullYear() % 100; // Get last two digits of year
    return `${day}/${month}/${year}`;
  };

  return (
    <div className='h-[18rem] bg-[--layer-color]  my-8 overflow-x-auto rounded-lg p-4'>
      <p className='font-bold text-lg'>Recent Transaction</p>
      <table className="table-auto w-[60rem]  items-center mt-2">
        <thead className='border-b-2'>
          <tr>
            <th className="px-4 py-2">Seria ID</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Account</th>            
            <th className="px-4 py-2">Method</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody className='border-t-2 mt-4'>
          
          {            
          storedData.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="px-4 py-2">D{item.serialId}</td>
              <td className="px-4 py-2">${item.amount}</td>
              <td className="px-4 py-2">{item.accountType}</td>    
              <td className="px-4 py-2">{item.paymentMethod}</td>         
              <td className="px-4 py-2">{item.cryptoWallet}</td>              
              <td className="px-4 py-2">{item.date}</td>
              <td className="px-4 py-2 flex gap-2">
              {status[item.key] ? (
                 <p> {status[item.key]}</p>
                 ) : (
                  <div>
                    <button className='bg-[--extra-color] p-1 text-[--text-extra] rounded-sm text-xs' onClick={() => handleAccept(item.key)}>Accept</button>
                    <button className='border-2 p-1  rounded-sm text-xs' onClick={() => handleDecline(item.key)}>Decline</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
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
