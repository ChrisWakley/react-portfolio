import "./AboutStyling/AboutMain.scss";
import armyOne from "../../assets/images/armyone.jpg";
import armyTwo from "../../assets/images/armytwo.jpg";
import reme from "../../assets/images/reme.png";

const About = () => {

    return(
        <div className="about">
            <div className="about__bodyContainer">
                <div className="about__imageOne">
                    <img src={armyOne} alt="army" className="about__imageOne about__imageOne--armyOne"/>
                </div>
                <div className="about__body">
                    <p className="about__body about__body--text">
                        Before deciding to become a developer, i spent 10 years in the
                        British Army working as an electronics technician. After a series of unfortunate events, i was no
                        longer physically able to carry on in my engineering trade. Programming became an attractive option
                        for me as I've always been interested in computing. The transition from fixing hardware to coding
                        software was quite smooth.
                    </p>
                    <p className="about__body about__body--text">
                        I've always had an afinity for electronics and computers,
                        I enjoy problem solving and logical thinking so this seems like a natural transition for me.
                    </p>
                    <p className="about__body about__body--text">
                        My duties in the military revolved heavily around maintenance and repair of any and all electronic
                        systems in use within service. I was in a management position for a long time and have plenty of experience
                        when it comes to working as a team and directing and managing a group, it was my responsibility to ensure
                        new tradesmen were quickly and efficiently trained to the trade standards required in order for them 
                        to work in an individual capacity effectively.
                    </p>
                    <img src={reme} alt="remelogo" className="about__body about__body--image"/>
                </div>
                <div className="about__imageTwo">
                    <img src={armyTwo} alt="army" className="about__imageTwo about__imageTwo--armyTwo"/>
                </div>
            </div>
        </div>
    )
}

export default About;