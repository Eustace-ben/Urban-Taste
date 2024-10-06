
// import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay} from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
   
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">23 Elm St, Austin, TX 78701 </p>
        <p className="p__opensans">+1 310-456-7890</p>
        <p className="p__opensans">+1 415-678-9012</p>
      </div>

      <div className="app__footer-links_logo">
        <h3 className="logo-text gap">Urban Taste</h3>
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">08:45 am - 05:45 pm</p>

      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Urban Taste. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
