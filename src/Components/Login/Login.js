import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import Loading from "../Loading/Loading";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Login = () => {
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!email) {
      setEmailError("Please Put a Email");
    }
    if (!password) {
      setPasswordError("Please Put a password");
    }
    if (!email || !password) {
      return;
    }

    signInWithEmailAndPassword(email, password);
  };

  const location = useLocation();

  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (loading) {
    <Loading />;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="card w-50 mx-auto mt-5 p-5 shadow">
      <h1 className="fw-normal text-center text-primary">Login</h1>
      <form onSubmit={handleSignIn}>
        <div className="mb-3">
          <label className="form-label fs-5" htmlFor="email">
            Email
          </label>
          <input className="form-control fs-5" type="email" name="email" />
          {emailError && (
            <p className="text-danger mt-2">
              <AiOutlineExclamationCircle className="mb-1" /> {emailError}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="form-label fs-5" htmlFor="password">
            Password
          </label>
          <input
            className="form-control fs-5"
            type="password"
            name="password"
          />
          {passwordError && (
            <p className="text-danger mt-2">
              <AiOutlineExclamationCircle className="mb-1" /> {passwordError}
            </p>
          )}
        </div>
        <input
          className="btn btn-primary w-100 btn-lg fs-4"
          type="submit"
          value="Login"
        />
      </form>
      {error && <p className="text-danger mb-0 mt-3">{error.message}</p>}
      <p className="mt-2 fs-5 fw-light text-center mb-3">
        New to Hotel Booms? <Link to="/signup">Create New Account</Link>
      </p>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div
          className="bg-primary"
          style={{ height: "1px", width: "150px" }}
        ></div>
        <div className="text-primary mx-2 mb-1">or</div>
        <div
          className="bg-primary"
          style={{ height: "1px", width: "150px" }}
        ></div>
      </div>
      <button className="btn btn-outline-primary btn-lg w-100 fs-4 mb-4 d-flex align-items-center justify-content-center">
        <FcGoogle />{" "}
        <p style={{ width: "95%" }} className="mb-1">
          Continue with Google
        </p>
      </button>
      <button className="btn btn-outline-primary btn-lg w-100 fs-4 d-flex align-items-center justify-content-center">
        <FaTwitter />{" "}
        <p style={{ width: "95%" }} className="mb-1">
          Continue with Twitter
        </p>
      </button>
    </div>
  );
};

export default Login;
