import "./App.scss";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Projects from "./pages/Projects/Projects";
// import Landing from "./pages/Landing/Landing";
// import About from "./pages/About/About";
// import Projects from "./pages/Projects/Projects";


const App = () => {

  return (
    <div className='app'>
        <Home />
        <Nav />
        {/* <Landing /> */}
        {/* <About /> */}
        {/* <Projects /> */}
        <Projects />
    </div>
  );
}

export default App;