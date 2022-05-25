import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import appReducer from "./app/app.reducer";
import currencyReducer from "./currency/reducer";
import rateReducer from "./rate/reducer";
import userReducer from "./user/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["app"],
};

const rootReducer = combineReducers({
  app: appReducer,
  rate: rateReducer,
  user: userReducer,
  currency: currencyReducer,
});

export default persistReducer(persistConfig, rootReducer);
