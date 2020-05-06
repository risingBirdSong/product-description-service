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

// const a_icon_star = styled.
// background-position-x:-5px;
// background-position-y:-368px;

// background-position-x:-21px;
// background-position-y:-368px;

const fourStars = {
  x: -21,
  y: -368,
};

const fourAndHalfCoordinats = {
  x: -175,
  y: -368,
};

const fiveAndCoordinates = {
  x: -5,
  y: -368,
};

const Test = styled.img`
  background-image: url(https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIIcon-sprite_2x-59b95eac1db4a9d78e1e0c0b657cf66277a106ae._V2_.png);
  background-position-x: ${fourStars.x}px;
  background-position-y: ${fourStars.y}px;
  background-repeat-x: ;
  background-repeat-y: ;
  background-size: 400px 900px;
  box-sizing: border-box;
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
    };
  }

  componentDidMount() {
    // console.log("id ---->", this.props.match.params.id);
    // const { id } = this.props.match.params;
    const id = window.location.pathname.slice(1, -1);
    axios.get(`/getsingleproduct/${id}`).then((results) => {
      console.log("data", results);
      this.setState({ product: results.data });
    });
  }

  render() {
    const { product } = this.state;

    let display;
    if (product) {
      console.log("rating", product.rating);
      display = (
        <Wrapper>
          <Test />
          <ReviewImage />
          <p>by {product.producer}</p>
          <h3>{product.title}</h3>
          <div>
            <a>rating : {product.rating}</a> |
            <UnderlineHover>
              {product.numberOfRatings
                ? `${product.numberOfRatings} ratings`
                : ""}
            </UnderlineHover>
          </div>
          <hr />
          <p>info : {product.description}</p>
          <a style={{ textDecoration: "underline", color: "blue" }}>
            {product.numberOfAnsweredQuestions
              ? `answered questions :  ${product.numberOfAnsweredQuestions}`
              : ""}
          </a>
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
