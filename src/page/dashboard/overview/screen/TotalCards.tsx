import { useEffect, useState } from 'react';
import { database } from '../../../../firebase';
import { ref, get } from 'firebase/database';

interface UserData {
  amount: number;
  currency: string;
  paymentMethod: string;
  status: string;
}

const TotalCards = () => {
  const [totalDeposit, setTotalDeposit] = useState<number>(0);
  const [totalWithdrawal, setTotalWithdrawal] = useState<number>(0);
  const [totalDepositBTC, setTotalDepositBTC] = useState<number>(0);
  const [totalDepositETH, setTotalDepositETH] = useState<number>(0);
  const [totalDepositUSDT, setTotalDepositUSDT] = useState<number>(0);
  const [totalWithdrawalBTC, setTotalWithdrawalBTC] = useState<number>(0);
  const [totalWithdrawalETH, setTotalWithdrawalETH] = useState<number>(0);
  const [totalWithdrawalUSDT, setTotalWithdrawalUSDT] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const userId = sessionStorage.getItem('userId')
      try {                    
          const depositRef = ref(database, `DepositData`);
          const withdrawalRef = ref(database, `WithdrawData`);

          const depositSnapshot = await get(depositRef); 
          const withdrawalSnapshot = await get(withdrawalRef); 

          const depositData: UserData[]= [];
          const withdrawalData: UserData[]= [];

          if (depositSnapshot.exists()) {              
            depositSnapshot.forEach((childSnapshot) => {
              const data = childSnapshot.val();   
              if (data.userId === userId) {
                depositData.push({
                  amount: data.amount,
                  currency: data.cryptoWallet,
                  paymentMethod: data.paymentMethod,
                  status: data.status,
                 })
              }          
              
            })          
          } 

          if (withdrawalSnapshot.exists()) {              
            withdrawalSnapshot.forEach((childSnapshot) => {                              
              const data = childSnapshot.val();   
              if (data.userId === userId ) {
                withdrawalData.push({
                  amount: data.amount,
                  currency: data.cryptoWallet,
                  paymentMethod: data.paymentMethod,
                  status: data.status,
                 })
              }    
            })
          }   
          setTotalDeposit(0)
          setTotalDepositBTC(0)
          setTotalDepositETH(0)
          setTotalDepositUSDT(0)
          
            depositData.map(data => {
              if (data.status === 'Successful') {
                setTotalDeposit(prevTotal => prevTotal + Number(data.amount)) 
                switch (data.currency) {
                  case 'BTC' :                    
                    return setTotalDepositBTC(prevTotal => prevTotal + Number(data.amount)) 
                    case 'ETH' :                    
                    return setTotalDepositETH(prevTotal => prevTotal + Number(data.amount))                    
                    case 'USDT' :                    
                    return setTotalDepositUSDT(prevTotal => prevTotal + Number(data.amount)) 
                  default :
                    return 
                } 
              } 
            })

            setTotalWithdrawal(0)
            withdrawalData.map(data => {
              if (data.status === 'Successful') {
                setTotalWithdrawal(prevTotal => prevTotal + Number(data.amount)) 
                switch (data.currency) {
                  case 'BTC' :                    
                    return setTotalWithdrawalBTC(prevTotal => prevTotal + Number(data.amount)) 
                    case 'ETH' :                    
                    return setTotalWithdrawalETH(prevTotal => prevTotal + Number(data.amount))                    
                    case 'USDT' :                    
                    return setTotalWithdrawalUSDT(prevTotal => prevTotal + Number(data.amount)) 
                  default :
                    return 
                } 
              } 
            })
           
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();   
  }, []);



  return (
    <div className='grid items-center justify-between gap-6 md:grid-cols-4'>
      <div className='grid justify-start p-4 rounded-2xl gap-8 bg-[--layer-color] w-[15rem]'>
        <div className='grid gap-1'>
          <h2 className='text-lg font-semibold'>Total Balance</h2>
          <p className='text-xs'>Checking account</p>
        </div>
        <div className='grid gap-2'>
          <div className='flex items-center gap-2'>
            <span className='font-bold text-2xl'>$</span>
            <h1 className='font-bold text-2xl'>{( totalDeposit - totalWithdrawal)  <=0 ? 0 : ( totalDeposit - totalWithdrawal)}</h1>
          </div>
          <p className='text-sm'>Available Balance</p>
        </div>
      </div>
     
      <div  className='grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[--layer-color] w-[15rem]'>
          <div className='grid gap-1'>
            <h2 className='text-lg font-semibold'>Total BTC Balance</h2>
          </div>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2'>
              <span className='font-bold text-2xl'>$</span>
              <h1 className='font-bold text-2xl'>{(totalDepositBTC - totalWithdrawalBTC) <=0 ? 0 : (totalDepositBTC - totalWithdrawalBTC)}</h1>
            </div>
            <p className='text-sm'>Available Balance</p>
          </div>
        </div>

        <div  className='grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[--layer-color] w-[15rem]'>
          <div className='grid gap-1'>
            <h2 className='text-lg font-semibold'>Total ETH Balance</h2>
          </div>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2'>
              <span className='font-bold text-2xl'>$</span>
              <h1 className='font-bold text-2xl'>{(totalDepositETH - totalWithdrawalETH) <=0 ? 0 : (totalDepositETH - totalWithdrawalETH)}</h1>
            </div>
            <p className='text-sm'>Available Balance</p>
          </div>
        </div>

        <div  className='grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[--layer-color] w-[15rem]'>
          <div className='grid gap-1'>
            <h2 className='text-lg font-semibold'>Total USDT Balance</h2>
          </div>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2'>
              <span className='font-bold text-2xl'>$</span>
              <h1 className='font-bold text-2xl'>{(totalDepositUSDT - totalWithdrawalUSDT) <=0 ? 0 : (totalDepositUSDT - totalWithdrawalUSDT)}</h1>
            </div>
            <p className='text-sm'>Available Balance</p>
          </div>
        </div>

        
     
    </div>
  );
};

export default TotalCards;
