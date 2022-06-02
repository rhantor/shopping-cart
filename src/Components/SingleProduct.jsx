import React, { useContext, useState } from "react";
import { Carts } from "../Context";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

// Modal Style

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
};

const SingleProduct = ({ product }) => {
  const { cart, setCart } = useContext(Carts);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const addCart = () => {
    setCart([...cart, product]);
  };
  const removeCart = () => {
    setCart(cart.filter((cart) => cart.id !== product.id));
  };

  return (
    <div>
      <div>
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.name} onClick={handleOpen} />
          <div className="details d-flex justify-content-between  p-1">
            <span> {product.name.slice(0, 10)} </span>
            <span> {product.price} $ </span>
          </div>

          {cart.includes(product) ? (
            <button className="btn btn-success" onClick={removeCart}>
              Remove from cart <RemoveShoppingCartIcon className="carticon" />
            </button>
          ) : (
            <button className="btn btn-info" onClick={addCart}>
              Add to cart <AddShoppingCartIcon className="carticon" />
            </button>
          )}
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <img className="productImage" src={product.image} alt="" />
        </Box>
      </Modal>
    </div>
  );
};

export default SingleProduct;
