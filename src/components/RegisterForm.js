import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../store"
import { registerToFirebase, checkLogin, saveToFirestore } from '../actions'

export default function RegisterForm() {
  const { state: { userSignin : { userInfo } }, dispatch } = useContext(StoreContext);
  const history = useHistory();

  const email = document.getElementById("email");
  const phoneNum = document.getElementById("phoneNum");
  const name = document.getElementById("name");
  const password = document.getElementById("password");
  const password2 = document.getElementById("password2");
  const birthday = document.getElementById("birthday");

  useEffect(() => {
    if( userInfo && checkLogin(dispatch) ) history.push("/create");
  },[userInfo])

  // document.addEventListener('click', () => {
  //   let ary = ["email","phoneNum","name","password","password2","birthday"]
  //   ary.map(aryItem => {
  //     if (aryItem != null){
  //       if (aryItem.value.length != 0){
  //         const aryItemName = document.getElementByName("aryItem")
  //         aryItemName.classList.remove("bdr");
  //         console.log(aryItem)
  //       }
  //     }
  //   })
  // });

  const onFinish = (e) => {
    e.preventDefault();
    const registerInfo = {
      email: email.value,
      password: password.value,
      name: name.value,
      phoneNum: phoneNum.value,
      birthday: birthday.value
    }
    const passwordCheck = password2.value
    
    if(password.value===passwordCheck){
      registerToFirebase(dispatch, registerInfo);
    } else {
      password2.classList.add("bdr");
    }
    if (registerInfo.email.length == '') {
      email.classList.add("bdr");
    } else {
      email.classList.remove("bdr");
    }
    if (registerInfo.password.length == ''){
      password.classList.add("bdr");
    } else {
      password.classList.remove("bdr");
    }
    if (registerInfo.name.length == ''){
      name.classList.add("bdr");
    } else {
      name.classList.remove("bdr");
    }
    if (registerInfo.phoneNum.length == ''){
      phoneNum.classList.add("bdr");
    } else {
      phoneNum.classList.remove("bdr");
    }
    if (registerInfo.birthday.length == ''){
      birthday.classList.add("bdr");
    } else {
      birthday.classList.remove("bdr");
    }
  };

  return(
    <div className="commonForm mt75">
      <p className="registerForm-title">Join us !</p>
      <form className="commonForm-form" id="form">
        <div className="form-group commonForm-block">
          <label for="exampleInputEmail1">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group commonForm-block">
          <label for="exampleInputPassword1">Phone Number</label>
          <input type="tel" className="form-control" id="phoneNum"/>
        </div>
        <div className="form-group commonForm-block">
          <label for="exampleInputPassword1">Anonymous ID</label>
          <input type="text" className="form-control" id="name" placeholder="Length must be less than 16 characters" maxLength="16"/>
        </div>
        <div className="form-group commonForm-block">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Length must be greater than 6 characters" minLength="6"/>
        </div>
        <div className="form-group commonForm-block">
          <label for="exampleInputPassword1">Confirm Password</label>
          <input type="password" className="form-control" id="password2" />
        </div>
        <div className="form-group commonForm-block">
          <label for="exampleInputPassword1">Birthday</label>
          <input type="date" className="form-control" id="birthday" />
        </div>
        <p>By clicking the Continue button below, you accept the MyJig 3D <span>Terms of Use</span> and <span>Privacy Policy</span>.</p>
        <button type="submit" onClick={onFinish}>CONTINUE</button>
      </form>
    </div>
  );
}