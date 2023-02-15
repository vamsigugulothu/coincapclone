import { combineReducers } from "redux";
import { currencyReducer } from "./base/reducer"

const rootReducer = combineReducers({
  currency: currencyReducer,
});

export { rootReducer };
