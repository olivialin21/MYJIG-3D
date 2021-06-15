import imgCover from "../images/cover.svg"
import imgLightY from "../images/light_y.svg"
import imgLightN from "../images/light_n.svg"

export default function AboutUs() {
  return(
    <div className="home-section">
      <p className="home-title">About Us</p>
      <div className="aboutUs-coverImg"><img src={imgCover} alt="cover" /></div>
      <div className="aboutUs-datas">
        <div className="aboutUs-data">
          <p>Creators</p>
          <p>360+</p>
          <p>Join Us</p>
        </div>
        <div className="aboutUs-data">
          <p>Ideas</p>
          <p>50000+</p>
          <p>Post</p>
        </div>
        <div className="aboutUs-data">
          <p>Projects</p>
          <p>250+</p>
          <p>Our Works</p>
        </div>
      </div>
      <div className="aboutUs-line"></div>
      <div className="aboutUs-Info">
        <p className="aboutUs-Info-title"><span>// </span>About MyJig 3D</p>
        <div className="aboutUs-Info-content">
          MyJig 3D is an 3D modeling website dedicated to matching clients and creators. We also have a prominent team to provide decent service, so we can undertake big cases. 
          <br/><br/>
          Founded in 2021, Taiwan, MyJig 3D is still growing, and keep hiring some creator with great evaluation. 
        </div>
      </div>
      <div className="aboutUs-Info">
        <p className="aboutUs-Info-title"><span>// </span>Why MyJig 3D</p>
        <div className="aboutUs-Info-content">
          Because of the pronunciation, it is similar to ”intermediary” in Chinese. Also, we hope we can light your ideas up and make it jig like magic!  
        </div>
      </div>
      <div className="aboutUs-slogan">
        <img src={imgLightN} alt="cover" />
        <p>
          Don’t waste your ideas!!<br/>
          No matter what you want, We will light it up!!
        </p>
        <img src={imgLightY} alt="cover" />
      </div>
    </div>
  );
}