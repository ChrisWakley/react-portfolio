import "./HomeStyling/HomeMain.scss";
import logoImg from "../../assets/images/logo.png";

const Home = () => {


    return (
        <div className="home">
            <header className="home__header">
                <div className="home__logo">
                    <img src={logoImg} alt="logo" className="home__logo home__logo--image"/>
                </div>
                <h1 className="home__text">
                    <p className="home__text home__text--name">Chris Wakley</p>
                </h1>
            </header>
        </div>
    )
}

export default Home;