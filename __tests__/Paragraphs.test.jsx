import React from "react";
import { shallow } from "enzyme";
import Paragraphs from "../client/components/Paragraphs";

describe("it should test Descriptions component", () => {
  it("should test for the extra paragraphs", () => {
    const passProps = {
      extraInfo: "extra test",
      compareOptions: "compare test",
      technicalDetails: "technical test",
      Used: "used test",
      freeShipping: true
    }
    const wrapper = shallow(<Paragraphs {...passProps} />);
    expect(wrapper.find("p").length).toBe(5);
  })
})

