import React from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "../data/context";

function Navbar() {
  const { cart } = useGlobalContext();

  return (
    <header className="nav-container">
      <div className="container">
        <Link href="/">
          <h1 className="logo">BookApp</h1>
        </Link>
        <div className="flex">
          <p> {cart.length > 0 ? "Click On Cart To Purchase" : ""}</p>
          <div className="cart-icon">
            <Link href="/cart">
              <a href="">
                <FaShoppingCart></FaShoppingCart>
              </a>
            </Link>
            <div className="item-count">
              {
                cart.filter(
                  (item, index, arr) =>
                    index === arr.findIndex((i) => i.id === item.id)
                ).length
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
