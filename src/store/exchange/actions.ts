import { action } from "typesafe-actions";
import { ExchangeActionTypes, Exchange } from "./types";
import { Dispatch } from "redux";

export const EXCHANGE_ENDPOINT = "https://api.exchangeratesapi.io/latest";

export const fetchRequestStart = () =>
  action(ExchangeActionTypes.FETCH_REQUEST);

export const fetchSuccess = (data: Exchange) =>
  action(ExchangeActionTypes.FETCH_SUCCESS, data);
export const fetchError = (msg: string) =>
  action(ExchangeActionTypes.FETCH_ERROR, msg);

export const fetchRequest = (): any => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchRequestStart());

    try {
      const res = await fetch(EXCHANGE_ENDPOINT);
      const data = await res.json();
      if (!res.ok) {
        throw Error(data.error);
      }
      dispatch(fetchSuccess(data));
    } catch (err) {
      dispatch(fetchError(err.message));
    }
  };
};
