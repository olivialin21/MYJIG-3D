import imgLogo from "../images/logo.svg"
import imgFb from "../images/icn_fb.svg"
import imgIg from "../images/icn_ig.svg"
import { Link } from 'react-router-dom';

export default function Header() {
  return(
    <header className="header">
      <div className="header-nav">
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
        <img className="header-navItem header-icnIg" src={imgIg} alt="icn_Ig"/>
        <Link to="/login">
          <span className="header-navItem header-yellow">Log in</span>
        </Link>
        <Link to="/Register">
          <span className="header-navItem header-yellow">Sign up</span>
        </Link>
      </div>
      <div className="header-bg">
        <div className="header-logo">
          <img src={imgLogo} alt="logo"/>
        </div>
      </div>
    </header>
  );
}