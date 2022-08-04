import "./App.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegStudentPage from "./components/RegStudentPage/RegStudentPage";
import RegFirmaPage from "./components/RegFirmaPage/RegFirmaPage";
import AddOfferPage from "./components/AddOfferPage/AddOfferPage";
import HomePageStudent from "./components/HomePageStudent/HomePageStudent";
import HomePageAdmin from "./components/HomePageAdmin/HomePageAdmin";
import HomePageFirma from "./components/HomePageFirma/HomePageFirma";
import { Routes, Route } from "react-router-dom";
import AppliedSuscess from "./components/AppliedSucsessPage/AppliedSucsessPage";
import JobStatusForStudent from "./components/JobStatusForStudent/JobStatusForStudent";
import JobStatusForAdmin from "./components/JobStatusForAdmin/JobStatusForAdmin";
import RegSucsessPage from "./components/RegSucsessPage/RegSucsessPage";
import DetailsOffer from "./components/DetailsOffer/DetailsOffer";
import AddedSuscess from "./components/AddedSucsessPage/AddedSucsessPage";
import DeletedSuscess from "./components/DeletedAccess/DeletedSucsessPage";
import AllOffersAdmin from "./components/AllOffersAdmin/AllOffersAdmin";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="addOfferPage" element={<AddOfferPage />} />
        <Route path="addedSucsessPage" exact element={<AddedSuscess />} />
        <Route path="deletedSucsessPage" exact element={<DeletedSuscess />} />
        <Route path="detailsOffer/:offer_id" exact element={<DetailsOffer />} />
        <Route path="allOffersAdmin" element={<AllOffersAdmin />} />
        <Route path="homePageStudent" exact element={<HomePageStudent />} />
        <Route path="homePageAdmin" exact element={<HomePageAdmin />} />
        <Route path="homePageFirma" exact element={<HomePageFirma />} />
        <Route path="appliedSuscess" exact element={<AppliedSuscess />} />
        <Route path="jobStatusForStudent" element={<JobStatusForStudent />} />
        <Route path="jobStatusForAdmin" element={<JobStatusForAdmin />} />
        <Route path="regSucsessPage" element={<RegSucsessPage />} />
      </Route>
      <Route path="/" exact element={<LandingPage />} />
      <Route path="loginPage" exact element={<LoginPage />} />
      <Route path="regFirmaPage" exact element={<RegFirmaPage />} />
      <Route path="regStudentPage" element={<RegStudentPage />} />
      <Route path="*" element={<p>Page NOT Found: ERROR 404!</p>} />
    </Routes>
  );
}

export default App;
