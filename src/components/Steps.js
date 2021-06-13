import imgStep1 from "../images/step1.svg"
import imgStep2 from "../images/step2.svg"
import imgStep3 from "../images/step3.svg"
import imgStep4 from "../images/step4.svg"
import imgStep5 from "../images/step5.svg"
import imgStep6 from "../images/step6.svg"

export default function Steps() {
  return(
    <div className="home-section">
      <p className="home-title">Steps</p>
      <div className="steps-block">
        <img src={imgStep1} alt="step1" />
        <div className="steps-text">
          <p className="steps-title"><span>//</span> Step 1</p>
          <p className="steps-content">Write a post of your requirements.</p>
        </div>
      </div>
      <div className="steps-block">
        <img src={imgStep2} alt="step2" />
        <div className="steps-text">
          <p className="steps-title"><span>//</span> Step 2</p>
          <p className="steps-content">Write a post of your requirements.</p>
        </div>
      </div>
      <div className="steps-block">
        <img src={imgStep3} alt="step3" />
        <div className="steps-text">
          <p className="steps-title"><span>//</span> Step 3</p>
          <p className="steps-content">Write a post of your requirements.</p>
        </div>
      </div>
      <div className="steps-block">
        <img src={imgStep4} alt="step4" />
        <div className="steps-text">
          <p className="steps-title"><span>//</span> Step 4</p>
          <p className="steps-content">Write a post of your requirements.</p>
        </div>
      </div>
      <div className="steps-block">
        <img src={imgStep5} alt="step5" />
        <div className="steps-text">
          <p className="steps-title"><span>//</span> Step 5</p>
          <p className="steps-content">Write a post of your requirements.</p>
        </div>
      </div>
      <div className="steps-block">
        <img src={imgStep6} alt="step6" />
        <div className="steps-text">
          <p className="steps-title"><span>//</span> Step 6</p>
          <p className="steps-content">Write a post of your requirements.</p>
        </div>
      </div>
    </div>
  );
}