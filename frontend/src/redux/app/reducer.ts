import { AppAction, AppActionTypes, StoreState } from "./actionTypes";

let initialState: StoreState = {
  authLoading: false,
  authError: false,
  dataLoading: false,
  dataError: false,
  posts: [],
};

function appReducer(
  state: StoreState = initialState,
  action: AppAction,
): StoreState {
  switch (action.type) {
    case AppActionTypes.DATA_LOADING:
      return { ...state, dataLoading: true, dataError: false };
    case AppActionTypes.DATA_ERROR:
      return { ...state, dataLoading: false, dataError: true };
    case AppActionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        dataLoading: false,
        dataError: false,
      };
    default:
      return state;
  }
}

export default appReducer;
