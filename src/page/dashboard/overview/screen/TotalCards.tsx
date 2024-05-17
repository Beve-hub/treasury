import { useEffect, useState } from 'react';
import { database } from '../../../../firebase';
import { ref, get } from 'firebase/database';


interface UserData {
  amount: number;
  currency: string;
  sign: string;
  paymentMethod: string;
  status: string;
  currencyWallet: string;
}

const TotalCards = () => {
  const [totalDepositCoin, setTotalDepositCoin] = useState<number>(0);
  const [totalWithdrawalCoin, setTotalWithdrawalCoin] = useState<number>(0);  
  const [totalDepositCurrency, setTotalDepositCurrency] = useState<number>(0);
  const [totalWithdrawalCurrency, setTotalWithdrawalCurrency] = useState<number>(0);


  const [totalDepositBTC, setTotalDepositBTC] = useState<number>(0);
  const [totalDepositETH, setTotalDepositETH] = useState<number>(0);
  const [totalDepositUSDT, setTotalDepositUSDT] = useState<number>(0);
  const [totalWithdrawalBTC, setTotalWithdrawalBTC] = useState<number>(0);
  const [totalWithdrawalETH, setTotalWithdrawalETH] = useState<number>(0);
  const [totalWithdrawalUSDT, setTotalWithdrawalUSDT] = useState<number>(0);

  const [totalDepositEuro, setTotalDepositEuro] = useState<number>(0);
  const [totalDepositDollar, setTotalDepositDollar] = useState<number>(0);
  const [totalDepositKrona, setTotalDepositKrona] = useState<number>(0);
  const [totalWithdrawalEuro, setTotalWithdrawalEuro] = useState<number>(0);
  const [totalWithdrawalDollar, setTotalWithdrawalDollar] = useState<number>(0);
  const [totalWithdrawalKrona, setTotalWithdrawalKrona] = useState<number>(0);
  
  

  
  const [sign, setSign] = useState<string>('€');

  useEffect(() => {
    const fetchData = async () => {
      const userId = sessionStorage.getItem('userId');
      try {
        const depositRef = ref(database, `DepositData`);
        const withdrawalRef = ref(database, `WithdrawData`);
  
        const depositSnapshot = await get(depositRef);
        const withdrawalSnapshot = await get(withdrawalRef);
  
        const depositData: UserData[] = [];
        const withdrawalData: UserData[] = [];
  
        if (depositSnapshot.exists()) {
          depositSnapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            if (data.userId === userId) {
              depositData.push({
                amount: data.amount,
                currency: data.cryptoWallet,
                currencyWallet: data.currencyWallet,
                sign: data.currency,
                paymentMethod: data.paymentMethod,
                status: data.status,
              });
            }
          });
        }
  
        if (withdrawalSnapshot.exists()) {
          withdrawalSnapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            if (data.userId === userId) {
              withdrawalData.push({
                amount: data.amount,
                currency: data.cryptoWallet,
                currencyWallet: data.currencyWallet,
                paymentMethod: data.paymentMethod,
                status: data.status,
                sign: data.currency,
              });
            }
          });
        }
  
        // Reset all totals
        setTotalDepositCoin(0);
        setTotalDepositCurrency(0);
        setTotalDepositBTC(0);
        setTotalDepositETH(0);
        setTotalDepositUSDT(0);
        setTotalDepositEuro(0);
        setTotalDepositDollar(0);
        setTotalDepositKrona(0);
  
        setTotalWithdrawalCoin(0);
        setTotalWithdrawalCurrency(0);
        setTotalWithdrawalBTC(0);
        setTotalWithdrawalETH(0);
        setTotalWithdrawalUSDT(0);
        setTotalWithdrawalEuro(0);
        setTotalWithdrawalDollar(0);
        setTotalWithdrawalKrona(0);
  
        depositData.forEach((data) => {
          if (data.status === 'Successful') {
            setTotalDepositCoin((prevTotal) => prevTotal + Number(data.amount));
            switch (data.currency) {
              case 'BTC':
                setTotalDepositBTC((prevTotal) => prevTotal + Number(data.amount));
                break;
              case 'ETH':
                setTotalDepositETH((prevTotal) => prevTotal + Number(data.amount));
                break;
              case 'USDT':
                setTotalDepositUSDT((prevTotal) => prevTotal + Number(data.amount));
                break;
              default:
                break;
            }
          }
        });
  
        depositData.forEach((data) => {
          if (data.status === 'Successful') {
            setTotalDepositCurrency((prevTotal) => prevTotal + Number(data.amount));
            switch (data.currencyWallet) {
              case 'Euro':
                setTotalDepositEuro((prevTotal) => prevTotal + Number(data.amount));
                break;
              case 'Dollar':
                setTotalDepositDollar((prevTotal) => prevTotal + Number(data.amount));
                break;
              case 'Krona':
                setTotalDepositKrona((prevTotal) => prevTotal + Number(data.amount));
                break;
              default:
                break;
            }
          }
        });
  
        withdrawalData.forEach((data) => {
          if (data.status === 'Successful') {
            setTotalWithdrawalCoin((prevTotal) => prevTotal + Number(data.amount));
            switch (data.currency) {
              case 'BTC':
                setTotalWithdrawalBTC((prevTotal) => prevTotal + Number(data.amount));
                break;
              case 'ETH':
                setTotalWithdrawalETH((prevTotal) => prevTotal + Number(data.amount));
                break;
              case 'USDT':
                setTotalWithdrawalUSDT((prevTotal) => prevTotal + Number(data.amount));
                break;
              default:
                break;
            }
          }
        });
  
        withdrawalData.forEach((data) => {
          if (data.status === 'Successful') {
            setTotalWithdrawalCurrency((prevTotal) => prevTotal + Number(data.amount));
            switch (data.currencyWallet) {
              case 'Euro':
                setTotalWithdrawalEuro((prevTotal) => prevTotal + Number(data.amount));
                break;
              case 'Dollar':
                setTotalWithdrawalDollar((prevTotal) => prevTotal + Number(data.amount));
                break;
              case 'Krona':
                setTotalWithdrawalKrona((prevTotal) => prevTotal + Number(data.amount));
                break;
              default:
                break;
            }
          }
        });

         // Set sign based on the majority currency type
         if (totalDepositEuro > totalDepositDollar && totalDepositEuro > totalDepositKrona) {
          setSign('€');
        } else if (totalDepositDollar > totalDepositEuro && totalDepositDollar > totalDepositKrona) {
          setSign('$');
        } else if (totalDepositKrona > totalDepositEuro && totalDepositKrona > totalDepositDollar) {
          setSign('Kr');
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  


  return (
    <div className='grid items-center justify-between gap-6 md:grid-cols-4'>
      <div className='grid justify-start p-4 rounded-2xl gap-8 bg-[--bg-color] w-[15rem]'>
        <div className='grid gap-1'>
          <h2 className='text-lg font-semibold text-[--text-extra]'>Total Balance</h2>
          
        </div>
        <div className='grid gap-2'>
          <div className='flex items-center gap-2'>
            <span className=' text-[--text-extra]'>
             {sign}
            </span>
            <h1 className='font-bold text-2xl text-[--text-extra]'>{( totalDepositCoin - totalWithdrawalCoin)  <=0 ? 0 : ( totalDepositCoin - totalWithdrawalCoin) + ( totalDepositCurrency - totalWithdrawalCurrency)  <=0 ? 0 : ( totalDepositCurrency - totalWithdrawalCurrency) }</h1>
          </div>
          <p className='text-sm text-[--text-extra]'>Available Balance</p>
        </div>
      </div>

      <div  className='grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[--layer-color] w-[15rem]'>
          <div className='grid gap-1'>
            <h2 className='text-lg font-semibold'>Total Euros Balance</h2>
          </div>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2'>
              <span className='font-medium text-xl'>€</span>
              <h1 className='font-bold text-2xl'>{(totalDepositEuro - totalWithdrawalEuro) <=0 ? 0 : (totalDepositEuro - totalWithdrawalEuro)}</h1>
            </div>
            <p className='text-sm'>Available Balance</p>
          </div>
        </div>

        <div  className='grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[--layer-color] w-[15rem]'>
          <div className='grid gap-1'>
            <h2 className='text-lg font-semibold'>Total Dollars Balance</h2>
          </div>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2'>
              <span className='font-medium text-xl'>$</span>
              <h1 className='font-bold text-2xl'>{(totalDepositDollar - totalWithdrawalDollar) <=0 ? 0 : (totalDepositDollar - totalWithdrawalDollar)}</h1>
            </div>
            <p className='text-sm'>Available Balance</p>
          </div>
        </div>

        <div  className='grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[--layer-color] w-[15rem]'>
          <div className='grid gap-1'>
            <h2 className='text-lg font-semibold'>Total Krona Balance</h2>
          </div>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2'>
              <span className='font-medium text-xl'>Kr</span>
              <h1 className='font-bold text-2xl'>{(totalDepositKrona - totalWithdrawalKrona) <=0 ? 0 : (totalDepositKrona - totalWithdrawalKrona)}</h1>
            </div>
            <p className='text-sm'>Available Balance</p>
          </div>
        </div>

     
     

      <div className='flex lg:hidden sm:hidden md:hidden'>
      <div  className='grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[--layer-color] w-[15rem]'>
          <div className='grid gap-1'>
            <h2 className='text-lg font-semibold'>Total BTC Balance</h2>
          </div>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2'>
              <span className='font-medium text-xl'>€</span>
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
              <span className='font-medium text-xl'>$</span>
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
              <span className='font-medium text-xl'>Kr</span>
              <h1 className='font-bold text-2xl'>{(totalDepositUSDT - totalWithdrawalUSDT) <=0 ? 0 : (totalDepositUSDT - totalWithdrawalUSDT)}</h1>
            </div>
            <p className='text-sm'>Available Balance</p>
          </div>
        </div>

      </div>

      

      
      
        
     
    </div>
  );
};

export default TotalCards;
