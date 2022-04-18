import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/signup");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <div className="card w-50 mx-auto mt-5 p-5 shadow">
      <h1 className="fw-normal text-center text-primary">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fs-5" htmlFor="email">
            Email
          </label>
          <input
            className="form-control fs-5"
            ref={emailRef}
            type="email"
            name="email"
          />
        </div>
        <div className="mb-4">
          <label className="form-label fs-5" htmlFor="password">
            Password
          </label>
          <input
            ref={passwordRef}
            className="form-control fs-5"
            type="password"
            name="password"
          />
        </div>
        <input
          className="btn btn-primary w-100 btn-lg fs-4"
          type="submit"
          value="Login"
        />
      </form>
      {errorElement}
      <p>
        New to GYM ESSENTIALS?{" "}
        <Link
          to="/signup"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Please Sign Up
        </Link>{" "}
      </p>
      <p>
        Forget Password?{" "}
        <button
          className="btn btn-link text-primary pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </button>{" "}
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
