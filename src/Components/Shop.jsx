import React, { Fragment, useContext } from "react";
import SingleProduct from "./SingleProduct";
import { Carts } from "../Context";

const Shop = () => {
  const { products } = useContext(Carts);

  return (
    <Fragment>
      <h4 className="text-center m-3">Product</h4>
      <div className="container d-flex flex-wrap justify-content-around">
        {products.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </Fragment>
  );
};

export default Shop;
