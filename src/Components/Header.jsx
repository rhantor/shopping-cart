import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Carts } from "../Context";

const Header = () => {
  const {cart} = useContext(Carts)
  return (
    <nav className="navbar justify-content-around">
      <div className="logo">
        <h3>Logo</h3>
      </div>
      <ul className="navbar nav">
        <li className="nav-item">
          <Link className="nav-link" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/shop'>Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart {cart.length > 0 ? `(${cart.length})` :null}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
