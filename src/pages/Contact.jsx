import { Footer } from "../container";
import { Navbar, SubHeading } from "../components";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="app__specialMenu flex__center section__padding" id="menu">
        <div className="app__specialMenu-title">
          <SubHeading title="Drop A Message" />
        </div>

        <div className="app__aboutus-content flex__center gap_Contact">
        
          <div className="field-wrapper">
            <input
              type="text"
              className="form_input"
              name=""
              placeholder="Enter Full Name"
              id=""
            />
            <input
              type="email"
              className="form_input"
              placeholder="Enter Email"
            />
            <textarea
              name=""
              className="form_input"
              placeholder="Enter Message"
              id="text-area"
            ></textarea>
            <button id="signInBtn" type="button">
              Drop a message
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
