import React from "react";
import { FaRegStar } from "react-icons/fa";
import { useGlobalContext } from "../data/context";

function DisplayBook({ id, title, price, rating, img, amount }) {
  const { addToCart } = useGlobalContext();
  let starCount = [1, 2, 3, 4, 5];
  return (
    <div className="display-book">
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
        <span>{price}</span>
        <button
          onClick={() =>
            addToCart({
              id,
              title,
              price,
              rating,
              img,
              amount,
            })
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default DisplayBook;
