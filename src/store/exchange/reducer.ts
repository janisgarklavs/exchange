import { Reducer } from "redux";
import { ExchangeState, ExchangeActionTypes } from "./types";

const initialState: ExchangeState = {
  data: undefined,
  errors: undefined,
  loading: false
};

const reducer: Reducer<ExchangeState> = (state = initialState, action) => {
  switch (action.type) {
    case ExchangeActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case ExchangeActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        errors: ""
      };
    }
    case ExchangeActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as exchangeReducer };
