/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import ReactDom from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Landing from "./components/landing.jsx";
import ItemDetail from "./components/itemdetail.jsx";

const imgOptions = ["animals", "arch", "nature", "people"];
// import { MyH2 } from "./styled.jsx";
const MyH2 = styled.h2`
  color: red;
`;

const UnderlineHover = styled.a`
  color: blue;
  &:hover {
    text-decoration: underline;
  }
`;

const Wrapper = styled.div`
  width: 20%;
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

// box-sizing: border-box;
const StarImage = styled.div`
  background-image: url(https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIIcon-sprite_2x-59b95eac1db4a9d78e1e0c0b657cf66277a106ae._V2_.png);
  background-position-x: ${(props) => props.coords}px;
  background-position-y: -368px;
  background-repeat-x: ;
  background-repeat-y: ;
  background-size: 400px 900px;
  color: rgb(0, 102, 192);
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember", Arial, sans-serif;
  font-size: 13px;
  font-style: italic;
  height: 18px;
  line-height: 19px;
  position: relative;
  text-size-adjust: 100%;
  vertical-align: text-top;
  width: 80px;
`;

// border-bottom-color: rgb(35, 47, 62);
// border-left-color: rgb(35, 47, 62);
// border-right-color: rgb(35, 47, 62);
// border-top-color: rgb(35, 47, 62);
const Azchoice = styled.div`
  background-color: rgb(35, 47, 62);
  box-sizing: border-box;
  color: rgb(17, 17, 17);
  display: flex;
  float: none;
  font-family: "Amazon Ember", Arial, sans-serif;
  font-size: 12px;
  height: 15px;
  line-height: 10px;
  text-size-adjust: 100%;
  justify-content: center;
  align-items: center;
  width: 80px;
  overflow: hidden;
`;

// border-right-color: rgb(35, 47, 62);
const Triangle = styled.div`
  border-bottom-color: rgb(35, 47, 62);
  border-left-color: rgb(35, 47, 62);
  border-top-color: rgb(35, 47, 62);
  color: rgb(35, 47, 62);
  width: 0;
  height: 0;
  border-top: 35px solid transparent;
  border-bottom: 35px solid transparent;
  align-self: flex-end;
  border-left: 22px solid;
  background-color: white;
`;

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

  componentDidMount() {
    // console.log("id ---->", this.props.match.params.id);
    // const { id } = this.props.match.params;
    const id = window.location.pathname.slice(1, -1);
    axios.get(`/getsingleproduct/${id}`).then((results) => {
      console.log("lookup ", starLookup[results.data.rating]);
      console.log("style", results.data.styles);
      this.setState({
        product: results.data,
        style: results.data.styles[0],
        starCoordinates: starLookup[results.data.rating],
      });
    });
  }

  render() {
    const { product } = this.state;

    let display;
    if (product) {
      console.log("star coordinates", this.state.starCoordinates);
      display = (
        <Wrapper>
          {/* {this.star} */}

          <ReviewImage />
          <p>
            by
            {' '}
            {product.producer}
          </p>
          <h3 className="pCondense">{product.title}</h3>
          <div className="pCondense">
            <StarImage
              aria-label={`rated ${this.state.product.rating} out of 5 stars`}
              coords={this.state.starCoordinates}
            />
            {" "}
            &nbsp; | &nbsp;
            <UnderlineHover>
              {product.numberOfRatings
                ? `${product.numberOfRatings} ratings`
                : ""}
            </UnderlineHover>
            <UnderlineHover>
              {product.numberOfAnsweredQuestions ? (
                <div>
                  <span style={{ color: "black" }}> | </span>
                  {product.numberOfAnsweredQuestions}
                  {' '}
                  answered questions
                </div>
              ) : (
                ""
              )}
            </UnderlineHover>
            <div style={{ marginTop: "4px" }}>
              {product.amazonsChoice ? (
                <Azchoice>
                  <p
                    style={{
                      color: "white",
                      marginLeft: "16px",
                      fontSize: "9px",
                    }}
                  >
                    Amazon's
                    {" "}
                  </p>
                  {" "}
                  &nbsp;
                  <p style={{ color: "orange", fontSize: "9px" }}> Choice</p>
                  <Triangle />
                </Azchoice>
              ) : (
                ""
              )}
            </div>
          </div>
          <hr />

          <p className="pCondense">{product.description}</p>

          <p className="pCondense">
            {" "}
            {product.primeDiscount ? "" : `discount : ${product.primeDiscount}`}
          </p>

          <p className="pCondense">
            was
            {" "}
            <span style={{ textDecoration: "line-through" }}>
              {" "}
              $
              {product.wasPrice}
            </span>
          </p>

          <p className="pCondense">
            {" "}
            Price :
            {" "}
            <span style={{ color: "red" }}>
              $
              {product.currentPrice}
            </span>
            {" "}
          </p>
          <p
            className="pCondense"
            style={{ color: product.inStock ? "green" : "red" }}
          >
            {product.inStock ? "In Stock." : "Out of Stock."}
          </p>
          <p className="pCondense">
            sold by :
            {' '}
            {product.soldBy}
          </p>

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
            {console.log("styles_____", product.styles)}
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

ReactDom.render(<App />, document.getElementById("root"));
