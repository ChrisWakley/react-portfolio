import "./App.scss";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
// import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";


const App = () => {

  return (
    <div className='app'>
        <Home />
        <Nav />
        {/* <Landing /> */}
        <About />
    </div>
  );
}

export default App;