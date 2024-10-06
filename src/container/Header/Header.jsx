import { Link } from "react-router-dom";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Top yummy plug" />
        <h1 className="app__header-h1">Grab Fresh Meals</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          {" "}
          Discover the finest global cuisines, from gourmet burgers to authentic
          ramen. Handcrafted dishes to delight your taste buds. Enjoy every
          bite.{" "}
        </p>
        <Link to="/foods" className="custom__button">
          PLace An Order
        </Link>
      </div>

      <div className="app__wrapper_img">
        <img src={images.Afang} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
