/* eslint-disable no-underscore-dangle */
import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import axios from "axios";
import mockAdapter from "axios-mock-adapter";
import App from "../client/App";

const mock = new mockAdapter();

describe("it should run basic tests", () => {
  it("should start with a null state", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state("product")).toBeFalsy();
    expect(wrapper.state("starCoordinates")).toBeFalsy();
    expect(wrapper.state("product")).toBeFalsy();
  });
});

//   it("it should run componentDidMount and then verify state", async () => {
//     // expect.assertions(1);
//     const wrapper = mount(<App />);
//     wrapper
//       .instance()
//       ._getAsyncTest()
//       .then((data) => {
//         console.log("_-_-_-_-_-_-_-_-_-_");
//         console.log("data->", data);
//         console.log("data", data.debug());
//         expect(data).toExist();
//       }); // expect(results)
//   });
// });

describe("axios tests", () => {
  it("it should mock an an axios call", () => {
    mock.onGet("/users").reply(200, {
      users: [{ id: 1, name: "John Smith" }],
    });
    axios.get("/users").then(function (response) {
      expect(response.data.id).toExist();
    });
  });
  it("it should fail on bad data", () => {
    mock.onGet("/users").reply(200, {
      users: [{ id: 1, name: "John Smith" }],
    });
    axios.get("/users").then(function (response) {
      expect(response.data.whatever).not.toExist();
    });
  });
});

// describe("should work with set", () => {
//   it("should set the set", () => {
//     const data = {
//       title: "Incredible Plastic Chicken",
//       description: "Sleek rich gold Rubber",
//       numberOfAnsweredQuestions: 1,
//       amazonsChoice: true,
//       primeDiscount: "4",
//       rating: 4,
//       numberOfRatings: 10,
//       currentPrice: 331,
//       inStock: true,
//       soldBy: "Sipes LLC",
//       styles: ["dynamic", "leading-edge"],
//       descriptions: [
//         "intuitive gold Unbranded Granite content",
//         "clicks-and-mortar teal Awesome Fresh systems",
//         "B2B white Handmade Plastic platforms",
//         "back-end teal Sleek Plastic channels",
//         "bleeding-edge black Incredible Plastic content",
//         "strategic fuchsia Unbranded Metal e-services",
//         "ubiquitous green Handcrafted Granite action-items",
//         "granular orange Licensed Concrete deliverables",
//       ],
//       freeShipping: false,
//       _id: "5eb367a5106b4c597cce37c0",
//       producer: "Hilll Group",
//       urlFriendlyNumber: "002",
//       wasPrice: 16,
//       __v: 0,
//     };
//     const wrapper = mount(<App />);
//     wrapper.instance().setState({
//       product: data,
//       style: data.styles[0],
//       starCoordinates: 4,
//     });
//     // expect(wrapper.state("starCoordinates")).toBe(4);
//   });
// });
