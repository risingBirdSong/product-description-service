import React from "react";
import { shallow, mount } from "enzyme";
import App from "../client/App";
import {
  TestComponent,
  TestComponentA,
  ButtonTest,
  IncrementTest,
  GetTest,
  asyncTest,
} from "../client/components/testing";
import renderer from "react-test-renderer";

describe("basic math test", () => {
  it("it should know that three is three", () => {
    expect(3).toBe(3);
  });

  it("it should do basic math", () => {
    expect(2 + 2).toBe(4);
  });

  it("it should do basic string test", () => {
    expect(typeof "kittens").toBe("string");
  });
});

describe("React tests", () => {
  it("testA should exist", () => {
    const component = shallow(<TestComponent />);
    const wrapper = component.find(".testA");
    expect(wrapper.length).toBe(1);
  });
  it("it should find all 3 findMe", () => {
    const component = shallow(<TestComponent />);
    const wrapper = component.find(".findMe");
    expect(wrapper.length).toBe(3);
  });
});

describe("should test for props", () => {
  it("should send props", () => {
    let props = {
      headline: "little test component",
      paragraph: "kicking tires on this paragraph",
    };
    const rendered = renderer.create(<TestComponentA {...props} />);
    expect(rendered.toJSON()).toMatchSnapshot();
    // const wrapper = component.find("");
  });
});

describe("should test for props", () => {
  it("should succesfully find an h1", () => {
    let props = {
      headline: "little test component",
      paragraph: "kicking tires on this paragraph",
    };
    let component = shallow(<TestComponentA {...props} />);
    let h1 = component.find("h1");
    expect(h1).toExist();
    // const wrapper = component.find("");
  });

  it("should succesfully find text", () => {
    let props = {
      headline: "little test component",
      paragraph: "kicking tires on this paragraph",
    };
    let component = shallow(<TestComponentA {...props} />);
    let h1 = component.find("h1");
    expect(h1).toIncludeText("little test component");
    // const wrapper = component.find("");
  });

  it("should fail for wrong text", () => {
    let props = {
      headline: "little test component",
      paragraph: "kicking tires on this paragraph",
    };
    let component = shallow(<TestComponentA {...props} />);
    let h1 = component.find("h1");
    expect(h1).not.toIncludeText("fail wrong nope");
    // const wrapper = component.find("");
  });

  it("should fail to find an h3", () => {
    let props = {
      headline: "little test component",
      paragraph: "kicking tires on this paragraph",
    };
    let component = shallow(<TestComponentA {...props} />);
    let notThere = component.find("h3");
    expect(notThere).not.toExist();
  });
});

describe("it should work with buttons", () => {
  it("should be able to click", () => {
    let mock = jest.fn();
    let wrapper = shallow(<ButtonTest sayHello={mock} />);
    // let instance = wrapper.instance();
    // let spy = jest.spyOn(instance, "sayHello");
    let btn = wrapper.find("button").first();
    console.log("btn text", btn.text());
    btn.simulate("click");
    expect(mock).toHaveBeenCalledTimes(1);
  });
});

describe("it should test counter functionality", () => {
  it("should start at zer0", () => {
    let wrapper = shallow(<IncrementTest />)
      .find(".counter")
      .text();
    expect(wrapper).toBe("current count 0");
  });
  it("should increment by one", () => {
    let wrapper = shallow(<IncrementTest />);
    wrapper.find(".incrementcount").simulate("click");
    expect(wrapper.state("count")).toEqual(1);
  });
});

describe("it should test async calls", () => {
  it("should work with promises", () => {
    asyncTest().then((data) => {
      expect(data).toBeTruthy();
    });
  });
});

// describe("basic math test a", () => {
//   it("it should ")
// });
