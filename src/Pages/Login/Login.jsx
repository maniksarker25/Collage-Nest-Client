import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login/login.png"
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { authContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleSignIn,setLoading ,resetPassword} = useContext(authContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const emailRef = useRef();
  // handle login
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError('');
    setSuccess('');
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser)
        setSuccess("User Logged in Successfully");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setLoading(false)
      });
  };
  // google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setLoading(false)
      });
  };


  // handle reset password
  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      setError("Provide email for reset password");
      return
    }
    resetPassword(email)
      .then(() => {})
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
      Swal.fire('Check you email for reset pass')
  };

  return (
    <div className="hero mt-4 lg:mt-16">
      <div className="hero-content flex-col lg:flex-row gap-24">
        <div className="text-center shadow-2xl lg:w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl lg:w-1/2 bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center text-primary font-bold">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  ref={emailRef}
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                <p onClick={handleResetPassword}>
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </p>
                </label>
              </div>
              {error && <p className="text-red-600">{error}</p>}
              {success && <p className="text-green-600">{success}</p>}
              <div className="form-control mt-6">
                <input className="primary-btn" type="submit" value="Login" />
              </div>
            </form>
          </div>
          <p className="text-center -mt-4">Or Sign In With</p>
          <div className="text-center my-4">
            <button className="mr-2 bg-stone-200 p-2 rounded-full text-blue-500 text-xl">
              <FaFacebook />
            </button>
            <button
              onClick={handleGoogleSignIn}
              className="mr-2 bg-stone-200 text-[#ea4335] p-2 rounded-full text-xl "
            >
              <FaGoogle />
            </button>
          </div>
          <p className="text-center mb-4">
            New to DreamRideToy?
            <Link to="/signUp" className="text-primary font-bold">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
