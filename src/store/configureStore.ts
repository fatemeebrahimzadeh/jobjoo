import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppAction } from "../@types/store";
import { rangesReducer } from "./reducers/ranges";
import { recruimentsReducer } from "./reducers/recruiments";

export const rootReducer = combineReducers({
  ranges: rangesReducer,
  recruiments: recruimentsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type IAppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk as ThunkMiddleware<IAppState, AppAction>)
));