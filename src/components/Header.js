import imgLogo from "../images/logo.svg"
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
        <Link to="/create">
          <span className="header-navItem">
            Create
            <span>+</span>
          </span>
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