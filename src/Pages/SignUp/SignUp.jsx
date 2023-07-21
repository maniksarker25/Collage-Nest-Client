import { Link, useNavigate } from "react-router-dom";
import signUpImg from "../../assets/login/login.png";
import { updateProfile } from "firebase/auth";
import { authContext } from "../../Providers/AuthProvider";
import { useContext, useState } from "react";

const SignUp = () => {
  const { createUser, logOut, setLoading } = useContext(authContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    setSuccess("");
    if (password.length < 6) {
      setError("Password must have 6 character");
      return;
    }
    // create user
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        // update profile
        updateProfile(createdUser, {
          displayName: name,
          photoURL: photoUrl,
        });
        console.log(createdUser);
        setSuccess("User Create Successfully");
        logOut();
        navigate("/login");
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setLoading(false);
      });
  };
  return (
    <div className="hero mt-4 lg:mt-16">
      <div className="hero-content flex-col lg:flex-row gap-24">
        <div className="text-center lg:w-1/2">
          <img className="shadow-2xl" src={signUpImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl lg:w-1/2 bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center text-primary font-bold">
              Sign Up
            </h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  name="photoUrl"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {error && <p className="text-red-600">{error}</p>}
              {success && <p className="text-green-600">{success}</p>}
              <div className="form-control mt-3">
                <input className="primary-btn" type="submit" value="SignUp" />
              </div>
            </form>
          </div>
          <p className="text-center mb-4">
            Have an account?
            <Link to="/login" className="text-primary font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
