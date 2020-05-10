/* eslint-disable no-underscore-dangle */
import React from "react";
import { shallow, mount } from "enzyme";
import RatingsAndQuestions from "../client/components/RatingsAndQuestions";

describe("it should test the ratings and questions componenent", () => {
  it("should test props", () => {
    const wrapper = shallow(<RatingsAndQuestions numberOfRatings={23} numberOfAnsweredQuestions={4} />)
    console.log("_______", wrapper.debug());
    expect(wrapper.contains("23 ratings"));
    expect(wrapper.contains("4 answered questions"));
  })
})