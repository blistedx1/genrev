import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
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
import StatsSection from './components/StatsSection';
import InstagramFeedSection from './components/InstagramFeedSection';
import ClientsAndReviews from './components/ClientsAndReviews';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AnimatedReveal from './components/AnimatedReveal';

// Dynamic Lazy-Loaded Heavy Components for Bundle Splitting
const ThreeStudioViewer = lazy(() => import('./components/ThreeStudioViewer'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));
const AdminPage = lazy(() => import('./pages/AdminPage'));

function StudioLoadingFallback() {
  return (
    <section className="relative py-28 lg:py-32 px-6 sm:px-12 lg:pl-36 lg:pr-16 bg-dark-surface border-t border-b border-white/5 flex items-center justify-center">
      <div className="w-full max-w-7xl h-[580px] md:h-[640px] rounded-2xl bg-card-bg/60 border border-white/5 flex flex-col items-center justify-center shadow-2xl">
        <div className="w-10 h-10 rounded-full border-2 border-transparent border-t-gold animate-spin mb-3"></div>
        <span className="text-xs font-mono-num uppercase tracking-[0.25em] text-gold">Loading 3D Spatial Pavilion...</span>
      </div>
    </section>
  );
}

function PageLoadingFallback() {
  return (
    <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center">
      <div className="w-12 h-12 rounded-full border-2 border-transparent border-t-gold animate-spin mb-3"></div>
      <span className="text-xs font-mono-num uppercase tracking-[0.25em] text-gold">Opening Secure Atelier Database...</span>
    </div>
  );
}

function MainLayout() {
  return (
    <div className="relative min-h-screen bg-dark-bg text-text-primary selection:bg-gold/30 selection:text-white overflow-x-hidden">
      {/* Fixed Left Vertical Rail */}
      <LeftRail totalSlides={4} />

      {/* Top Navbar */}
      <Navbar />

      <main className="w-full">
        {/* 1. Hero Section with 3D Canvas */}
        <HeroSlider />

        {/* 2. About Genrev Interio Section */}
        <AnimatedReveal direction="up" delay={0.1}>
          <AboutSection />
        </AnimatedReveal>

        {/* 3. The Meaning Behind Our Logo (Brand Philosophy & Origin) */}
        <AnimatedReveal direction="up" delay={0.1}>
          <LogoStorySection />
        </AnimatedReveal>

        {/* 4. Our Expertise - 4 Disciplinary Pillars */}
        <AnimatedReveal direction="up" delay={0.1}>
          <ExpertiseSection />
        </AnimatedReveal>

        {/* 5. Our Approach (Roadmap, Why Genrev, Design Language) */}
        <AnimatedReveal direction="up" delay={0.1}>
          <ApproachSection />
        </AnimatedReveal>

        {/* 6. Our Projects Section */}
        <AnimatedReveal direction="up" delay={0.1}>
          <section id="projects" className="relative py-28 lg:py-32 px-6 sm:px-12 lg:pl-36 lg:pr-16 overflow-hidden bg-dark-bg border-b border-white/5">
            {/* Background Watermark matching go.arch screenshot */}
            <div className="absolute top-10 left-8 sm:left-16 lg:left-24 watermark-text text-7xl sm:text-9xl md:text-[13rem] select-none pointer-events-none">
              Projects
            </div>

            <div className="relative max-w-7xl mx-auto z-10">
              {/* Section Header */}
              <div className="flex flex-col items-center justify-center text-center mb-16">
                <span className="text-xs uppercase tracking-[0.35em] font-mono-num font-semibold mb-2 text-white">
                  SELECTED <span className="text-gold">WORK</span>
                </span>
                <p className="text-xs md:text-sm text-neutral-400 font-light max-w-xl mb-4">
                  Our portfolio represents a diverse range of design and development experiences across residential, luxury villas, corporate, commercial, retail, industrial, institutional, and turnkey interiors.
                </p>
                <span className="w-12 h-[2px] bg-gold"></span>
              </div>

              {/* 4-Panel Vertical Expanding Accordion featuring Resolüt Partners & Signature Estates */}
              <ProjectsAccordion />

              {/* Sector Filterable Project Grid */}
              <ProjectGrid />
            </div>
          </section>
        </AnimatedReveal>

        {/* 7. The Genrev Journal: Perspectives on Architecture & Built Environment */}
        <AnimatedReveal direction="up" delay={0.1}>
          <JournalSection />
        </AnimatedReveal>

        {/* 8. Founder: Principal Architect & Urban Planner Profile */}
        <AnimatedReveal direction="up" delay={0.1}>
          <FounderSection />
        </AnimatedReveal>

        {/* 9. Interactive 3D Architectural Studio */}
        <AnimatedReveal direction="up" delay={0.1}>
          <Suspense fallback={<StudioLoadingFallback />}>
            <ThreeStudioViewer />
          </Suspense>
        </AnimatedReveal>

        {/* 10. Stats & Milestone Section with textured giant number */}
        <AnimatedReveal direction="up" delay={0.1}>
          <StatsSection />
        </AnimatedReveal>

        {/* 11. Instagram & Social Feed Showcase */}
        <AnimatedReveal direction="up" delay={0.1}>
          <InstagramFeedSection />
        </AnimatedReveal>

        {/* 12. Clients & Testimonials Showcase */}
        <AnimatedReveal direction="up" delay={0.1}>
          <ClientsAndReviews />
        </AnimatedReveal>

        {/* 13. Get in Touch Contact Section */}
        <AnimatedReveal direction="up" delay={0.1}>
          <ContactSection />
        </AnimatedReveal>
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Deep-Dive Modal */}
      <Suspense fallback={null}>
        <ProjectModal />
      </Suspense>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <Routes location={location}>
          {/* Public Home Page */}
          <Route path="/" element={<MainLayout />} />

          {/* Dedicated Secret Admin Panel URL */}
          <Route 
            path="/admin" 
            element={
              <Suspense fallback={<PageLoadingFallback />}>
                <AdminPage />
              </Suspense>
            } 
          />

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}

