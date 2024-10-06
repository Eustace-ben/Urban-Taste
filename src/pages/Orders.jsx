// import { BiCartAdd } from "react-icons/bi";
// import { Navbar, SubHeading } from "../components";
// import { Footer } from "../container";
// import { data } from "../constants";
// import { TbCurrencyNaira } from "react-icons/tb";

// const Orders = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="app__specialMenu flex__center section__padding" id="menu">
//         <div className="app__specialMenu-title">
//           <SubHeading title="Mind having a yummy meal today?" />
//           <h1 className="headtext__cormorant">Grab One Here</h1>
//         </div>

//         <div className="gridWrapper">
//           {data.gallery.map((item, index) => (
//             <div key={index} className="size_images_container">
//               <img
//                 className="size_images"
//                 src={item.imgUrl}
//                 alt={`An Image of ${item.title}`}
//               />

//               <div className="inside_gridContent">
//                 <div className="inside_gridContent_wrapper">
//                   <h3 className="gridContent_heading">{item.name}</h3>
//                   <div className="gridContent_amount">
//                     <TbCurrencyNaira className="gridContent_heading" />
//                     <span className="">{item.amount}</span>
//                   </div>
//                 </div>
//                 <div className="addCartDiv">
//                   <BiCartAdd className="icon" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Orders;

// import { useState } from "react";
// import { BiCartAdd } from "react-icons/bi";
// import { PaystackButton } from "react-paystack";
// import { Navbar, SubHeading } from "../components";
// import { Footer } from "../container";
// import { data } from "../constants";
// import { TbCurrencyNaira } from "react-icons/tb";

// const Orders = () => {
//   const [paymentDetails, setPaymentDetails] = useState(null);

//   // Replace with your own Paystack public key
//   const publicKey = "pk_test_3d69fe6b0d7f61a3711da4c5097bee3112dfb781";
//   const email = "customer@example.com"; // Replace with the customer's email

//   const handlePaymentSuccess = (reference) => {
//     console.log("Payment successful. Reference:", reference);
//     setPaymentDetails(null); // Clear payment details after success
//   };

//   const handlePaymentClose = () => {
//     console.log("Payment closed");
//     setPaymentDetails(null); // Clear payment details after closing
//   };

//   const handleAddToCartClick = (item) => {
//     console.log("Clicked")
//     setPaymentDetails({
//       productName: item.name,
//       amount: item.amount * 100, // Paystack expects the amount in kobo
//     });
//     console.log(paymentDetails)
//   };

//   const paystackComponentProps = paymentDetails
//     ? {
//         email,
//         amount: paymentDetails.amount,
//         metadata: {
//           productName: paymentDetails.productName,
//         },
//         publicKey,
//         text: `Pay for ${paymentDetails.productName}`,
//         onSuccess: handlePaymentSuccess,
//         onClose: handlePaymentClose,
//       }
//     : null;

//   return (
//     <div>
//       <Navbar />
//       <div className="app__specialMenu flex__center section__padding" id="menu">
//         <div className="app__specialMenu-title">
//           <SubHeading title="Mind having a yummy meal today?" />
//           <h1 className="headtext__cormorant">Grab One Here</h1>
//         </div>

//         <div className="gridWrapper">
//           {data.gallery.map((item, index) => (
//             <div key={index} className="size_images_container">
//               <img
//                 className="size_images"
//                 src={item.imgUrl}
//                 alt={`An Image of ${item.title}`}
//               />

//               <div className="inside_gridContent">
//                 <div className="inside_gridContent_wrapper">
//                   <h3 className="gridContent_heading">{item.name}</h3>
//                   <div className="gridContent_amount">
//                     <TbCurrencyNaira className="gridContent_heading" />
//                     <span>{item.amount}</span>
//                   </div>
//                 </div>
//                 <div
//                   className="addCartDiv"
//                   onClick={() => handleAddToCartClick(item)}
//                 >
//                   <BiCartAdd className="icon" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {paymentDetails && <PaystackButton {...paystackComponentProps} />}

//       <Footer />
//     </div>
//   );
// };

// export default Orders;

// import {  useEffect } from "react";
// import { BiCartAdd } from "react-icons/bi";
// import { Navbar, SubHeading } from "../components";
// import { Footer } from "../container";
// import { data } from "../constants";
// import { TbCurrencyNaira } from "react-icons/tb";

// const Orders = () => {
//   // Replace with your own Paystack public key
//   const publicKey = 'pk_test_ieu49ej839u984urenewuwe06eishra'
//  // const publicKey = "pk_test_3d69fe6b0d7f61a3711da4c5097bee3112dfb781";
//   const email = "customer@example.com"; // Replace with the customer's email
 
//   useEffect(() => {
//     // Load Paystack script if it's not already loaded
//     if (!window.PaystackPop) {
//       const script = document.createElement("script");
//       script.src = "https://js.paystack.co/v1/inline.js";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   const handlePaymentSuccess = (reference) => {
//     alert("Payment succesful, thank you for patronizing us.")
//     console.log("Payment successful. Reference:", reference);
//   };

//   const handlePaymentClose = () => {
//     console.log("Payment closed");
//   };

//   const handleAddToCartClick = (item) => {
//     if (window.PaystackPop) {
//       const paystack = window.PaystackPop.setup({
//         key: publicKey,
//         email: email,
//         amount: item.amount * 100, // Paystack expects the amount in kobo
//         currency: "NGN",
//         metadata: {
//           productName: item.name,
//         },
//         callback: (response) => {
//           handlePaymentSuccess(response.reference);
//         },
//         onClose: handlePaymentClose,
//       });

//       paystack.openIframe();
//     } else {
//       console.error("Paystack SDK not loaded");
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="app__specialMenu flex__center section__padding" id="menu">
//         <div className="app__specialMenu-title">
//           <SubHeading title="Mind having a yummy meal today?" />
//           <h1 className="headtext__cormorant">Grab One Here</h1>
//         </div>

//         <div className="gridWrapper">
//           {data.gallery.map((item, index) => (
//             <div key={index} className="size_images_container">
//               <img
//                 className="size_images"
//                 src={item.imgUrl}
//                 alt={`An Image of ${item.title}`}
//               />

//               <div className="inside_gridContent">
//                 <div className="inside_gridContent_wrapper">
//                   <h3 className="gridContent_heading">{item.name}</h3>
//                   <div className="gridContent_amount">
//                     <TbCurrencyNaira className="gridContent_heading" />
//                     <span className="">{(item.amount).toLocaleString()}</span>
//                   </div>
//                 </div>
//                 <div
//                   className="addCartDiv"
//                   onClick={() => handleAddToCartClick(item)}
//                 >
//                   <BiCartAdd className="icon" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Orders;


import { useEffect } from "react";
import { BiCartAdd } from "react-icons/bi";
import { Navbar, SubHeading } from "../components";
import { Footer } from "../container";
import { data } from "../constants";
import { TbCurrencyNaira } from "react-icons/tb";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";

const Orders = () => {

  const publicKey = "FLWPUBK_TEST-9fa9db9e887d4c04b699313f6eef21f4-X"; // Replace with your Flutterwave public key
  const email = JSON.stringify(localStorage.getItem("email"))  ; // Replace with the customer's email
  const navigate = useNavigate()
  useEffect(() => {
    // Load Flutterwave script if it's not already loaded
    if (!window.FlutterwaveCheckout) {
      const script = document.createElement("script");
      script.src = "https://checkout.flutterwave.com/v3.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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
            title: "Urban Taste",
            description: `Payment for ${item.name}`,
            logo: "Urban Taste",
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
    <div>
      <Navbar />
      <div className="app__specialMenu flex__center section__padding" id="menu">
        <div className="app__specialMenu-title">
          <SubHeading title="Mind having a yummy meal today?" />
          <h1 className="headtext__cormorant">Grab One Here</h1>
        </div>

        <div className="gridWrapper">
          {data.gallery.map((item, index) => (
            <div key={index} className="size_images_container">
              <img
                className="size_images"
                src={item.imgUrl}
                alt={`An Image of ${item.title}`}
              />

              <div className="inside_gridContent">
                <div className="inside_gridContent_wrapper">
                  <h3 className="gridContent_heading">{item.name}</h3>
                  <div className="gridContent_amount">
                    <TbCurrencyNaira className="gridContent_heading" />
                    <span className="">{item.amount.toLocaleString()}</span>
                  </div>
                </div>
                <div
                  className="addCartDiv"
                  onClick={() => handleAddToCartClick(item)}
                >
                  <BiCartAdd className="icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Orders;



