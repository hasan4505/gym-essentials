import React from "react";
import { Link } from "react-router-dom";

const MyServices = ({ service }) => {
  const { img, description, name, price } = service;

  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <h3>$ {price}</h3>
          <Link to="/checkout" className="btn btn-primary">
            Book Classes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
