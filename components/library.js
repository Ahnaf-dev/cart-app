import React from "react";
import Books from "../data/data";
import DisplayBook from "./displaybook";
function Library() {
  return (
    <section className="library">
      <div className="container">
        {Books.map((book, idx) => {
          return <DisplayBook key={idx} {...book} />;
        })}
      </div>
    </section>
  );
}

export default Library;
