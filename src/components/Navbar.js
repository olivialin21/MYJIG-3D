import imgLogo from "../images/logo.svg"
import imgFb from "../images/icn_fb.svg"
import imgIg from "../images/icn_ig.svg"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
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

  return(
    <nav className={offsetX < 992 || offsetY > 280 ? "navbar navbar-expand-lg nav nav-appear" : "navbar navbar-expand-lg nav"}>
      <button class="navbar-toggler third-button nav-toggler" data-toggle="collapse" data-target="#nav-toggler" onClick={clickHam}>
        <div class={hamToggle ? "animated-icon3 open" : "animated-icon3"}><span></span><span></span><span></span></div>
      </button>
      <img className="nav-logo m-auto" src={imgLogo} alt="logo"/>
      <div className={hamToggle ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="nav-toggler">
        <div className="ml-auto navbar-nav nav-nav">
          <Link to="/">
            <span className="header-navItem">About Us</span>
          </Link>
          <Link to="/">
            <span className="header-navItem">Steps</span>
          </Link>
          <Link to="/works">
            <span className="header-navItem">Works</span>
          </Link>
          <Link to="/create">
            <span className="header-navItem">
              Create
              <span>+</span>
            </span>
          </Link>
          <div className="header-navItem header-icnFb"><img src={imgFb} alt="icn_fb" /></div>
          <div className="header-navItem header-icnIg"><img src={imgIg} alt="icn_Ig"/></div>
          <Link to="/login">
            <span className="header-navItem header-yellow">Log in</span>
          </Link>
          <Link to="/Register">
            <span className="header-navItem header-yellow">Sign up</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}