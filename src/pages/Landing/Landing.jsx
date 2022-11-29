import "./LandingStyling/LandingMain.scss";
import Selfie from "../../assets/images/Selfie.png";

const Landing = () => {

    return(
        <div className="landing">
            <div className="landing__intro">
                <p className="landing__intro landing__intro--text">
                    Hi, my name is Chris.
                </p>
                <p className="landing__intro landing__intro--text">
                    I am a
                </p>
                <p className="landing__intro landing__intro--text">
                    Junior Software Engineer
                </p>
                <p className="landing__intro landing__intro--subtext">
                    In a previous life:
                </p>
                <p className="landing__intro landing__intro--subtext">
                    Electrical and electronic Engineering.
                </p>
            </div>
            <div className="landing__imageContainer">
                <img src={Selfie} alt="Me" className="landing__imageContainer landing__imageContainer--image"/>
            </div>
        </div>
    )
}

export default Landing;