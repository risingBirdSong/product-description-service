import React from "react";

const Descriptions = (props) => {
  return (
    <ul style={{ marginTop: "-5px" }}>
      {props.descriptions.map((value, idx) => {
        return <li key={String(idx).padStart(3, "0")}>{value}</li>;
      })}
    </ul>
  )
}

export default Descriptions;  