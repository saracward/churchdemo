import './App.css';
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Switch>
    <Route exact path="/">
        <Landing />
       </Route> 
    </Switch>
    <Footer />
  </div>
  );
}

export default App;
