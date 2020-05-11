import React from "react";
import { shallow } from "enzyme";
import Descriptions from "../client/components/Descriptions";

describe("it should test Descriptions component", () => {
  it("should map descriptions", () => {
    const descriptionsTests = ["test a", "test b", "test c"];
    const wrapper = shallow(<Descriptions descriptions={descriptionsTests} />);
    expect(wrapper.find("li").length).toBe(3);
  })
})  