
import React from "react";
import { shallow } from "enzyme";
import StyleImage from "../client/components/StyleImage";

describe("it should test the style image component", () => {
  it("the last item should be clicked and the mock function should know it was the last", () => {
    const myMock = jest.fn(x => x);
    const props = {
      selected: 2,
      styles: ["style test 1", "style test 2", "style test 3"],
      currentPrice: 45,
      handler: myMock
    }
    const wrapper = shallow(<StyleImage selected={props.selected} styles={props.styles} currentPrice={props.currentPrice} handler={props.handler} />);
    const selection = wrapper.find(".currentlySelected");
    selection.simulate("click");
    expect(myMock.mock.results[0].value).toBe(2);
  });
  it("the middle item should be clicked and know that it was clicked", () => {
    const myMock = jest.fn(x => x);
    const props = {
      selected: 1,
      styles: ["style test 1", "style test 2", "style test 3"],
      currentPrice: 45,
      handler: myMock
    }
    const wrapper = shallow(<StyleImage selected={props.selected} styles={props.styles} currentPrice={props.currentPrice} handler={props.handler} />);
    const selection = wrapper.find(".currentlySelected");
    selection.simulate("click");
    expect(myMock.mock.results[0].value).toBe(1);
  });
});
