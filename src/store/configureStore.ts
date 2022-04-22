import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppAction } from "../@types/store";
import { userReducer } from "./reducers/user";

export const rootReducer = combineReducers({
  users: userReducer
})




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type IAppState = ReturnType<typeof rootReducer>



export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk as ThunkMiddleware<IAppState, AppAction>)
));