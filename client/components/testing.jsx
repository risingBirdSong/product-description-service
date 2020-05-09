/* eslint-disable max-classes-per-file */
import React from "react";
import axios from "axios";

const TestComponent = () => {
  return (
    <div className="testA findMe">
      <h1 className="testB findMe">hello</h1>
      <p className="testC findMe">hi</p>
    </div>
  );
};

const TestComponentA = (props) => {
  return (
    <div>
      <h1>{props.headline}</h1>
      <p>{props.paragraph}</p>
    </div>
  );
};

class ButtonTest extends React.Component {
  constructor(props) {
    super(props);
    // this.sayHello = this.sayHello.bind(this);
  }

  // how do i test the instance method?
  // sayHello() {
  //   console.log("hello there _-----__!");
  //   return "hello";
  // }

  render() {
    return <button onClick={this.props.sayHello}>Click me!</button>;
  }
}

class IncrementTest extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.increment} className="incrementcount">
          increment
        </button>
        <p className="counter">current count {this.state.count}</p>
      </div>
    );
  }
}

const asyncTest = () => {
  return axios.get("https://reqres.in/api/users/2").then((response) => {
    return response.data;
  });
};

class GetTest extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    axios.get("https://reqres.in/api/users/2").then((response) => {
      this.setState({ data: response.data });
    });
  }

  render() {
    return <div>hi</div>;
  }
}

export {
  TestComponent,
  TestComponentA,
  ButtonTest,
  IncrementTest,
  GetTest,
  asyncTest,
};
