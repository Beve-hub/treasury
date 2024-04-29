import Footer from "../Home/Footer"
import Sales from "./screen/Sales"
import Scale from "./screen/Scale"
import { Solve } from "./screen/Solve"
import { Wealth } from "./screen/Wealth"


const Solution= () => {
    return (
        <div>
            <Solve/>
            <Wealth/>
            <Scale/>
            <Sales/>
            <Footer/>    
        </div>
    )
}

export default Solution
