import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>The Page You Were Looking For Couldn't Be Found</p>
      <Link to="/home" variant="primary" type="submit">
        Go to homepage
      </Link>
    </div>
  );
};

export default NotFound;
