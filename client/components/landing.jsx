import React from "react";
import ReactDom from "react-dom";
import axios from "axios";
// import ItemDetail from "./itemdetail";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    console.log("window --->", window.location);
    axios.get(`/getsingleproduct/1`).then((results) => {
      console.log("data", results);
      this.setState({ product: results.data });
    });
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        <p>2</p>
        <p>3</p>
      </div>
    );
  }
}

export default Landing;
