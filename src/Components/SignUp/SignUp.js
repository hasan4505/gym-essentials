import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import "./SignUp.css";
import auth from "../../firebase/firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../Loading/Loading";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (user) {
    console.log("user", user);
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
  };

  return (
    <div className="signUp-form card w-50 mx-auto mt-5 p-5 shadow">
      <h2 className="fw-normal text-center text-primary">Please Sign Up</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <input type="text" name="name" id="" placeholder="Your Name" />

          <input
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="confirmPassword"
            id=""
            placeholder="Confirm Password"
            required
          />
        </div>
        <input
          className="btn btn-primary w-100 btn-lg fs-6"
          type="submit"
          value="Sign Up"
        />
      </form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>{" "}
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignUp;
