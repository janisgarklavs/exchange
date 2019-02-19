import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { MainPage } from "./main";
import { fetchRequest } from "../store/exchange/actions";

describe("<MainPage />", () => {
  test("it renders correctly", () => {
    const mockedState = {
      loading: false,
      data: undefined,
      errors: undefined
    };

    const component = shallow(
      <MainPage fetchRequest={fetchRequest} {...mockedState} />
    );

    expect(toJson(component)).toMatchSnapshot();
    expect(component.find("Loader").length).toBe(0);
    expect(component.find("Exchange").length).toBe(0);
    expect(component.find("span.error").length).toBe(0);
  });

  test("it shows error message in case of error prop", () => {
    const mockedState = {
      loading: false,
      data: undefined,
      errors: "Here is some error"
    };

    const component = shallow(
      <MainPage fetchRequest={fetchRequest} {...mockedState} />
    );
    expect(component.find("Loader").length).toBe(0);
    expect(component.find("Exchange").length).toBe(0);
    expect(component.find("span.error").text()).toEqual(
      "Something went wrong!"
    );
  });

  test("it shows loader while loading prop is truthy", () => {
    const mockedState = {
      loading: true,
      data: undefined,
      errors: "Here is some error"
    };

    const component = shallow(
      <MainPage fetchRequest={fetchRequest} {...mockedState} />
    );
    expect(component.find("Loader").length).toBe(1);
    expect(component.find("Exchange").length).toBe(0);
  });

  test("it shows Exchange component when received data", () => {
    const mockedState = {
      loading: false,
      data: { base: "EUR", date: "2019-01-01", rates: { USD: 1.23 } },
      errors: ""
    };

    const component = shallow(
      <MainPage fetchRequest={fetchRequest} {...mockedState} />
    );
    expect(component.find("Loader").length).toBe(0);
    expect(component.find("Exchange").length).toBe(1);
    expect(component.find("span.error").length).toBe(0);
  });
});
