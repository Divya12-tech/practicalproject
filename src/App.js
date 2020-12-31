import logo from "./logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import ContactDetail from "./components/contact-detail";
import Favourites from "./components/favourites";
import NavBar from "./components/navbar"
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <Router>
      <NavBar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact/:id" component={ContactDetail} />
        <Route exact path="/favourites" component={Favourites} />
      </Router>
    </div>
  );
};

export default App;
