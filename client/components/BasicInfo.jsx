import React from "react";

const BasicInfo = (props) => {
  return (
    <>
      <p className="pCondense description">{props.description}</p>

      <p className="pCondense discount">
        {" "}
        {props.primeDiscount ? `discount : $${props.primeDiscount}` : ""}
      </p>

      <p className="pCondense wasPrice">
        was
        {" "}
        <span style={{ textDecoration: "line-through" }}>
          {" "}
          $
          {props.wasPrice}
        </span>
      </p>

      <p className="pCondense currentPrice">
        {" "}
        Price :
        {" "}
        <span style={{ color: "red" }}>
          $
          {props.currentPrice}
        </span>
        {" "}
      </p>
      <p
        className="pCondense inStock"
        style={{ color: props.inStock ? "green" : "red" }}
      >
        {props.inStock ? "In Stock." : "Out of Stock."}
      </p>
      <p className="pCondense soldBy">
        sold by :
        {' '}
        {props.soldBy}
      </p>
    </>
  )
}

export default BasicInfo;