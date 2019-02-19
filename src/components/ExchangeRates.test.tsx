import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { ExchangeRates } from "./ExchangeRates";

describe("<ExchangeRates />", () => {
  test("it renders correctly", () => {
    const rates = { USD: 0.8 };
    const component = shallow(<ExchangeRates rates={rates} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
