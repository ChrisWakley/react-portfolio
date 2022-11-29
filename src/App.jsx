import "./App.scss";
import Home from "./pages/HomePage/Home";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";


const App = () => {

  return (
    <div className='app'>
      {/* <div className="app__navigation"> */}
        <Home />
        <Nav />
      {/* </div>
      <div className="app__landing"> */}
        <Landing />
      {/* </div> */}
    </div>
    
  );
}

export default App;
