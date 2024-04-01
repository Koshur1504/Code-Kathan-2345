export interface Article {
  id?: number;
  title: string;
  Description: string;
  source: string;
  time: number;
  articleLink: string;
  image1: string;
  image2: string;
  category: string;
  clicks: number;
}

export interface User {
  email: string;
  name: string;
  role: string;
  id: number;
  Phone: number;
  address: {
    address_line: string;
    city: string;
    state: string;
    postcode: number;
    country: string;
  };
}

export interface StoreState {
  authLoading: boolean;
  authError: boolean;
  user?: User;
  accessToken?: string;
  dataLoading: boolean;
  dataError: boolean;
  posts: Article[];
}

export interface Credentails {
  email: string;
  name?: string;
  role?: string;
  id?: number;
  Phone?: number;
  address?: {
    address_line?: string;
    city?: string;
    state?: string;
    postcode?: number;
    country?: string;
  };
}

export interface PatchPost {
  id?: number;
  title?: string;
  Description?: string;
  source?: string;
  time?: number;
  articleLink?: string;
  image1?: string;
  image2?: string;
  category?: string;
  clicks?: number;
}

export enum AppActionTypes {
  AUTH_LOADING = "AUTH_LOADING",
  AUTH_ERROR = "AUTH_ERROR",
  AUTH_SUCCESS = "AUTH_SUCCESS",
  SIGNIN_USER = "SIGNIN_USER",
  SIGNUP_USER = "SIGNUP_USER",
  LOGOUT_USER = "LOGOUT_USER",
  GET_POSTS = "GET_POSTS",
  PATCH_POST = "PATCH_POSTS",
  ADD_POST = "ADD_POST",
  DATA_LOADING = "DATA_LOADING",
  DATA_ERROR = "DATA_ERROR",
}

interface AddUserAction {
  type: AppActionTypes.SIGNUP_USER;
  payload: Credentails;
}

interface LoginUserAction {
  type: AppActionTypes.SIGNIN_USER;
  payload: Credentails;
}

interface LogoutUserAction {
  type: AppActionTypes.LOGOUT_USER;
}

interface AuthLoadingAction {
  type: AppActionTypes.AUTH_LOADING;
}

interface AuthErrorAction {
  type: AppActionTypes.AUTH_ERROR;
}
interface AuthSuccessAction {
  type: AppActionTypes.AUTH_SUCCESS;
  payload: { user: User };
}

interface DataLoadingAction {
  type: AppActionTypes.DATA_LOADING;
}

interface DataErrorAction {
  type: AppActionTypes.DATA_ERROR;
}

interface GetPostsAction {
  type: AppActionTypes.GET_POSTS;
  payload: Article[];
}

interface PatchPostAction {
  type: AppActionTypes.PATCH_POST;
  payload: { id: number; update: PatchPost };
}

interface AddPostAction {
  type: AppActionTypes.ADD_POST;
  payload: Article;
}

export type GetData = () => void;

export type AppAction =
  | AddUserAction
  | LoginUserAction
  | LogoutUserAction
  | AuthLoadingAction
  | AuthErrorAction
  | AuthSuccessAction
  | DataLoadingAction
  | DataErrorAction
  | GetPostsAction
  | PatchPostAction
  | AddPostAction;
