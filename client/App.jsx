/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import ReactDom from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import MainProduct from "./components/Main-product";
import StarImageComp from "./components/Star-image";
import UnderlineHover from "./common";
import RatingsAndQuestions from "./components/RatingsAndQuestions";
import AzChoiceComp from "./components/AZChoice";
import BasicInfo from "./components/BasicInfo";

const imgOptions = ["animals", "arch", "nature", "people"];
// import { MyH2 } from "./styled.jsx";
const MyH2 = styled.h2`
  color: red;
`;



console.log("testing to make sure i cant push direct to master");

const Wrapper = styled.div`
  width: 33%;
`;

const ReviewImage = styled.div`
  width: 10px;
  height: 10px;
`;

const starLookup = {
  0.5: -240,
  1: -69,
  1.5: -222,
  2: -53,
  2.5: -205,
  3: -37,
  3.5: -590,
  4: -21,
  4.5: -175,
  5: -5,
};

// margin-left: 15px;
// height: 200px;
// width: 200px;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      starCoordinates: null,
      style: null,
      selected: null,
    };
  }

  async componentDidMount() {
    const id = window.location.pathname.slice(1, -1);
    const get = (await axios.get(`/getsingleproduct/${id || "001"}`)).data;
    console.log("get", get);

    this.setState({
      product: get,
      style: get.styles[0],
      starCoordinates: starLookup[get.rating],
    });
  }

  render() {
    const { product } = this.state;

    let display;
    if (product) {
      display = (
        <Wrapper>
          <MainProduct producer={product.producer} title={product.title} />
          <div className="pCondense">
            <StarImageComp
              rating={product.rating}
              coords={this.state.starCoordinates}
            />
            &nbsp; | &nbsp;
            <RatingsAndQuestions numberOfRatings={product.numberOfRatings} numberOfAnsweredQuestions={product.numberOfAnsweredQuestions} />
            <AzChoiceComp amazonsChoice={product.amazonsChoice} />
          </div>
          <hr />
          {/* ignore this rule because it seems sometimes useful to spread props but i did read about it and if this componenent was more precise i woudlnt spread here. */}
          <BasicInfo {...product} />
        
          {this.state.style ? (
            <p style={{ color: "grey" }}>
              style :
              {' '}
              <span style={{ color: "black" }}>{this.state.style}</span>
              {" "}
            </p>
          ) : (
              ""
            )}
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
            {product.styles.map((style, idx) => (
              <div
                onClick={() => {
                  this.setState({ selected: idx, style });
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: `${
                    this.state.selected === idx
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
                    {product.currentPrice}
                  </p>
                  <p style={{ marginTop: "-12px", fontSize: "10px" }}>prime</p>
                </div>
              </div>
            ))}
          </div>
          <ul style={{ marginTop: "-5px" }}>
            {product.descriptions.map((value, idx) => {
              return <li key={String(idx).padStart(3, "0")}>{value}</li>;
            })}
          </ul>
          <p>{product.extraInfo}</p>
          <p>{product.compareOptions}</p>
          <p>{product.technicalDetails}</p>
          <p>{product.Used}</p>
          <p>{product.freeShipping}</p>
          <UnderlineHover>Report incorrect product information.</UnderlineHover>
        </Wrapper>
      );
    } else {
      display = "todo";
    }
    return (
      <div>
        <div>{display}</div>
      </div>
    );
  }
}

export default App;
