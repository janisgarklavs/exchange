import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Header } from "./Header";

describe("<Header />", () => {
  test("it renders correctly", () => {
    const component = shallow(<Header />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
