import React from 'react'


const TotalCards = () => {
    return (
        <div className='grid items-center justify-between gap-6 md:grid-cols-3'>
            <div className='grid justify-start p-4 rounded-2xl gap-8 bg-[#EEF1EF] w-[15rem]'>
                <div className='grid gap-1'>
                <h2 className='text-lg font-semibold'>Total Balance</h2>
                <p className='text-xs'>Checking account</p>
                </div>
                

                <div className='grid gap-2'>
                    <div className='flex items-center gap-2'>
                     <span className='font-bold text-2xl'>$</span>
                     <h1 className='font-bold text-2xl'>0.00</h1>
                    </div>
                    <p className='text-sm'>Available Balance</p>                    
                </div>
            </div>

            <div className='grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[#EEF1EF] w-[15rem]'>
                <div className='grid gap-1'>
                <h2 className='text-lg font-semibold'>Total Card Balance</h2>
                
                </div>
                

                <div className='grid gap-2'>
                    <div className='flex items-center gap-2'>
                     <span className='font-bold text-2xl'>$</span>
                     <h1 className='font-bold text-2xl'>0.00</h1>
                    </div>
                    <p className='text-sm'>Available Balance</p>                    
                </div>
            </div>

            <div className='grid justify-start px-4 py-6 rounded-2xl gap-8 bg-[#EEF1EF] w-[15rem]'>
                <div className='grid gap-1'>
                <h2 className='text-lg font-semibold'>Total Crypto Balance</h2>
                
                </div>
                

                <div className='grid gap-2'>
                    <div className='flex items-center gap-2'>
                     <span className='font-bold text-2xl'>$</span>
                     <h1 className='font-bold text-2xl'>0.00</h1>
                    </div>
                    <p className='text-sm'>Available Balance</p>                    
                </div>
            </div>
        </div>
    )
}

export default TotalCards
