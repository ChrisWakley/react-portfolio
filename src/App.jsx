import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Projects from "./pages/Projects/Projects";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const App = () => {
    return (
        <Routes>
            <>
                <Route
                    path='*'
                    element={
                        <>
                            <Home />
                            <Nav />
                            <Landing />
                        </>
                    }
                />
            </>
            <>
                <Route
                    path='/about'
                    element={
                        <>
                            <Home />
                            <Nav />
                            <About />
                        </>
                    }
                />
            </>
            <>
                <Route
                    path='/projects'
                    element={
                        <>
                            <Home />
                            <Nav />
                            <Projects />
                        </>
                    }
                />
            </>
            <>
                <Route
                    path='/contact'
                    element={
                        <>
                            <Home />
                            <Nav />
                            <Contact />
                        </>
                    }
                />
            </>

            {/* <div className='app'>
                <Home />
                <Nav />
                <Landing />
                <About />
                <Projects />
            </div> */}
        </Routes>
    );
};

export default App;
