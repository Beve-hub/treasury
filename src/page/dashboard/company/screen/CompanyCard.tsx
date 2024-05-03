

const CompanyCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='flex justify-center'>
                <div className='p-4 rounded-2xl bg-[--layer-color] max-w-xs md:max-w-none w-full md:w-[20rem] h-[16rem]'>
                    <div className='flex justify-center items-center h-full'>
                        <h2 className='text-lg font-semibold text-center'>Investment</h2>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='p-4 rounded-2xl bg-[--layer-color] max-w-xs md:max-w-none w-full md:w-[20rem] h-[16rem]'>
                    <div className='flex justify-center items-center h-full'>
                        <h2 className='text-lg font-semibold text-center'>Loan</h2>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='p-4 rounded-2xl bg-[--layer-color] max-w-xs md:max-w-none w-full md:w-[20rem] h-[16rem]'>
                    <div className='flex justify-center items-center h-full'>
                        <h2 className='text-lg font-semibold text-center'>Exchange</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyCard;
