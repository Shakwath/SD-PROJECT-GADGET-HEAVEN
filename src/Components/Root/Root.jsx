import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


export const CartContext = createContext();
export const WishlistContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const WishlistProvider = ({ children }) => {
  const [wCart, setWCart] = useState([]);

  const addToWhishList = (item) => {
    setWCart((prevCart) => [...prevCart, item]);
  };

  return (
    <WishlistContext.Provider value={{ wCart, setWCart, addToWhishList }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default function Root() {
  return (
    <WishlistProvider>
      <CartProvider>
        <div>
          <NavBar />
          <Outlet />
          <Footer />
        </div>
      </CartProvider>
    </WishlistProvider>
  );
}