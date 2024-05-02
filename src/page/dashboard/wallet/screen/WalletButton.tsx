import React from 'react'


const WalletButton = () => {
    return (
        <div className=''>
            <div className='grid gap-2 items-center justify-start md:grid-cols-2 mx-auto'>
                <button className='flex items-center gap-2 justify-center bg-[--bg-color] p-2 rounded-md'>
                   
                </button>
                <button className='flex items-center justify-center border p-2 gap-2 rounded-md'>
                    <p className='text-lg'>+</p>
                    <p className='text-md'>Add Address</p>
                </button>
            </div>
        </div>
    )
}

export default WalletButton
