import React, { useEffect, useState, useContext } from 'react';
import { StoreContext } from "../store"
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import imgLogo from "../images/logo.svg"
import imgFb from "../images/icn_fb.svg"
import imgIg from "../images/icn_ig.svg"

export default function Navbar() {
  const { state: { userSignin : { userInfo, remember } } } = useContext(StoreContext);
  const [offsetX, setOffsetX] = useState(window.innerWidth);
  const [offsetY, setOffsetY] = useState(0);
  const [hamToggle, toggleChange] = useState(false);

  const clickHam = () => toggleChange(!hamToggle);

  useEffect(() => {
    window.onresize = () => {
      setOffsetX(window.innerWidth);
    };
    window.onscroll = () => {
      setOffsetY(window.pageYOffset);
    };
  }, []);

  useEffect(() => {
    if(remember)
       localStorage.setItem("userInfo", JSON.stringify(userInfo));
    else
     localStorage.removeItem("userInfo");
  }, [userInfo, remember]);

  return(
    <nav className={offsetX < 992 || offsetY > 280 ? "navbar navbar-expand-lg nav nav-appear" : "navbar navbar-expand-lg nav"}>
      <button class="navbar-toggler third-button nav-toggler" data-toggle="collapse" data-target="#nav-toggler" onClick={clickHam}>
        <div class={hamToggle ? "animated-icon3 open" : "animated-icon3"}><span></span><span></span><span></span></div>
      </button>
      <HashLink to="/#home" className="m-auto">
        <img className="nav-logo" src={imgLogo} alt="logo"/>
      </HashLink>
      <div className={hamToggle ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="nav-toggler">
        <div className="ml-auto navbar-nav nav-nav">
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
            <span className="header-navItem header-yellow">
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
      </div>
    </nav>
  );
}