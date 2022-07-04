import "./App.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegStudentPage from "./components/RegStudentPage/RegStudentPage";
import RegFirmaPage from "./components/RegFirmaPage/RegFirmaPage";
import AddOfferPage from "./components/AddOfferPage/AddOfferPage";
import HomePageStudent from "./components/HomePageStudent/HomePageStudent";
import HomePageAdmin from "./components/HomePageAdmin/HomePageAdmin";
import HomePageFirma from "./components/HomePageFirma/HomePageFirma";
import { Routes, Route, useNavigate } from "react-router-dom";
import AppliedSuscess from "./components/AppliedSucsessPage/AppliedSucsessPage";
import JobStatusForStudent from "./components/JobStatusForStudent/JobStatusForStudent";
import JobStatusForAdmin from "./components/JobStatusForAdmin/JobStatusForAdmin";
import RegSucsessPage from "./components/RegSucsessPage/RegSucsessPage";
import OfferDetail from "./components/OfferDetails/OfferDetails";
import ApplayOffer from "./components/ApplyOffer/ApplayOffer";
import AddedSuscess from "./components/OfferAddSucsessPage/AddedSucsessPage";
import ProtectedRoutes from "./ProtectedRoutes";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { isJwtExpired } from 'jwt-check-expiration';

var jwt = require('jsonwebtoken');

function App() {
  const navigate = useNavigate();
  

  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="addOfferPage" element={<AddOfferPage />} />
      </Route>
      <Route path="/" exact element={<RegFirmaPage />} />
      <Route path="loginPage" exact element={<LoginPage />} />
      <Route path="addedSucsessPage" exact element={<AddedSuscess />} />
      <Route path="regStudentPage" element={<RegStudentPage />} />

      <Route path="regFirmaPage" exact element={<RegFirmaPage />} />
      <Route path="homePageStudent" exact element={<HomePageStudent />} />
      <Route path="homePageAdmin" exact element={<HomePageAdmin />} />
      <Route path="homePageFirma" exact element={<HomePageFirma />} />
      <Route path="appliedSuscess" exact element={<AppliedSuscess />} />
      <Route path="jobStatusForStudent" element={<JobStatusForStudent />} />
      <Route path="jobStatusForAdmin" element={<JobStatusForAdmin />} />
      <Route path="regSucsessPage" element={<RegSucsessPage />} />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
}

export default App;
