import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Loader } from "./Loader";

describe("<Loader />", () => {
  test("it renders correctly", () => {
    const component = shallow(<Loader />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
