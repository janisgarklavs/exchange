import { combineReducers } from "redux";

import { exchangeReducer } from "./exchange/reducer";
import { ExchangeState } from "./exchange/types";

export interface ApplicationState {
  exchange: ExchangeState;
}

export const rootReducer = combineReducers<ApplicationState>({
  exchange: exchangeReducer
});
