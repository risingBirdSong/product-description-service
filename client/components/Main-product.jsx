import React from "react";

const MainProduct = (props) => {
  console.log("props", props);
  return (
    <div>
      <p>
        by &nbsp;
        {props.producer}
      </p>
      <h3 className="pCondense">{props.title}</h3>
    </div>
  );
};

export default MainProduct;
