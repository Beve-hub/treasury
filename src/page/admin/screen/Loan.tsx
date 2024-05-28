import { useEffect, useState } from 'react';
import { database } from '../../../firebase';
import { ref, get } from 'firebase/database';
import LoanDetails from './LoanDetails';

interface LoanData {
    address: string;
    amount: string;
    birth: string;
    city: string;
    code: string;
    coun: string;
    email: string;
    employer: string;
    fullName: string;
    income: string;
    phoneNum: string;
    state: string;
    title: string;
    used: string;
}

const Loan = () => {
    const [loanData, setLoanData] = useState<LoanData[]>([]);
    const [selectedLoan, setSelectedLoan] = useState<LoanData | null>(null);

    useEffect(() => {
        const fetchLoanData = async () => {
            try {
                const cardRef = ref(database, 'LoanData');
                const cardSnapshot = await get(cardRef);

                const data: LoanData[] = [];
                if (cardSnapshot.exists()) {
                    cardSnapshot.forEach((childSnapshot) => {
                        const loan = childSnapshot.val();
                        data.push({
                            address: loan.address,
                            amount: loan.amount,
                            birth: loan.birth,
                            city: loan.city,
                            code: loan.code,
                            coun: loan.coun,
                            email: loan.email,
                            employer: loan.employer,
                            fullName: loan.fullName,
                            income: loan.income,
                            phoneNum: loan.phoneNum,
                            state: loan.state,
                            title: loan.title,
                            used: loan.used,
                        });
                    });
                }
                setLoanData(data);
            } catch (error) {
                console.error('Error fetching loan data:', error);
            }
        };
        fetchLoanData();
    }, []);

    const handleClick = (loan: LoanData) => {
        setSelectedLoan(loan);
    };

    const handleCloseModal = () => {
        setSelectedLoan(null);
    };

    return (
        <div>
            <p className='font-bold text-xl'>Client Loan Request</p>
            <div className='grid justify-center items-center gap-1 py-6'>
                <div className='grid md:grid-cols-5 gap-3'>
                    {loanData.map((item, index) => (
                        <div key={index} className=' grid justify-center items-center'>
                            <div className='py-3 px-6 bg-[--base-colors] rounded-lg grid justify-center items-center' onClick={() => handleClick(item)}>
                                <div className='flex items-center justify-between'>
                                    <p className='font-semibold text-lg'>{item.fullName}</p>
                                    <div>
                                        <p className='text-[--text-extra] text-bold text-lg bg-[--bases-color] rounded-2xl px-[5px]'>&gt;</p>
                                    </div>
                                </div>
                                <p className='font-semibold text-md'>{item.amount}</p>
                                <p className='text-md'>{item.email}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedLoan && <LoanDetails loan={selectedLoan} onClose={handleCloseModal} />}
            </div>
        </div>
    );
};

export default Loan;