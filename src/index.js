/*

=========================================================
* Now UI Kit React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2023 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
// Profile Desa
import SejarahPage from "views/ProfilDesa/SejarahPage";
import StrukturPage from "views/ProfilDesa/StrukturPage";
import LembagaPage from "views/ProfilDesa/LembagaPage";
import GeografiPage from "views/ProfilDesa/GeografiPage";
import DemografisPage from "views/ProfilDesa/DemografisPage";
import EkonomiPage from "views/ProfilDesa/EkonomiPage";
// Anggaran Desa
import ApbdPage from "views/Anggaran/Apbd";
// Inventaris Desa
import TanahPage from "views/Inventaris/InventarisTanah";
import BangunanPage from "views/Inventaris/InventarisBangunan";
import JalanPage from "views/Inventaris/InventarisJalan";
import KendaraanPage from "views/Inventaris/InventarisKendaraan";
import PeralatanPage from "views/Inventaris/InventarisPeralatan";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/index" element={<Index />} />
      <Route path="/nucleo-icons" element={<NucleoIcons />} />
      {/* Profil desa */}
      <Route path="/Sejarah-page" element={<SejarahPage />} />
      <Route path="/Struktur-page" element={<StrukturPage />} />
      <Route path="/Lembaga-page" element={<LembagaPage />} />
      <Route path="/Geografis-page" element={<GeografiPage />} />
      <Route path="/Demografis-page" element={<DemografisPage />} />
      <Route path="/Ekonomi-page" element={<EkonomiPage />} />
      {/* Anggaran desa */}
      <Route path="/Apbd-page" element={<ApbdPage />} />
      {/* Inventaris desa */}
      <Route path="/InventarisTanah-page" element={<TanahPage />} />
      <Route path="/InventarisBangunan-page" element={<BangunanPage />} />
      <Route path="/InventarisJalan-page" element={<JalanPage />} />
      <Route path="/InventarisKendaraan-page" element={<KendaraanPage />} />
      <Route path="/InventarisPeralatan-page" element={<PeralatanPage />} />



      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
