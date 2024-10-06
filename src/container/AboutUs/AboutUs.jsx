import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {

  return  (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
    
  
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Welcome to Urban Taste, where flavors from around the world come
            together in harmony. From sizzling burgers to hearty pasta and
            flavorful ramen, every dish is crafted with passion.{" "}
          </p>
          <Link to='/about' className="custom__button">
            See More
          </Link>
        </div>
  
        <div className="app__aboutus-content_knife flex__center">
          <img id="decrease_metalFork" src='https://pics.clipartpng.com/Spoon_PNG_Clipart_Image-412.png' alt="about_knife" />
        </div>
  
        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our Goal</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Our goal at Urban Taste is to bring people together through the love
            of food. We aim to create unforgettable culinary experiences by
            offering a diverse menu that celebrates flavors from around the world.
          </p>
          <Link to='/about' className="custom__button">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}


export default AboutUs;
