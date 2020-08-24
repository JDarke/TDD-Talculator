import React from "react";
import { shallow, mount } from "enzyme";
import Value from "./Value";

describe("Value", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Value />)));

  it("should render the output class div", () => {
    expect(wrapper.find(".output").length).toEqual(1);
  });

  beforeEach(
    () =>
      (wrapper = mount(
        <Value outputSize={3} value={"testValue"} />
      ))
  );

  it("should receive props from parent", () => {
    expect(wrapper.props().outputSize).toEqual(3);
    expect(wrapper.props().value).toEqual("testValue");
  });

  it("should render the output class div displaying a value equal to value prop", () => {
    expect(wrapper.find(".output").text()).toEqual('testValue');
  });
});
