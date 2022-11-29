import "./App.scss";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Landing from "./pages/Landing/Landing";


const App = () => {

  return (
    <div className='app'>
        <Home />
        <Nav />
        <Landing />
    </div>
  );
}

export default App;