import "./AboutStyling/AboutMain.scss";
import armyOne from "../../assets/images/armyone.jpg";
import Snowboarding from "../../assets/images/Snowboarding.jpeg";
import armyThree from "../../assets/images/armyThree.jpg";
import armyFour from "../../assets/images/armyFour.jpg";
import reme from "../../assets/images/reme.png";

const About = () => {
    return (
        <div className='about'>
            <div className='about__bodyContainer'>
                <div className='about__imageContainer'>
                    <div className='about__imageOne'>
                        <img
                            src={armyOne}
                            alt='army'
                            className='about__imageOne about__imageOne--armyOne'
                        />
                        <div className='about__reme'>
                            <img
                                src={reme}
                                alt='remelogo'
                                className='about__reme'
                            />
                        </div>
                    </div>
                    <div className='about__imageTwo'>
                        <img
                            src={Snowboarding}
                            alt='army'
                            className='about__imageTwo about__imageTwo--armyTwo'
                        />
                        <div className='about__reme'>
                            <img
                                src={reme}
                                alt='remelogo'
                                className='about__reme'
                            />
                        </div>
                    </div>
                    <div className='about__imageThree'>
                        <img
                            src={armyThree}
                            alt='army'
                            className='about__imageThree about__imageThree--armyThree'
                        />
                        <div className='about__reme'>
                            <img
                                src={reme}
                                alt='remelogo'
                                className='about__reme'
                            />
                        </div>
                    </div>
                    <div className='about__imageFour'>
                        <img
                            src={armyFour}
                            alt='army'
                            className='about__imageFour about__imageFour--armyFour'
                        />
                        <div className='about__reme'>
                            <img
                                src={reme}
                                alt='remelogo'
                                className='about__reme'
                            />
                        </div>
                    </div>
                </div>
                <div className='about__body'>
                    <p className='about__body about__body--text'>
                        Before deciding to become a developer, i spent 10 years
                        in the British Army working as an electronics
                        technician. After a series of unfortunate events, i was
                        no longer physically able to carry on in my engineering
                        trade. Programming became an attractive option for me as
                        I've always been interested in computing. The transition
                        from fixing hardware to coding software was quite
                        smooth.
                        <br />
                        <br />
                        I've always had an afinity for electronics and
                        computers, I enjoy problem solving and logical thinking
                        so this seems like a natural transition for me.
                        <br />
                        <br />
                        Aside from my military background, I've always been
                        hugely into adrenaline sports. I've represented the
                        British Army in Snowboarding, Operational Shooting and
                        Rock climbing against other nations armies at high level
                        events. I'm also a big fan of paintballing, clay pigeon
                        shooting, kayaking, white water rafting and cross
                        country challenges like tough mudder. Since my shoulder
                        injury I've had to stop doing most of those things and
                        have instead gotten into gaming and investing a lot more
                        time into my family life. I occasionally enjoy reading a
                        good book as well.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
