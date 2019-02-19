import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Card } from "./Card";

describe("<Card />", () => {
  test("it renders correctly", () => {
    const component = shallow(<Card />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
