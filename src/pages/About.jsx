import { FindUs, Footer } from "../container";

import { Navbar, SubHeading } from "../components";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="app__specialMenu flex__center section__padding" id="menu">
        <div className="app__specialMenu-title">
          <SubHeading title="About Us" />
        </div>

        <div className="app__aboutus-content flex__center direction gap">
          <p className="p__opensans text-center">
            Welcome to Urban Taste where the vibrant flavors of the world come
            together in perfect harmony. Located at 23 Elm St, Austin, TX 78701,
            USA, we take pride in crafting dishes that ignite your senses and
            transport you to culinary destinations across the globe. Whether
            you're craving a sizzling burger, a bowl of hearty pasta, or a
            savory and aromatic ramen, each dish is prepared with utmost care
            and passion.
          </p>
          <p className="p__opensans text-center">
            At Urban Taste, we believe that food is more than just sustenance;
            it&apos;s an experience. Our talented chefs source the finest, freshest
            ingredients, blending traditional techniques with modern innovation
            to bring you a menu that&apos;s as diverse as it is delicious. Every bite
            is designed to evoke joy, warmth, and a feeling of comfort, making
            you feel right at home, even as you explore new culinary frontiers.
          </p>
        </div>
      </div>
      <FindUs />

      <Footer />
    </div>
  );
};

export default About;
