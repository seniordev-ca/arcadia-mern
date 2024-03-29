/* SETTINGS */
export const CHANGE_LOCALE = "CHANGE_LOCALE";

/* AUTH */
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";

/* MENU */
export const MENU_SET_CLASSNAMES = "MENU_SET_CLASSNAMES";
export const MENU_CONTAINER_ADD_CLASSNAME = "MENU_CONTAINER_ADD_CLASSNAME";
export const MENU_CLICK_MOBILE_MENU = "MENU_CLICK_MOBILE_MENU";
export const MENU_CHANGE_DEFAULT_CLASSES = "MENU_CHANGE_DEFAULT_CLASSES";
export const MENU_CHANGE_HAS_SUB_ITEM_STATUS =
  "MENU_CHANGE_HAS_SUB_ITEM_STATUS";

/* Site-Audit */
export const UPLOAD_CSV_SUCCESS = "UPLOAD_CSV_SUCCESS";
export const GET_SITE_LIST = "GET_SITE_LIST";
export const GET_SITE_DETAIL = "GET_SITE_DETAIL";
export const GET_WEATHER = "GET_WEATHER";
export const GET_LAND = "GET_LAND";

/* Entity-User */
export const GET_ENTITY_LIST = "GET_ENTITY_LIST";
export const GET_ENTITY_DETAIL = "GET_ENTITY_DETAIL";
export const GET_ENTITY_EDIT = "GET_ENTITY_EDIT";
export const UPDATE_ENTITY = "UPDATE_ENTITY";
export const CREATE_ENTITY = "CREATE_ENTITY";
export const DELETE_ENTITY = "DELETE_ENTITY";
export const GET_ENTITY_LIST_NO_FILTER = "GET_ENTITY_LIST_NO_FILTER";

export const GET_USER_LIST = "GET_USER_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const GET_USER_EDIT = "GET_USER_EDIT";
export const UPDATE_USER = "UPDATE_USER";
export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";
export const SELECT_ENTITY_FOR_USER_LIST = "SELECT_ENTITY_FOR_USER_LIST";

export * from "./menu/actions";
export * from "./settings/actions";
export * from "./auth/actions";
export * from "./site/actions";
export * from "./entity/actions";