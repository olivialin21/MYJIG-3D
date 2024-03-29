import{
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
} from "../utils"

import {
  signInWithEmailPassword,
  checkLoginApi,
  registerWithEmailPassword,
  logOut,
  createPost,
  getPosts,
  sendEmailToClient
} from "../api";

export const checkLogin = (dispatch) => {
  const isLogin = checkLoginApi();
  if(!isLogin) {
    localStorage.removeItem('orderInfo')
    dispatch({ type: LOGOUT_REQUEST });    
  }
  return isLogin;
}

export const loginToFirebase = async (dispatch, userInfo) => {
  dispatch({ type: BEGIN_LOGIN_REQUEST });
  try {
    const user = await signInWithEmailPassword(userInfo.email, userInfo.password);
    dispatch({
      type: SUCCESS_LOGIN_REQUEST,
      payload: user.user.providerData[0],
    })
    return user;
  } catch (e) {
    dispatch({
      type: FAIL_LOGIN_REQUEST,
      payload: e.message
    })
    console.log(e)
    return null;
  }
}

export const rememberLoginUser = (dispatch, remember) => {
  dispatch({
    type: REMEMBER_LOGIN,
    payload: remember,
  })
}

export const logoutFromFirebase = async (dispatch) => {
  logOut();
  dispatch({ type: LOGOUT_REQUEST });
}

export const registerToFirebase = async (dispatch, userInfo) => {
  dispatch({ type: BEGIN_REGISTER_REQUEST });
  try {
    const user = await registerWithEmailPassword(userInfo.email, userInfo.password, userInfo.name);
    dispatch({
      type: SUCCESS_REGISTER_REQUEST,
      payload: user.providerData[0],
    })
    alert("註冊成功");
    return user;
  } catch (e) {
    dispatch({
      type: FAIL_REGISTER_REQUEST,
      payload: e.message
    })
    alert("註冊失敗");
    return null;
  }
}

export const postRequest = async (dispatch, content) => {
  dispatch({ type: BEGIN_POST_CREATE });
  try {  
    const postInfo = await createPost(content);
    dispatch({ 
      type: SUCCESS_POST_CREATE, 
      payload: postInfo 
    });
    return postInfo;
  } catch (error) {
    console.log(error);
    dispatch({ type: FAIL_POST_CREATE, payload: error });
    return null;
  }  
}

export const setPostList = async (dispatch) => {
  const posts = await getPosts();
  dispatch({
    type: SET_POST_LIST,
    payload: { posts },
  });
}

export const sendEmail = async (dispatch, emailInfo) => {
  const consult = await sendEmailToClient(emailInfo);
  return consult;
}