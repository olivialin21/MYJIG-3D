import { useReducer, createContext } from "react";
import {
  LOGOUT_REQUEST,
  BEGIN_LOGIN_REQUEST,
  SUCCESS_LOGIN_REQUEST,
  FAIL_LOGIN_REQUEST,
  REMEMBER_LOGIN,
  BEGIN_REGISTER_REQUEST,
  SUCCESS_REGISTER_REQUEST,
  FAIL_REGISTER_REQUEST,
  BEGIN_POST_CREATE,
  SUCCESS_POST_CREATE,
  FAIL_POST_CREATE,
  SET_POST_LIST
} from "../utils";

export const StoreContext = createContext();
let userInfo;
try {
  userInfo = JSON.parse(localStorage.getItem("userInfo"));
} catch(e) {
  userInfo = null;
}

const initialState = {
  userSignin: {
    loading: false,
    userInfo,
    remember: true,
    error: "",
  },
  userRegister: {
    loading: false,
    userInfo: null,
    error: "",
  },
  postInfo: {
    loading: false,
    success: false,
    error: null,
  },
  page: {
    posts: [],
  },
}

function reducer(state, action) {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          userInfo: null,
        },
      };
    case BEGIN_LOGIN_REQUEST:
      return { ...state, userSignin: { ...state.userSignin, loading: true } };
    case SUCCESS_LOGIN_REQUEST:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          loading: false,
          userInfo: action.payload,
          error: "",
        },
      };
    case FAIL_LOGIN_REQUEST:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          loading: false,
          userInfo: null,
          error: action.payload,
        },
      };
    case REMEMBER_LOGIN:
      return {
        ...state,
        userSignin: {
          ...state.userSignin,
          remember: action.payload,
        },
      };
    case BEGIN_REGISTER_REQUEST:
      return {
        ...state,
        userRegister: { ...state.userRegister, loading: true },
      };
    case SUCCESS_REGISTER_REQUEST:
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          loading: false,
          userInfo: action.payload,
          error: "",
        },
        userSignin: {
          ...state.userSignin,
          userInfo: action.payload,
        },
      };
    case FAIL_REGISTER_REQUEST:
      return {
        ...state,
        userRegister: {
          ...state.userRegister,
          loading: false,
          userInfo: null,
          error: action.payload,
        },
      };
    case BEGIN_POST_CREATE:
      return {
        ...state,
        postInfo: {
          ...state.postInfo,
          loading: true,
          success: false,
        }
      };
    case SUCCESS_POST_CREATE:
      return {
        ...state,
        postInfo: {
          ...state.postInfo,
          loading: false,
          success: true,
          error: null,
        },
      };
    case FAIL_POST_CREATE:
      return {
        ...state,
        postInfo: {
          ...state.postInfo,
          loading: false,
          success: false,
          error: action.payload,
        },
      };
    case SET_POST_LIST:
      return {
        ...state,
        page: {
          ...state.page,
          ...action.payload
        },
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}
