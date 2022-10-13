import React from 'react';
import Accueil from "./Accueil";
import {Route, Routes} from "react-router-dom";
import PartnersPage from "./PartnersPage";
import GymsPage from "./GymsPage";
import PermsPage from "./PermsPage";
import NavBar from "../../components/ui/navbar/NavBar";
import ErrorPage from "./ErrorPage";
import PartnerPage from "./PartnerPage";
import GymPage from "./GymPage";

function Site(props) {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route exact path="/partners" element={<PartnersPage />} />
        <Route exact path="/partner" element={<PartnerPage />} />
        <Route exact path="/gyms" element={<GymsPage />} />
        <Route exact path="/gym" element={<GymPage />} />
        <Route exact path="/perms" element={<PermsPage />} />

        <Route path='*' element={<ErrorPage error_no={404}>La page demandée n'existe pas</ErrorPage>} />
      </Routes>
    </>
  );
}

export default Site;
