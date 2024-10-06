import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
// import images from '../../constants/images';
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const email = JSON.stringify(localStorage.getItem("email"));
  const handleLogout = () => {
    localStorage.removeItem("email");
    window.location.reload();
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.gericht} alt="app__logo" /> */}
        <Link to="/" className=" links">
          <h3 className="logo-text">Urban Taste</h3>
        </Link>
      </div>
      <div className="app__navbar-login">
        <ul className="app__navbar-links">
          <li className="p__opensans">
            <Link to="/about" className=" links">
              About
            </Link>
          </li>

          <li className="p__opensans">
            <Link to="/foods" className=" links">
              Menu
            </Link>
          </li>

          <li className="p__opensans">
            <Link to="/contact" className=" links">
              Contact
            </Link>
          </li>
          {JSON.parse(email) != null ? (
            <li onClick={handleLogout} className="p__opensans">
              Log out
            </li>
          ) : (
            <li className="p__opensans">
              <Link to="/sign-in" className="p__opensans">
                Sign In
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <div className="app__navbar-logo mobile_header-logo">
              <Link to="/" className=" links">
                <h3 className="logo-text">Urban Taste</h3>
              </Link>
            </div>
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />

            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <Link to="/about" className=" links">
                  About
                </Link>
              </li>

              <li className="p__opensans">
                <Link to="/foods" className=" links">
                  Menu
                </Link>
              </li>

              <li className="p__opensans">
                <Link to="/contact" className=" links">
                  Contact
                </Link>
              </li>
              {JSON.parse(email) != null ? (
                <li  onClick={handleLogout} className="links">
                  Log out
                </li>
              ) : (
                <li className="p__opensans">
                  <Link to="/sign-in" className="links">
                    Sign In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
