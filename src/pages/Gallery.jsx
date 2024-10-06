import {  Footer } from "../container";
import { data } from "../constants";
import { Navbar, SubHeading } from "../components";

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <div className="app__specialMenu flex__center section__padding" id="menu">
        <div className="app__specialMenu-title">
          <SubHeading title="Photo Gallery" />
        </div>

        <div className="gridWrapper">
          {data.gallery.map((item, index) => (
            <div key={index} className="size_images_container">
              <div className="gridContainer">
                <img
                  className="size_images"
                  src={item.imgUrl}
                  alt={`An Image of ${item.title}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
     
      <Footer />
    </div>
  );
};

export default Gallery;
