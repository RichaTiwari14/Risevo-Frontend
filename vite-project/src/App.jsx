import React, { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import DashboardLayout from './Components/Layout/DashboardLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminList from './pages/AdminList';
import EmployeeList from './pages/EmployeeList';
import EnquiryList from './pages/EnquiryList';
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

import VisionMission from "./Components/Mission/Mission.jsx";
import Cards from "./Components/Cards/Cards.jsx"; 
import VisionPage from "./Components/Mission/Vision.jsx";
import MissionPage from "./Components/Mission/Ourmission.jsx";
import About from "./Components/About/About.jsx";
import LeadershipPage from "./Components/About/Director.jsx";
import EquipmentPage from "./Components/Cards/Equipment.jsx";
import SpecializedPage from "./Components/Cards/Specialized.jsx";
import Quality from "./Components/Cards/Quality.jsx";
import Land from "./Components/Cards/Land.jsx";
import Foundation from "./Components/About/Foundation.jsx";
import WhatsAppIcon from "./Components/Whatsapp/Whatsapp.jsx";
import FloatingSocials from "./Components/Whatsapp/Floating.jsx";
import FloatingLogo from "./Components/Whatsapp/Logo.jsx";

function App() {
  const location = useLocation();

  const hideNavRoutes = ["/login", "/dashboard", "/admin-list", "/employee-list", "/enquiry-list"];
  const shouldShowNav = !hideNavRoutes.includes(location.pathname);

  // ✅ Har route change par page ko bilkul top pe le aao
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

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

      {shouldShowNav && <Header />}

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <FloatingLogo />
              <Services />
              <VisionMission />
              <Cards />
              <Testimonials />
              <WhatsAppIcon />
              <FloatingSocials />
              <Faq />
              <Footer />
            </>
          }
        />

        {/* About page */}
        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />

        {/* Contact page */}
        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Gallery page */}
        <Route
          path="/gallery"
          element={
            <>
              <Gallery />
              <Footer />
            </>
          }
        />

        {/* Services detail pages */}
        <Route path="/residential" element={<Residential />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/turnkey" element={<Turnkey />} />
        <Route path="/infra" element={<Infrastructure />} />

        {/* Vision & Mission full pages */}
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/mission" element={<MissionPage />} />

        {/* Leadership / Directors page */}
        <Route path="/leadership" element={<LeadershipPage />} />

        {/* Equipment & Technical Strength page */}
        <Route path="/equipment" element={<EquipmentPage />} />

        {/* Specialized Areas page */}
        <Route path="/specialized" element={<SpecializedPage />} />

        {/* Quality & Safety Standards page */}
        <Route path="/quality" element={<Quality />} />

        {/* Land Survey & Testing page */}
        <Route path="/land" element={<Land />} />

        {/* Foundation full page */}
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