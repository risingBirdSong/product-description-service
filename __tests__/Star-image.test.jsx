import React from "react";
import { shallow } from "enzyme";
import StarImageComp from "../client/components/Star-image";

describe("it should test the star component", () => {
  it("should test Star props", () => {
    const wrapper = shallow(<StarImageComp rating={4} coords={-21} />);
    console.log(wrapper.debug());
    expect(wrapper.prop("coords")).toEqual(-21);
    expect(wrapper.contains("rated 4 out of 5 stars"));
  });
});
