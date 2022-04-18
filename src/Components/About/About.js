import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="m-5 p-5 bg-info text-center">
      <div>
        <h4>Hello</h4>
        <p>
          This is
          <span>
            <h1>Hassan</h1>
          </span>
        </p>
        <h1>My Goal: </h1>
        <p>
          I am highly ambitious. This course give a better way to coding. And I
          love to coding. In the next one or two years I will try for a job in
          google...
        </p>
      </div>

      <Link to="/home" variant="primary" type="submit">
        Go to homepage
      </Link>
    </div>
  );
};

export default About;
