import HeroPage from "./Home/HeroPage";
import Customer from "./Home/Customer";
import Testimonia from "./Home/Testimonia";
import Footer from "./Home/Footer";
import Insurance from "./Home/Insurance";
import Features from "./Home/Features";
import Find from "./Home/Find";

const LandingPage = () => {
  return (
    <div>
      <HeroPage />
      <Insurance/>
      <Find/>
      <Features/>     
      <Testimonia />
      <Customer />
      <Footer />
    </div>
  );
};

export default LandingPage;
