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
      console.log("stock", product.inStock);
      display = (
        <div>
          <p>by {product.producer}</p>
          <h3>{product.title}</h3>
          <p>rating : {product.rating}</p>
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
            {product.numberOfRatings
              ? `#ratings : ${product.numberOfRatings}`
              : ""}
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
        </div>
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
