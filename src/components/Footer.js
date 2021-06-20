import imgLogo from "../images/logo.svg"
import imgFb from "../images/icn_fb.svg"
import imgIg from "../images/icn_ig.svg"

export default function Footer() {
  return(
    <div className="footer">
      <div className="footer-info">
        <p>Tel <span>//</span> +886-2-2732-1104</p>
      </div>
      <div className="footer-info">
        <p>E-mail <span>//</span> myjig.3d.official@gmail.com</p>
      </div>
      <div className="footer-info">
        <p>Address <span>//</span> No.134, Sec. 2, Heping E. Rd., Da-an District, Taipei City 106, Taiwan (R.O.C.)</p>
      </div>
      <div className="footer-2F">
        <div className="footer-icnFb"><img src={imgFb} alt="icn_fb" /></div>
        <img src={imgIg} alt="icn_Ig"/>
        <img className="footer-logo" src={imgLogo} alt="icn_Ig"/>
      </div>
      <p className="footer-copyright">MYJIG 3D ©2021 Copyright All Rights Reserved</p>
    </div>
  );
}