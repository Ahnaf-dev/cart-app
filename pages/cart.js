import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useGlobalContext } from "../data/context";
import CartBook from "../components/cartbook";

export default function Cart() {
  const { cart, amount, clearCart, total } = useGlobalContext();
  const filtered = cart.filter(
    (item, index, arr) => index === arr.findIndex((i) => i.id === item.id)
  );

  return (
    <section className="cart">
      <div className="container">
        <h2>Shopping Cart</h2>
        <p className="empty">{filtered.length <= 0 ? "cart is empty" : ""}</p>
        <div className="cart-container">
          {filtered &&
            filtered.map((book, index) => (
              <CartBook key={index} props={book} />
            ))}
        </div>
        <div className="cart-total">
          <button onClick={() => clearCart()}>Clear Cart</button>
          <p>Total: ${+total.toFixed(2)}</p>
        </div>
      </div>
    </section>
  );
}
