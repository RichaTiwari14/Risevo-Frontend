// src/App.jsx
import React from "react";
import {  Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import DashboardLayout from './Components/Layout/DashboardLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminList from './pages/AdminList';
import EmployeeList from './pages/EmployeeList';
import EnquiryList from './pages/EnquiryList';
import { useLocation } from "react-router-dom";
// ✅ Header ko Nav ki jagah use kar rahe hain
import Header from "./Components/Nav/Nav.jsx";

import Home from "./Components/Home/Home.jsx";
import Services from "./Components/Services/Services.jsx";
import Residential from "./Components/Services/Residential.jsx";
import Commercial from "./Components/Services/Commercial.jsx";
import Turnkey from "./Components/Services/Turnkey.jsx";
import Infrastructure from "./Components/Services/Infrastructure.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Faq from "./Components/Faq/Faq.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Gallery from "./Components/Services/Gallery.jsx";

// Vision + Mission section on home
import VisionMission from "./Components/Mission/Mission.jsx";
import Cards from "./Components/Cards/Cards.jsx"; // 3 cards section (Equipment / etc)

// Full pages for Vision & Mission
import VisionPage from "./Components/Mission/Vision.jsx";
import MissionPage from "./Components/Mission/Ourmission.jsx";

// About section on home
import About from "./Components/About/About.jsx";

// Leadership / Directors full page (CTA from About)
import LeadershipPage from "./Components/About/Director.jsx";

// Equipment & Technical Strength full page
import EquipmentPage from "./Components/Cards/Equipment.jsx";

// Specialized Areas full page
import SpecializedPage from "./Components/Cards/Specialized.jsx";

// Quality & Safety Standards full page
import Quality from "./Components/Cards/Quality.jsx";

// ✅ Foundation full page (ab route se open hoga)
import Foundation from "./Components/About/Foundation.jsx";

function App() {
    const location = useLocation();
const hideNavRoutes = ["/login", "/dashboard", "/admin-list", "/employee-list", "/enquiry-list"];
const shouldShowNav = !hideNavRoutes.includes(location.pathname);
  return (
     <AuthProvider>
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgba(30, 30, 50, 0.9)',
              color: '#fff',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            },
            success: {
              iconTheme: {
                primary: '#6366f1',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      {/* Nav sab pages me common rahega */}
      {shouldShowNav && <Header />}

      {/* Header sab pages me common rahega */}

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />        {/* Services overview section */}
              <VisionMission />
              <Cards />           {/* 3 cards – Equipment / Specialized / Quality */}
              <About />           {/* About the Company, CTA to leadership */}

              {/* ⛔ Foundation ko home se hata diya, ab /foundation page hai */}
              {/* <Foundation /> */}

              <Testimonials />    {/* Client Testimonials */}
              <Gallery />         {/* Project Gallery – id="gallery" */}
              <Contact />         {/* Contact form section */}
              <Faq />             {/* Frequently Asked Questions */}
              <Footer />          {/* Footer section */}
            </>
          }
        />

        {/* Services detail pages */}
        <Route path="/residential" element={<Residential />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/turnkey" element={<Turnkey />} />
        <Route path="/infra" element={<Infrastructure />} />

        {/* Vision & Mission full pages */}
        <Route path="/vision" element={<VisionPage />} />hai 
        <Route path="/mission" element={<MissionPage />} />

        {/* Leadership / Directors page */}
        <Route path="/leadership" element={<LeadershipPage />} />

        {/* Equipment & Technical Strength page */}
        <Route path="/equipment" element={<EquipmentPage />} />

        {/* Specialized Areas page */}
        <Route path="/specialized" element={<SpecializedPage />} />

        {/* Quality & Safety Standards page */}
        <Route path="/quality" element={<Quality />} />

        {/* ✅ Foundation ka naya route (Director jaise hi full page) */}
        <Route path="/foundation" element={<Foundation />} />
          {/* Public Route */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin-list" element={<AdminList />} />
            <Route path="/employee-list" element={<EmployeeList />} />
            <Route path="/enquiry-list" element={<EnquiryList />} />
          </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;