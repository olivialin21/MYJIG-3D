import React, { useEffect, useContext } from 'react';
import { StoreContext } from "../store"
import { logoutFromFirebase } from '../actions'
import imgLogo from "../images/logo.svg"
import imgFb from "../images/icn_fb.svg"
import imgIg from "../images/icn_ig.svg"
import videoCover from "../videos/cover.mp4"
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  const { state: { userSignin : { userInfo, remember } }, dispatch } = useContext(StoreContext);

  const onLogOut = () => {
    logoutFromFirebase(dispatch);
  }

  useEffect(() => {
    if(remember)
       localStorage.setItem("userInfo", JSON.stringify(userInfo));
    else
     localStorage.removeItem("userInfo");
  }, [userInfo, remember]);

  return(
    <header id="home" className="header">
      <div className="header-nav">
      <span className="header-navItem">
        <HashLink to="/#aboutUs">
          About Us
        </HashLink>
        </span>
        <span className="header-navItem">
          <HashLink to="/#steps">
            Steps
          </HashLink>
        </span>
        <span className="header-navItem">
          <Link to="/works">
            Works
          </Link>
        </span>
        <span className="header-navItem">
          <Link to="/create">
            Create
            <span>+</span>
          </Link>
        </span>       
        <div className="header-navItem header-icnFb"><img src={imgFb} alt="icn_fb" /></div>
        <div className="header-navItem header-icnIg"><img src={imgIg} alt="icn_Ig"/></div>
        {userInfo ? 
          <span className="header-navItem header-yellow" onClick={onLogOut}>
            {/* <Link to="/login"> */}
            Hi, {userInfo.displayName}
            {/* </Link> */}
          </span>
          :    
          <>
            <span className="header-navItem header-yellow">
              <Link to="/login">
                Log in
              </Link>
            </span>
            <span className="header-navItem header-yellow">
              <Link to="/Register">
                Sign up
              </Link>
            </span>
          </>       
        }
      </div>
      <div className="header-bg">
        <div className="header-logo">
          <img src={imgLogo} alt="logo"/>
        </div>
        <video src={videoCover} autoPlay muted loop />
      </div>
    </header>
  );
}