import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Exchange } from "./Exchange";

describe("<Exchange />", () => {
  test("it renders correctly", () => {
    const data = {
      date: "01-01-2018",
      base: "EUR",
      rates: { USD: 0.2 }
    };
    const component = shallow(<Exchange data={data} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
