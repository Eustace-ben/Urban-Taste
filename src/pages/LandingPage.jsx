import { Navbar } from "../components";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
} from "../container";
import MakeOrders from "../container/MakeOrders/MakeOrders";

const LandingPage = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    {/* <SpecialMenu /> */}
    <Chef />
    <MakeOrders />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default LandingPage;
