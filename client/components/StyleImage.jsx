/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";

const imgOptions = ["animals", "arch", "nature", "people"];


const StyleImage = (props) => {
  const { selected, styles, currentPrice, handler } = props;
  // selected came from state;
  // product.styles => styles;
  // product.currentPrice => currentPrice
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "auto",
        marginLeft: "3px",
        marginTop: "-10px",
        marginBottom: "5px",
      }}
    >
      {styles.map((style, idx) => (
        <div
          className={`clickableStyle${idx}`}
          className={selected === idx ? 'currentlySelected' : "notSelected"}
          key={`0${idx}`}
          onClick={() => handler(idx, style)}
          // this.setState({ selected: idx, style });
          style={{
            display: "flex",
            alignItems: "center",
            border: `${
              selected === idx
                ? "1px solid orange"
                : "1px solid grey"
              }`,
            margin: "4px",
            padding: "6px",
            paddingLeft: "15px",
            height: "30px",
          }}
        >
          <img
            // style={{ padding: "10px" }}
            src={`https://placeimg.com/20/20/${
              imgOptions[Math.floor(Math.random() * imgOptions.length)]
              }`}
            alt="images of the different product styles, note, they're fake"
          />
          <div style={{ marginLeft: "5px" }}>
            <p style={{ marginTop: "14px", fontSize: "10px" }}>
              $
              {currentPrice}
            </p>
            <p style={{ marginTop: "-12px", fontSize: "10px" }}>prime</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StyleImage;