import { Link } from "react-router-dom";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_img">
        <img src={images.PepperSoup} alt="finus_img" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Get in touch" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Locate Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Willow Cottage, Briarwood Lane, Westfield, AB12 3XZ
          </p>
          <p
            className="p__cormorant"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Fri: 8:00 am - 12:00 am</p>
          <p className="p__opensans">Sat - Sun: 8:45 am - 05:45 pm</p>
        </div>
        <Link
          style={{ marginTop: "2rem" }}
          to="/contact"
          className="custom__button"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
};

export default FindUs;
