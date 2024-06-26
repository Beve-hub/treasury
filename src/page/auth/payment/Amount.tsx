import Logo from '../../../assets/logo1.png';
import InputTransaction from '../../../component/InputTransaction';



const Amount: React.FC = () => {  

    return (
        <div>
            <div className='m-10 fixed grid justify-start'>
                <a href='/'>
                  <img src={Logo} alt='' className='w-[10rem]' />
               </a>               
            </div>
            <div className="pt-24  grid items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
                  <div className='w-screen grid justify-center'>
                        <h2 className="mt-6 text-start text-3xl font-extrabold text-gray-900">Make Deposit</h2>
                        <p className='max-w-[25rem] text-balance text-sm py-2'>Make an initial deposit to complete your registration</p>
                    </div>
            <InputTransaction/>            
            
            </div>
           
        </div>
    );
};

export default Amount;
