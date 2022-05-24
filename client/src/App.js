import "./App.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegStudentPage from "./components/RegStudentPage/RegStudentPage";
import RegFirmaPage from "./components/RegFirmaPage/RegFirmaPage";
import AddOfferPage from "./components/AddOfferPage/AddOfferPage";
import HomePageStudent from "./components/HomePageStudent/HomePageStudent";
import HomePageAdmin from "./components/HomePageAdmin/HomePageAdmin";
import HomePageFirma from "./components/HomePageFirma/HomePageFirma";
import { Routes, Route, Switch } from "react-router-dom";
import AppliedSuscess from "./components/AppliedSucsessPage/AppliedSucsessPage";
import JobStatusForStudent from "./components/JobStatusForStudent/JobStatusForStudent";
import JobStatusForAdmin from "./components/JobStatusForAdmin/JobStatusForAdmin";
import RegSucsessPage from "./components/RegSucsessPage/RegSucsessPage";
import OfferDetail from './components/OfferDetails/OfferDetails';
import ApplayOffer from "./components/ApplyOffer/ApplayOffer";
import AddedSuscess from "./components/OfferAddSucsessPage/AddedSucsessPage";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<RegFirmaPage />} />
      <Route path="loginPage" element={<LoginPage />} />
      <Route path="addedSucsessPage" element={<AddedSuscess />} />
      <Route path="regStudentPage" element={<RegStudentPage />} />
      <Route path="addOfferPage" element={<AddOfferPage />} />
      <Route path="regFirmaPage" element={<RegFirmaPage />} />
      <Route path="homePageStudent/:studentID" element={<HomePageStudent />} />
      <Route path="homePageAdmin/:adminID" element={<HomePageAdmin />} />
      <Route path="homePageFirma/:firmaID" element={<HomePageFirma />} />
      <Route path="appliedSuscess" element={<AppliedSuscess />} />
      <Route
        path="jobStatusForStudent/:studentID"
        element={<JobStatusForStudent />}
      />
      <Route
        path="jobStatusForAdmin/:firmaID"
        element={<JobStatusForAdmin />}
      />
      <Route path="regSucsessPage" element={<RegSucsessPage />} />
    </Routes>
  );
}

export default App;
