import WalletButton from "./screen/WalletButton"
import WalletCard from "./screen/WalletCard"
import WalletSearch from "./screen/WalletSearch"
import WalletTop from "./screen/WalletTop"


const Wallet = () => {
    return (
        <section className="relative  min-h-[30rem] w-screen flex md:flex-row  grid-cols-2 items-center justify-center">
        <div className=" grid justify-between ">
          <div className="max-w-[120rem] grid justify-between py-10 gap-6 mx-4">
             <WalletTop/>
             <WalletSearch/>
                         <WalletCard/>                
          </div>
        </div>               

    </section>
    )
}

export default Wallet
