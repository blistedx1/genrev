import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import LeftRail from './components/LeftRail';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ProjectsAccordion from './components/ProjectsAccordion';
import ProjectGrid from './components/ProjectGrid';
import ThreeStudioViewer from './components/ThreeStudioViewer';
import StatsSection from './components/StatsSection';
import ClientsAndReviews from './components/ClientsAndReviews';
import ContactSection from './components/ContactSection';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';
import AdminPage from './pages/AdminPage';

function MainLayout() {
  return (
    <div className="relative min-h-screen bg-[#111215] text-[#E2E1DC] overflow-x-hidden selection:bg-[#C5A880]/30 selection:text-white">
      {/* Fixed Left Vertical Rail matching go.arch reference image */}
      <LeftRail totalSlides={4} />

      {/* Top Navbar */}
      <Navbar />

      <main className="w-full">
        {/* 1. Hero Section with 3D Canvas */}
        <HeroSlider />

        {/* 2. About Genrev Interio Section */}
        <AboutSection />

        {/* 3. Our Projects Section */}
        <section id="projects" className="relative py-28 px-6 sm:px-12 lg:pl-36 lg:pr-16 bg-[#111215] overflow-hidden">
          {/* Background Watermark matching go.arch screenshot */}
          <div className="absolute top-12 left-16 watermark-text text-8xl md:text-[14rem] select-none opacity-20">
            Projects
          </div>

          <div className="relative max-w-7xl mx-auto z-10">
            {/* Section Header */}
            <div className="flex flex-col items-center justify-center text-center mb-16">
              <span className="text-xs uppercase tracking-[0.35em] text-white font-mono-num font-semibold mb-2">
                OUR <span className="text-[#C5A880]">PROJECTS</span>
              </span>
              <span className="w-12 h-[2px] bg-[#C5A880]"></span>
            </div>

            {/* 4-Panel Vertical Expanding Accordion matching screenshot */}
            <ProjectsAccordion />

            {/* 3-Column Filterable Project Grid */}
            <ProjectGrid />
          </div>
        </section>

        {/* 4. Interactive 3D Architectural Studio */}
        <ThreeStudioViewer />

        {/* 5. Stats & Milestone Section with textured giant number */}
        <StatsSection />

        {/* 6. Clients & Testimonials Showcase */}
        <ClientsAndReviews />

        {/* 7. Get in Touch Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Deep-Dive Modal */}
      <ProjectModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Home Page */}
          <Route path="/" element={<MainLayout />} />

          {/* Dedicated Secret Admin Panel URL */}
          <Route path="/admin" element={<AdminPage />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
