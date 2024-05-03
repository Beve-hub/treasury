import WalletCard from "./screen/WalletCard"
import WalletSearch from "./screen/WalletSearch"
import WalletTop from "./screen/WalletTop"


const Wallet = () => {
  const cardNum = " ";
  const expiryDate = " ";
  const cvv = " ";

    return (
      <section   className='md:pl-[16rem]   min-h-[30rem] top-0  overflow-x-hidden overflow-y-auto '>
        <div className=" grid justify-between ">
          <div className="max-w-[120rem] grid justify-between py-10 gap-6 mx-4">
             <WalletTop/>
             <WalletSearch/>
              <WalletCard cardNum={cardNum} expiryDate={expiryDate} cvv={cvv}/>                
          </div>
        </div>               

    </section>
    )
}

export default Wallet
