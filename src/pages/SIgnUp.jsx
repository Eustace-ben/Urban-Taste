
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { auth } from "./firebase"; // Adjust the path as necessary
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify"; // Optional for notifications
import { auth } from "../utils/firbase";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/sign-in')
      toast.success("Sign Up Successful!"); // Optional success 

      
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("User already exist."); // Optional error message
    }
  };

  return (
    <div className="black_background">
      <form className="form_wrapper" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="logo-text">Urban Taste</h3>
        <div className="field-wrapper">
        {errors.fullName && <span className="error">{errors.fullName.message}</span>}
          <input
            type="text"
            placeholder="Full name"
            className="form_input"
            {...register("fullName", { required: "Full name is required" })}
          />
          
          {errors.email && <span className="error">{errors.email.message}</span>}
          <input
            type="email"
            className="form_input"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.password && <span className="error">{errors.password.message}</span>}
          <input
            type="password"
            className="form_input"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          
          <button id="signInBtn" type="submit">
            Sign Up
          </button>
          <div className="sign_in_footerContainer">
            <div className="sign_in_footer">
              <span>Already have an account?</span>
              <Link to="/sign-in" className="auth_links">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
