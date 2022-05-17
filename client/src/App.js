import "./App.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegStudentPage from "./components/RegStudentPage/RegStudentPage";
import RegFirmaPage from "./components/RegFirmaPage/RegFirmaPage";
import AddOfferPage from "./components/AddOfferPage/AddOfferPage";
import HomePageStudent from "./components/HomePageStudent/HomePageStudent";
import HomePageAdmin from './components/HomePageAdmin/HomePageStudent'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return <HomePageAdmin />;
}

export default App;
