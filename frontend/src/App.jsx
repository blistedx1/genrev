import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import LeftRail from './components/LeftRail';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import LogoStorySection from './components/LogoStorySection';
import ExpertiseSection from './components/ExpertiseSection';
import ApproachSection from './components/ApproachSection';
import ProjectsAccordion from './components/ProjectsAccordion';
import ProjectGrid from './components/ProjectGrid';
import JournalSection from './components/JournalSection';
import FounderSection from './components/FounderSection';
import ThreeStudioViewer from './components/ThreeStudioViewer';
import StatsSection from './components/StatsSection';
import InstagramFeedSection from './components/InstagramFeedSection';
import ClientsAndReviews from './components/ClientsAndReviews';
import ContactSection from './components/ContactSection';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';
import AdminPage from './pages/AdminPage';

function MainLayout() {
  return (
    <div className="relative min-h-screen bg-[#111215] text-[#E2E1DC] selection:bg-[#C5A880]/30 selection:text-white overflow-x-hidden">
      {/* Fixed Left Vertical Rail matching go.arch reference image */}
      <LeftRail totalSlides={4} />

      {/* Top Navbar */}
      <Navbar />

      <main className="w-full">
        {/* 1. Hero Section with 3D Canvas */}
        <HeroSlider />

        {/* 2. About Genrev Interio Section */}
        <AboutSection />

        {/* 3. The Meaning Behind Our Logo (Brand Philosophy & Origin) */}
        <LogoStorySection />

        {/* 4. Our Expertise - 4 Disciplinary Pillars */}
        <ExpertiseSection />

        {/* 5. Our Approach (Roadmap, Why Genrev, Design Language) */}
        <ApproachSection />

        {/* 6. Our Projects Section */}
        <section id="projects" className="relative py-28 px-6 sm:px-12 lg:pl-36 lg:pr-16 overflow-hidden bg-[#111215]">
          {/* Background Watermark matching go.arch screenshot */}
          <div className="absolute top-12 left-16 watermark-text text-8xl md:text-[14rem] select-none opacity-20">
            Projects
          </div>

          <div className="relative max-w-7xl mx-auto z-10">
            {/* Section Header */}
            <div className="flex flex-col items-center justify-center text-center mb-16">
              <span className="text-xs uppercase tracking-[0.35em] font-mono-num font-semibold mb-2 text-white">
                SELECTED <span className="text-[#C5A880]">WORK</span>
              </span>
              <p className="text-xs md:text-sm text-neutral-400 font-light max-w-xl mb-4">
                Our portfolio represents a diverse range of design and development experiences across residential, luxury villas, corporate, commercial, retail, industrial, institutional, and turnkey interiors.
              </p>
              <span className="w-12 h-[2px] bg-[#C5A880]"></span>
            </div>

            {/* 4-Panel Vertical Expanding Accordion featuring Resolüt Partners & Signature Estates */}
            <ProjectsAccordion />

            {/* Sector Filterable Project Grid */}
            <ProjectGrid />
          </div>
        </section>

        {/* 7. The Genrev Journal: Perspectives on Architecture & Built Environment */}
        <JournalSection />

        {/* 8. Founder: Principal Architect & Urban Planner Profile */}
        <FounderSection />

        {/* 4. Interactive 3D Architectural Studio */}
        <ThreeStudioViewer />

        {/* 5. Stats & Milestone Section with textured giant number */}
        <StatsSection />

        {/* 6. Instagram & Social Feed Showcase */}
        <InstagramFeedSection />

        {/* 7. Clients & Testimonials Showcase */}
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
