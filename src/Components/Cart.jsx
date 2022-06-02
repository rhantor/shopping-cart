import React, { useContext, useState , useEffect } from "react";
import { Carts } from "../Context";
import SingleProduct from "./SingleProduct";

const Cart = () => {
  const [totalPrice , setTotalPrice] = useState(0)
  const { cart } = useContext(Carts);

  useEffect(()=>{
    setTotalPrice( cart.reduce((acc , current)=> acc + Number(current.price)  , 0))
  },[cart])
  return (
    <div className="cart">
      <h1>Cart</h1>
      <h3>Total Price {totalPrice}$</h3>
      <div className="container d-flex flex-wrap justify-content-around">
        {cart.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
