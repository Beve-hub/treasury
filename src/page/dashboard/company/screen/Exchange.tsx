import CryptoChart from "../../overview/screen/CryptoChart"
import ExchangeChart from "../../overview/screen/ExchangeChart"

const Exchange = () => {
  
    return (
      <section className="md:pl-[16rem] bg-[--text-extra] min-h-[30rem] top-0 overflow-x-hidden overflow-y-auto">
          <div className="my-6 w-[20rem] flex items-center justify-between">
          
            <div>
              <p className="font-bold text-2xl">Exchange Chart</p>
            </div>
          </div> 
          
            <div className="bg-[ --layer-colo] p-4">
        <CryptoChart  />
        </div>

        <div className="bg-[ --layer-colo] p-4">
        <ExchangeChart/>
        </div>
      </section>
    )
}

export default Exchange
