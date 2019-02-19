import { exchangeReducer } from "./reducer";
import { Exchange, ExchangeActionTypes } from "./types";

describe("exchange reducer", () => {
  describe("INITIAL_STATE", () => {
    test("is correct", () => {
      const action = { type: "dummy_action" };
      expect(exchangeReducer(undefined, action)).toMatchSnapshot();
    });
  });

  describe(ExchangeActionTypes.FETCH_REQUEST, () => {
    test("returns the correct state", () => {
      const action = { type: ExchangeActionTypes.FETCH_REQUEST };
      const expectedState = {
        errors: undefined,
        loading: true,
        data: undefined
      };
      expect(exchangeReducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe(ExchangeActionTypes.FETCH_SUCCESS, () => {
    test("returns the correct state", () => {
      const action = {
        type: ExchangeActionTypes.FETCH_SUCCESS,
        payload: <Exchange>{}
      };
      const expectedState = {
        errors: "",
        loading: false,
        data: <Exchange>{}
      };
      expect(exchangeReducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe(ExchangeActionTypes.FETCH_ERROR, () => {
    test("returns the correct state", () => {
      const action = {
        type: ExchangeActionTypes.FETCH_ERROR,
        payload: "something wrong"
      };
      const expectedState = {
        errors: "something wrong",
        loading: false,
        data: undefined
      };
      expect(exchangeReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
