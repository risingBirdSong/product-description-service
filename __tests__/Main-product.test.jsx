import React from "react";
import { shallow } from "enzyme";
import MainProduct from "../client/components/Main-product";

describe("it should test Main Product", () => {
  it("it should pass props to Main Product", () => {
    const wrapper = shallow(
      <MainProduct producer="testing producer" title="testing title" />
    );
    expect(wrapper.find("p").text()).toContain("testing producer");
    expect(wrapper.find("h3").text()).toContain("testing title");
  });
});
