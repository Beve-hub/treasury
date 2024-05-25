import CryptoChart from "../../overview/screen/CryptoChart"
import ExchangeChart from "../../overview/screen/ExchangeChart"

interface Props {
    
}

const Exchange: React.FC<Props> = () => {
    return (
        <section className="md:pl-[16rem] mt-[5rem] space-y-8 bg-[--text-extra] min-h-[30rem] top-0 overflow-x-hidden overflow-y-auto">
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
