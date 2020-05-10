import React from "react";
import { shallow } from "enzyme";
import BasicInfo from "../client/components/BasicInfo";

describe("it should test Basic Info", () => {
  const props = {
    description: "hi im a test description",
    primeDiscount: 7,
    wasPrice: 18,
    currentPrice: 23,
    inStock: true,
    soldBy: "test seller"
  }
  it("it should test props on basic info", () => {
    const wrapper = shallow(
      <BasicInfo {...props} />
    );
    expect(wrapper.find(".description").text()).toContain("hi im a test description");
    expect(wrapper.find(".discount").text()).toContain("discount : $7");
    expect(wrapper.find(".wasPrice").text()).toContain(18);
    expect(wrapper.find(".currentPrice").text()).toContain(23);
    expect(wrapper.find(".inStock").text()).toContain("In Stock");
    expect(wrapper.find(".soldBy").text()).toContain("test seller");
  });
});
