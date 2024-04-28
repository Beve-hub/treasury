import Guide from "./Home/Guide";
import HeroPage from "./Home/HeroPage";
import Choose from "./Home/Choose";
import Customer from "./Home/Customer";
import Testimonia from "./Home/Testimonia";
import Join from "./Home/Join";
import Footer from "./Home/Footer";

const LandingPage = () => {
  return (
    <div>
      <HeroPage />
      <Choose />
      <Guide />
      <Testimonia />
      <Customer />
      <Join />
      <Footer />
    </div>
  );
};

export default LandingPage;
