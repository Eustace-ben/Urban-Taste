import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What Drives Us</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            We are driven by a passion for creating exceptional dishes and
            delivering unforgettable culinary experiences.
          </p>
        </div>
        <p className="p__opensans">
          Our purpose is to combine fresh ingredients with innovative recipes,
          ensuring each dish delights and satisfies our customers. We believe in
          quality, creativity, and a passion for perfection, making every meal
          an experience worth savoring.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kenneth John</p>
        <p className="p__opensans">Lead Chef</p>
      </div>
    </div>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.newChef} id="newChefImg" alt="chef_image" />
    </div>
  </div>
);

export default Chef;
