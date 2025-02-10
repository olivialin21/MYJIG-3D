import React, { useEffect, useState, useContext } from 'react';
import { StoreContext } from "../store"
import { logoutFromFirebase } from '../actions'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import imgLogo from "../images/logo.svg"
import imgFb from "../images/icn_fb.svg"
import imgIg from "../images/icn_ig.svg"

export default function Navbar() {
  const { state: { userSignin : { userInfo, remember } } , dispatch } = useContext(StoreContext);
  const [offsetX, setOffsetX] = useState(window.innerWidth);
  const [offsetY, setOffsetY] = useState(0);
  const [hamToggle, toggleChange] = useState(false);

  const toggleHam = () => {
    toggleChange(!hamToggle);
  } 

  const onLogOut = () => {
    logoutFromFirebase(dispatch);
  }

  useEffect(() => {
    window.onresize = () => {
      setOffsetX(window.innerWidth);
    };
    window.onscroll = () => {
      setOffsetY(window.pageYOffset);
    };
  }, []);

  useEffect(()=>{
    let wh = currentScrollPercentage();
    let bar = document.querySelector('.progress .progress-bar');
    bar.style = "width:"+wh+"%";
  },[offsetY])

  const currentScrollPercentage = () => {
	  return ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
  }

  useEffect(() => {
    if(remember)
       localStorage.setItem("userInfo", JSON.stringify(userInfo));
    else
     localStorage.removeItem("userInfo");
  }, [userInfo, remember]);

  return(
    <>
      <nav className={offsetX < 992 || offsetY > 280 ? "navbar navbar-expand-lg nav nav-appear" : "navbar navbar-expand-lg nav"}>
        <button className="navbar-toggler third-button nav-toggler" data-toggle="collapse" data-target="#nav-toggler" onClick={toggleHam}>
          <div className={hamToggle ? "animated-icon3 open" : "animated-icon3"}><span></span><span></span><span></span></div>
        </button>
        <HashLink to="/#home" className="m-auto">
          <img className="nav-logo" src={imgLogo} alt="logo"/>
        </HashLink>
        <div className={hamToggle ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
          <div className="navbar-nav nav-nav">
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
                Hi, {userInfo.displayName}
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
        </div>
      </nav>
      <div className={offsetX < 992 || offsetY > 280 ? "progress nav-progress nav-progress-appear" : "progress nav-progress"}>
        <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </>
  );
}