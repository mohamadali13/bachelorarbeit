import "./App.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegStudentPage from "./components/RegStudentPage/RegStudentPage";
import RegFirmaPage from "./components/RegFirmaPage/RegFirmaPage";
import AddOfferPage from "./components/AddOfferPage/AddOfferPage";
import HomePageStudent from "./components/HomePageStudent/HomePageStudent";
import HomePageAdmin from "./components/HomePageAdmin/HomePageAdmin";
import HomePageFrima from "./components/HomePageFirma/HomePageFirma";
import { Routes, Route } from "react-router-dom";
import AppliedSuscess from "./components/AppliedSucsessPage/AppliedSucsessPage";
import JobStatusForStudent from "./components/JobStatusForStudent/JobStatusForStudent";
import JobStatusForAdmin from "./components/JobStatusForAdmin/JobStatusForAdmin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="loginPage" element={<LoginPage />} />
      <Route path="regStudentPage" element={<RegStudentPage />} />
      <Route path="AddOfferPage" element={<AddOfferPage />} />
      <Route path="regFirmaPage" element={<RegFirmaPage />} />
      <Route path="homePageStudent" element={<HomePageStudent />} />
      <Route path="homePageAdmin" element={<HomePageAdmin/>} />
      <Route path="homePageFrima" element={<HomePageFrima />} />
      <Route path="appliedSuscess" element={<AppliedSuscess />} />
      <Route path="jobStatusForStudent" element={<JobStatusForStudent />} />
      <Route path="jobStatusForAdmin" element={<JobStatusForAdmin />} />
    </Routes>
  );
}

export default App;
