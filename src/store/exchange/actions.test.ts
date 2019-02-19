import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import {
  fetchRequest,
  fetchRequestStart,
  fetchSuccess,
  fetchError,
  EXCHANGE_ENDPOINT
} from "./actions";
import { Exchange, ExchangeActionTypes } from "./types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore();

describe("exchange actions", () => {
  beforeEach(() => {
    store.clearActions();
  });
  describe("fetchRequestStart", () => {
    test("Dispatches the correct action and payload", () => {
      store.dispatch(fetchRequestStart());
      expect(store.getActions()).toMatchSnapshot();
    });
  });
  describe("fetchSuccess", () => {
    test("Dispatches the correct action and payload", () => {
      const data = <Exchange>{};
      store.dispatch(fetchSuccess(data));
      expect(store.getActions()).toMatchSnapshot();
    });
  });
  describe("fetchError", () => {
    test("Dispatches the correct action and payload", () => {
      store.dispatch(fetchError("something failed"));
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  describe("fetchReqeust", () => {
    test("calls request and success actions on succesfull fetch", done => {
      const data = {
        date: "2019-02-18",
        base: "EUR",
        rates: {
          USD: 1.1328
        }
      };

      fetchMock.mock(EXCHANGE_ENDPOINT, {
        status: 200,
        body: data
      });
      store.dispatch(fetchRequest()).then(() => {
        const expectedActions = store.getActions();
        expect(expectedActions.length).toBe(2);
        expect(expectedActions).toContainEqual({
          type: ExchangeActionTypes.FETCH_REQUEST
        });
        expect(expectedActions).toContainEqual({
          type: ExchangeActionTypes.FETCH_SUCCESS,
          payload: data
        });
        done();
      });
    });

    test("calls request and failure actions on not successful fetch", done => {
      const data = "something funky";
      fetchMock.mock(
        EXCHANGE_ENDPOINT,
        {
          status: 400,
          body: { error: data }
        },
        { overwriteRoutes: true }
      );
      store.dispatch(fetchRequest()).then(() => {
        const expectedActions = store.getActions();
        expect(expectedActions.length).toBe(2);
        expect(expectedActions).toContainEqual({
          type: ExchangeActionTypes.FETCH_REQUEST
        });
        expect(expectedActions).toContainEqual({
          type: ExchangeActionTypes.FETCH_ERROR,
          payload: data
        });
        done();
      });
    });
  });
});
