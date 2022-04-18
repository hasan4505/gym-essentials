import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="m-5 p-5 bg-info text-center">
      <div>
        <h2>I Am At Your Door Step</h2>
        <p>Wanna Know About Me?</p>
        <p>
          <small>Here Is My Contact No.: +880151547655444</small>
        </p>

        <p>You can mail us: </p>
      </div>
      <div className="form">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>What to say</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <Link to="/home" variant="primary" type="submit">
        Go to homepage
      </Link>
    </div>
  );
};

export default About;
