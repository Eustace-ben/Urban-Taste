import { BiCartAdd } from "react-icons/bi";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import { Link, useNavigate } from "react-router-dom";
import { TbCurrencyNaira } from "react-icons/tb";
import { useEffect } from "react";
import { toast } from "react-toastify";

const MakeOrders = () => {
  const publicKey = "FLWPUBK_TEST-9fa9db9e887d4c04b699313f6eef21f4-X"; // Replace with your Flutterwave public key
  const email = JSON.stringify(localStorage.getItem("email")); // Replace with the customer's email

  useEffect(() => {
    // Load Flutterwave script if it's not already loaded
    if (!window.FlutterwaveCheckout) {
      const script = document.createElement("script");
      script.src = "https://checkout.flutterwave.com/v3.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  const navigate = useNavigate();
  const handlePaymentSuccess = (transactionId) => {
    toast("Payment successful, thank you for patronizing us.");
    console.log("Payment successful. Transaction ID:", transactionId);
  };

  const handlePaymentClose = () => {
    toast.warning("Payment closed");
  };

  const handleAddToCartClick = (item) => {

    if (JSON.parse(email) == null) {
      
      navigate("/sign-in");
      toast.warn("Please log in to make a purchase.");
      return;
    } else {
      if (window.FlutterwaveCheckout) {
        window.FlutterwaveCheckout({
          public_key: publicKey,
          tx_ref: `tx-${Date.now()}`,
          amount: item.amount,
          currency: "NGN",
          payment_options: "card, mobilemoney, ussd",
          customer: {
            email: JSON.parse(email),
          },
          customizations: {
            title: "Tango Taste",
            description: `Payment for ${item.name}`,
            logo: "Tango Taste",
          },
          // is_test: true,
          callback: (response) => {
            handlePaymentSuccess(response.transaction_id);
          },
          onclose: handlePaymentClose,
        });
      } else {
        console.error("Flutterwave SDK not loaded");
      }
    }
  };
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Our top selling meals" />
        <h1 className="headtext__cormorant">Check Our Foods</h1>
      </div>

      <div className="gridWrapper">
        {[
          {
            id: 1,
            imgUrl: images.GrilledFish,
            title: "Grilled Fish",
            amount: 1500,
          },
          { id: 2, imgUrl: images.Afang, title: "Afang Soup", amount: 7000 },
          {
            id: 3,
            imgUrl: images.EgusiSoup,
            title: "Egusi Soup with fufu",
            amount: 5500,
          },
        ].map((item, index) => (
          <div key={index} className="size_images_container">
            <img
              className="size_images"
              src={item.imgUrl}
              alt={`An Image of ${item.title}`}
            />

            <div className="inside_gridContent">
              <div className="inside_gridContent_wrapper">
                <h3 className="gridContent_heading">{item.title}</h3>
                <div className="gridContent_amount">
                  <TbCurrencyNaira className="gridContent_heading" />
                  <span className="">{item.amount.toLocaleString()}</span>
                </div>
              </div>
              <div
                onClick={() => handleAddToCartClick(item)}
                className="addCartDiv"
              >
                <BiCartAdd className="icon" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 18 }}>
        <Link className="custom__button" to="/foods">
          See More
        </Link>
      </div>
    </div>
  );
};

export default MakeOrders;
