import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container d-flex flex-column mt-5 ">
      <h2 className="text-center m-3 mb-5 ">Shopping House</h2>
      <Link className="btn btn-primary" to="/shop">
        Let's get some product
      </Link>
    </div>
  );
};

export default Home;
