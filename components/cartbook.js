import React, { useEffect } from "react";
import {
  FaRegStar,
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";
import { useGlobalContext } from "../data/context";

function CartBook({ props }) {
  const { removeItem, increaseAmount, decreaseAmount, calcTotal } =
    useGlobalContext();
  const { amount, id, title, price, rating, img } = props;
  let starCount = [1, 2, 3, 4, 5];

  useEffect(() => {
    calcTotal();
  }, [amount]);
  return (
    <div className="display-book cart-book">
      <div className="display-book__image">
        <img src={img} alt={title} />
      </div>
      <div className="display-book__content">
        <div className="stars">
          {starCount.map((num) => {
            if (num <= Math.round(rating)) {
              return <FaRegStar className="filled" key={num} />;
            }
            return <FaRegStar key={num} />;
          })}
        </div>

        <h2>{title}</h2>
        <p onClick={() => removeItem(id)} className="remove">
          Remove Item
        </p>
        <span>
          {price} * {amount}
        </span>
        <div className="arrows">
          <div className="up" onClick={() => increaseAmount(id)}>
            <FaRegArrowAltCircleUp></FaRegArrowAltCircleUp>
          </div>
          <div className="down" onClick={() => decreaseAmount(id)}>
            <FaRegArrowAltCircleDown></FaRegArrowAltCircleDown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartBook;
