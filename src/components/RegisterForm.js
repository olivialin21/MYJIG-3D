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
    if (email.value != '' && phoneNum.value != '' && name.value != '' && password.value != '' && password2.value != '' && birthday.value != ''){
      if(password.value==password2.value){
        let registerInfo = {
          email: email.value,
          password: password.value,
          name: name.value
        };
        let userInfoSave = {
          email: email.value,
          password: password.value,
          name: name.value,
          phoneNum: phoneNum.value,
          birthday: birthday.value
        }
        registerToFirebase(dispatch, registerInfo);
        // saveToFirestore(dispatch, userInfoSave)
      } else {
        password2.classList.add("bdr");
      }
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