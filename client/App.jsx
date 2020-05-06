import React from "react";
import ReactDom from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Landing from "./components/landing.jsx";
import ItemDetail from "./components/itemdetail.jsx";
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
  width: 30%;
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
// height: 200px;
// width: 200px;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      starCoordinates: null,
    };
  }

  componentDidMount() {
    // console.log("id ---->", this.props.match.params.id);
    // const { id } = this.props.match.params;
    const id = window.location.pathname.slice(1, -1);
    axios.get(`/getsingleproduct/${id}`).then((results) => {
      console.log("lookup ", starLookup[results.data.rating]);

      this.setState({
        product: results.data,
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
          <p>by {product.producer}</p>
          <h3>{product.title}</h3>
          <div>
            <StarImage
              aria-label={`rated ${this.state.product.rating} out of 5 stars`}
              coords={this.state.starCoordinates}
            />{" "}
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
                  answered questions : {product.numberOfAnsweredQuestions}
                </div>
              ) : (
                ""
              )}
            </UnderlineHover>
          </div>
          <hr />
          <p>info : {product.description}</p>

          <p>
            {product.amazonsChoice
              ? `az choice : ${product.amazonsChoice}`
              : ""}
          </p>
          <p>
            {" "}
            {product.primeDiscount ? "" : `discount : ${product.primeDiscount}`}
          </p>

          <p>
            was{" "}
            <span style={{ textDecoration: "line-through" }}>
              {" "}
              ${product.wasPrice}
            </span>
          </p>

          <p>
            {" "}
            Price :{" "}
            <span style={{ color: "red" }}>${product.currentPrice}</span>{" "}
          </p>
          <p style={{ color: product.inStock ? "green" : "red" }}>
            {product.inStock ? "In Stock." : "Out of Stock."}
          </p>
          <p>sold by : {product.soldBy}</p>
          <p>style : {product.style}</p>
          <p>{product.styleImage}</p>
          <ul>
            {product.descriptions.map((value, idx) => {
              return <li key={String(idx).padStart(3, "0")}>{value}</li>;
            })}
          </ul>
          <p>{product.extraInfo}</p>
          <p>{product.compareOptions}</p>
          <p>{product.technicalDetails}</p>
          <p>{product.Used}</p>
          <p>{product.freeShipping}</p>
          <a>Report incorrect product information.</a>
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
