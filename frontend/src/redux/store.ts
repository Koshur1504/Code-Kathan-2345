import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { ThunkDispatch, ThunkMiddleware, thunk } from "redux-thunk";

import { AppAction, StoreState } from "./app/actionTypes";
import { appReducer } from "./app/reducer";
import { ArticleAction } from "./constraints/types";

export interface RootState {
  store : StoreState;
}

const rootReducers = combineReducers<RootState>({
  store: appReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export type AppState = ReturnType<typeof rootReducers>;

// Create a ThunkMiddleware instance
const thunkMiddleware: ThunkMiddleware<AppState, ArticleAction> = thunk;

export const store = legacy_createStore<AppState, ArticleAction>(
  rootReducers,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);
export type AppDispatch = ThunkDispatch<RootState, void, AppAction>;
