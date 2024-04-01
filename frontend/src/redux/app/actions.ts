import axios from "axios";
import { Dispatch } from "redux";
import { baseUrl } from "../../utils/baseUrl";
import { AppAction, AppActionTypes, Article, PatchPost } from "./actionTypes";
const url = baseUrl;

export const getPostsAction = (payload: Article[]): AppAction => {
  return { type: AppActionTypes.GET_POSTS, payload };
};

export const patchPostAction = (payload: {
  id: number;
  update: PatchPost;
}): AppAction => {
  return { type: AppActionTypes.PATCH_POST, payload };
};

export const addPostAction = (payload: Article): AppAction => {
  return { type: AppActionTypes.ADD_POST, payload };
};

export const dataLoadingAction = (): AppAction => {
  return { type: AppActionTypes.DATA_LOADING };
};

export const dataErrorAction = (): AppAction => {
  return { type: AppActionTypes.DATA_ERROR };
};

export const getPosts =
  () =>
  (dispatch: Dispatch<AppAction>): Promise<string> => {
    console.log("first");
    dispatch(dataLoadingAction());
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/posts`)
        .then((res) => {
          dispatch(getPostsAction(res.data as Article[]));
          resolve("success");
        })
        .catch((error) => {
          dispatch(dataErrorAction());
          reject(error);
        });
    });
  };

export const addPost = (payload: Article) => (dispatch) => {
  dispatch(dataLoadingAction());
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/posts`, payload)
      .then((res) => {
        dispatch(getPosts());
        resolve(res.data);
      })
      .catch((error) => {
        dispatch(dataErrorAction());
        reject(error);
      });
  });
};
