import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

// ---------------- Contexts ---------------- //
export const CartContext = createContext();
export const WishlistContext = createContext();
export const AuthContext = createContext();

// ---------------- Cart Provider ---------------- //
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

// ---------------- Wishlist Provider ---------------- //
export const WishlistProvider = ({ children }) => {
  const [wCart, setWCart] = useState([]);

  const addToWhishList = (item) => {
    setWCart((prevWCart) => [...prevWCart, item]);
  };

  return (
    <WishlistContext.Provider value={{ wCart, setWCart, addToWhishList }}>
      {children}
    </WishlistContext.Provider>
  );
};

// ---------------- Auth Provider ---------------- //
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means not logged in

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// ---------------- Root Layout ---------------- //
export default function Root() {
  return (
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col justify-between">
            <NavBar />
            <main className="flex-grow">
              <Outlet />
            </main>
            <Footer />
          </div>
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  );
}
