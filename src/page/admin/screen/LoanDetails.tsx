import React from 'react'

interface Props {   
 onClose: () => void;
 loan: LoanData;
}
 interface LoanData {
    address: string;
    amount: string;
    birth:string;
    city:string;
    code:string;
    coun: string;
    email:string;
    employer:string;
    fullName:string;
    income: string;
    phoneNum: string;
    state: string;
    title: string;
    used: string;    
}



const LoanDetails: React.FC<Props> = ({loan, onClose,}) => {
    return (
        <div onClick={onClose} className='fixed inset-0 flex justify-center items-center bg-black/20'>
            <div className='bg-white p-4 rounded-md w-[30rem]' >        
        <div>
            <div className='flex items-center justify-between'>
                <p className='font-semibold text-xl'>Loan Request Data</p>
            <button onClick={onClose} className=" bg-[--layers-colo] rounded-full w-6 h-6 flex justify-center items-center">
          X
        </button>
            </div>            
            

            <div className='grid gap-4 py-6'>
           <p>Full Name: <span className='font-semibold text-lg'>{loan.fullName}</span></p>
            <p>Email: <span className='font-semibold text-lg'>{loan.email}</span> </p>
            <p>Amount: <span className='font-semibold text-lg'>{loan.amount}</span> </p>
            <p>Income: <span className='font-semibold text-lg'>{loan.income}</span> </p>
            <p>Phone Number: <span className='font-semibold text-lg'>{loan.phoneNum}</span> </p>
            <p>Date of Birth: <span className='font-semibold text-lg'>{loan.birth}</span> </p>
            <p>Title: <span className='font-semibold text-lg'>{loan.title}</span> </p>
            <p>Employer: <span className='font-semibold text-lg'>{loan.employer}</span> </p>  
            <p>Purpose: <span className='font-semibold text-lg'>{loan.used}</span> </p>
            <p>City: <span className='font-semibold text-lg'>{loan.city}</span> </p>
            <p>State: <span className='font-semibold text-lg'>{loan.state}</span> </p>
            <p>Zip Code: <span className='font-semibold text-lg'>{loan.code}</span> </p>
            <p>Country: <span className='font-semibold text-lg'>{loan.coun}</span> </p> 
         </div>
        </div>        
      </div>
           
        </div>
    )
}

export default LoanDetails
