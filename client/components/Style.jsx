import React from "react";

const StyleComp = (props) => {
  console.log("style props", props);
  const { style } = props;
  return (
    style ? (
      <p style={{ color: "grey" }}>
        style :
        {' '}
        <span style={{ color: "black" }}>{style}</span>
        {" "}
      </p>
    ) : (
        ""
      )
  )
}


export default StyleComp;