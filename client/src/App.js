import "./App.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegStudentPage from "./components/RegStudentPage/RegStudentPage";
import RegFirmaPage from "./components/RegFirmaPage/RegFirmaPage";
import AddOfferPage from "./components/AddOfferPage/AddOfferPage";
import HomePageStudent from "./components/HomePageStudent/HomePageStudent";
import HomePageAdmin from './components/HomePageAdmin/HomePageAdmin';
import HomePageFrima from './components/HomePageFirma/HomePageFirma';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppliedSuscess from "./components/AppliedSucsessPage/AppliedSucsessPage";
import JobStatusForStudent from "./components/JobStatusForStudent/JobStatusForStudent";
function App() {
  return <JobStatusForStudent />;
}

export default App;
