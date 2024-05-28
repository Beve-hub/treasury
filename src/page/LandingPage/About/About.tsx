import LiveChat from "../chat/LiveChat"
import Footer from "../Home/Footer"
import AboutUs from "./screen/AboutUs"
import Industry from "./screen/Industry"
import Mission from "./screen/Mission"
import Service from "./screen/Service"
import Values from "./screen/Values"



const About = () => {
    return (
        <div className="relative">
           <AboutUs/> 
           <LiveChat/>
           <Mission/>
           <Values/>
           <Service/>
           <Industry/>
           <Footer/>
        </div>
    )
}

export default About
