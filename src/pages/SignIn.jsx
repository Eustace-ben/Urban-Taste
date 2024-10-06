
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth } from "../utils/firbase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify"; // Optional for notifications

const SignIn = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("email", email)
      toast.success("Sign In Successful!");
      navigate("/") // Optional success message
    } catch (error) {
      console.error("Error signing in:", error);
      toast.error("User does not exist, please create an account."); // Optional error message
    }
  };

  return (
    <div className="black_background">
      <form className="form_wrapper" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="logo-text">Urban Taste</h3>
        <div className="field-wrapper">
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
            Sign In
          </button>
          <div className="sign_in_footerContainer">
            <div className="sign_in_footer">
              <span>Dont have an account?</span>
              <Link to="/sign-up" className="auth_links">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
