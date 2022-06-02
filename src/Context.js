import React, { createContext, useState } from "react";
import faker from "faker";
faker.seed(100);
const ProductsArray = [...Array(27)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.random.image(),
}));
export const Carts = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products] = useState(ProductsArray);
  return (
    <Carts.Provider
      value={{
        cart,
        setCart,
        products
      }}
    >
      {children}
    </Carts.Provider>
  );
};

export default Context;
