import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { checkLogin, loginToFirebase, rememberLoginUser } from '../actions'
import { StoreContext } from "../store"
import imgLogo from "../images/logo.svg"

export default function LoginForm() {
  const { state:{ userSignin: { userInfo, loading, error, remember } }, dispatch } = useContext(StoreContext);
  const history = useHistory();

  const onFinish = (e) => {
    e.preventDefault();
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    let userInfo = {
      email: email.value,
      password: password.value,
    };

    if (userInfo.email !== '' && userInfo.password !==''){
      loginToFirebase(dispatch, userInfo);
    } else {
      alert("尚有空格")
      if (userInfo.email.length === '') {
        email.classList.add("bdr");
      } else {
        email.classList.remove("bdr");
      }
      if (userInfo.password.length === ''){
        password.classList.add("bdr");
      } else {
        password.classList.remove("bdr");
      }
    }

  };

  const onChange = e => {
    if (document.getElementById('remember').checked) 
    {
      rememberLoginUser(dispatch, e.target.checked);
    }
  }

  useEffect(() => {    
    if( userInfo && checkLogin(dispatch) ) history.push("/create");
  }, [ userInfo ]);// eslint-disable-line react-hooks/exhaustive-deps

  return(
    <div className="commonForm loginForm mt75">
      <div className="loginForm-title">
        <p>Log in with your</p>
        <img src={imgLogo} alt="logo"/>
        <p>account</p>
      </div>
      <form className="commonForm-form">
        <div className="form-group commonForm-block">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group commonForm-block mb-1">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="form-group form-check mb-5 ml-1">
          <input type="checkbox" className="form-check-input" id="remember" checked={remember} onClick={onChange}/>
          <label className="form-check-label" for="remember">Remember Me</label>
        </div>
        <button type="submit" onClick={onFinish}>LOG IN</button>
      </form>
      <p className="loginForm-create">
        New here?
        <Link to="/register">
          <span> Create an account &gt;&gt;</span>
        </Link>
      </p>
      <p className="loginForm-password">
        Forgot password?
      </p>
    </div>
    
  );
}