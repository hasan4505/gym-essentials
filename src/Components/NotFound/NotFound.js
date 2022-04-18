import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oops!</h1>
      <h3>404 - Page Not Found</h3>
      <p>
        The page you're looking for might have been removed, had it's name
        changed or is temporarily unavailable.
      </p>
      <div>
        <Link to="/home" className="not-found-btn">
          Go to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
