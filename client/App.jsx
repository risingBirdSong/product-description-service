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
import StyleComp from "./components/Style";
import StyleImage from "./components/StyleImage";
import Descriptions from "./components/Descriptions";
import Paragraphs from "./components/Paragraphs";
import Report from "./components/Report";
import WhiteSpace from "./components/WhiteSpace";

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
    this.styleHandler = this.styleHandler.bind(this);
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

  styleHandler(idx, style) {
    this.setState({ selected: idx, style });
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
            <WhiteSpace />
            |
            <WhiteSpace />
            <RatingsAndQuestions numberOfRatings={product.numberOfRatings} numberOfAnsweredQuestions={product.numberOfAnsweredQuestions} />
            <AzChoiceComp amazonsChoice={product.amazonsChoice} />
          </div>
          <hr />
          {/* ignore this rule because it seems sometimes useful to spread props but i did read about it and if this componenent was more precise i woudlnt spread here. */}
          <BasicInfo {...product} />
          <StyleComp style={this.state.style} />
          <StyleImage selected={this.state.selected} styles={product.styles} currentPrice={product.currentPrice} handler={this.styleHandler} />
          <Descriptions descriptions={product.descriptions} />
          <Paragraphs {...product} />
          <Report />
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
