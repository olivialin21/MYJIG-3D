import { Link } from 'react-router-dom';
import imgCover from "../images/cover.jpg"
import imgLightY from "../images/light_y.svg"
import imgLightYLine from "../images/light_yLine.svg"
import imgLightN from "../images/light_n.svg"

export default function AboutUs() {
  return(
    <div id="aboutUs" className="home-section mt75">
      <p className="home-title">About Us</p>
      <div className="aboutUs-coverImg"><img src={imgCover} alt="cover" /></div>
      <div className="aboutUs-datas">
        <div className="aboutUs-data">
          <p>Creators</p>
          <p>360+</p>
          <Link to="/login">
            <p>Join Us</p>
          </Link>
        </div>
        <div className="aboutUs-data">
          <p>Ideas</p>
          <p>50000+</p>
          <Link to="/create">
            <p>Post</p>
          </Link>
        </div>
        <div className="aboutUs-data">
          <p>Projects</p>
          <p>250+</p>
          <Link to="/works">
            <p>Our Works</p>
          </Link>
        </div>
      </div>
      <div className="aboutUs-line"></div>
      <div className="aboutUs-Info animate__animated animate__fadeInUp">
        <p className="aboutUs-Info-title"><span>// </span>About MyJig 3D</p>
        <div className="aboutUs-Info-content">
          MyJig 3D is an 3D modeling website dedicated to matching clients and creators. We also have a prominent team to provide decent service, so we can undertake big cases. 
          <br/><br/>
          Founded in 2021, Taiwan, MyJig 3D is still growing, and keep hiring some creator with great evaluation. 
        </div>
      </div>
      <div className="aboutUs-Info animate__animated animate__fadeInUp">
        <p className="aboutUs-Info-title"><span>// </span>Why MyJig 3D</p>
        <div className="aboutUs-Info-content">
          Because of the pronunciation, it is similar to ”intermediary” in Chinese. Also, we hope we can light your ideas up and make it jig like magic!  
        </div>
      </div>
      <div className="aboutUs-slogan">
        <div className="aboutUs-slogan-animate aboutUs-slogan-animate1">
          <img className="aboutUs-slogan-imgLight" src={imgLightN} alt="cover" />
          <p>
            Don’t waste your ideas!!<br/>
            No matter what you want, We will light it up!!
          </p>
        </div>
        <div className="aboutUs-slogan-animate aboutUs-slogan-animate2">
          <img className="aboutUs-slogan-imgLight" src={imgLightY} alt="cover" />
          <img className="aboutUs-slogan-imgLightLine" src={imgLightYLine} alt="cover" />
        </div>
      </div>
    </div>
  );
}