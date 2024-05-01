import React from 'react'

const QuickAction = () => {
    return (
        <div className='grid gap-2 '>
            <p className='font-bold text-lg'>Quick Action</p>
            <div className='max-w-[28rem] grid items-center justify-between gap-2 md:grid-cols-2'>
            
            <div className='grid justify-center p-2 rounded-2xl gap-8 bg-[--bg-color] w-[13rem]'>
            <h2 className='text-lg text-[--text-extra] '>Deposit</h2> 
            </div>

            <div className='grid justify-center p-2 rounded-2xl gap-8 bg-[#EEF1EF] w-[13rem]'>
            <h2 className='text-lg '>Withdrawal</h2> 
            </div>
           
        </div>
        </div>
        
    )
}

export default QuickAction
