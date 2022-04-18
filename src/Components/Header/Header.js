import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Header.css";
import auth from "../../firebase/firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <header>
      <Nav className="text-center mt-5">
        <Link to="home">Home</Link>
        <Link to="checkout">Checkout</Link>
        <Link to="about">About</Link>
        {user ? (
          <button onClick={() => signOut(auth)}>Sign Out</button>
        ) : (
          <Link to="login">Log In</Link>
        )}
      </Nav>
    </header>
  );
};

export default Header;
