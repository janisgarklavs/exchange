import { Store, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { ApplicationState, rootReducer } from "./store";

export default function configureStore(
  initialState: ApplicationState
): Store<ApplicationState> {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  return store;
}
