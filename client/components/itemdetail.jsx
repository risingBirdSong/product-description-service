import React from "react";
import ReactDom from "react-dom";
import axios from "axios";

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/getsingleproduct/${id}`).then((results) => {
      this.setState({ product: results.data });
    });
  }

  // componentDidUpdate() {
  //   console.log("updated!!");
  //   const { id } = this.props.match.params;
  //   axios.get(`/getsingleproduct/${id}`).then((results) => {
  //     console.log("data", results);
  //     this.setState({ product: results.data });
  //   });
  // }

  render() {
    const { product } = this.state;
    let display;
    if (product) {
      display = (
        <div>
          <h2>{product.producer}</h2>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.numberOfAnsweredQuestions}</p>
          <p>{product.amazonsChoice === 0 ? product.amazonsChoice : ""}</p>
          <p>{product.primeDiscount}</p>
          <p>{product.rating}</p>
          <p>{product.numberOfRatings}</p>
          <p>{product.wasPrice}</p>
          <p>{product.currentPrice}</p>
          <p>{product.inStock}</p>
          <p>{product.soldBy}</p>
          <p>{product.style}</p>
          <p>{product.styleImage}</p>
          <ul>
            {product.descriptions.map((value) => {
              return <li>{value}</li>;
            })}
          </ul>
          <p>{product.extraInfo}</p>
          <p>{product.compareOptions}</p>
          <p>{product.technicalDetails}</p>
          <p>{product.Used}</p>
          <p>{product.freeShipping}</p>
        </div>
      );
    } else {
      display = "todo";
    }
    return (
      <div>
        <button type="button"> back home!</button>
        <h1>testing</h1>
        {/* <div>{display}</div> */}
      </div>
    );
  }
}

export default ItemDetail;
