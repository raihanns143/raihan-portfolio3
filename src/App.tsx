import React, { useState, useEffect } from 'react';
import { PageView } from './types/portfolio';
import { Header } from './components/Header';
import { FullscreenMenu } from './components/FullscreenMenu';
import { HeroSection } from './components/HeroSection';
import { TechMarquee } from './components/TechMarquee';
import { ImpactSection } from './components/ImpactSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseMeSection } from './components/WhyChooseMeSection';
import { WorkspaceSection } from './components/WorkspaceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactSection } from './components/ContactSection';
import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { BlogsView } from './components/BlogsView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { AssetGuideModal } from './components/AssetGuideModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [apiHealth, setApiHealth] = useState<string>('checking');

  // Verify Node.js Express backend health on mount
  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'healthy') {
          setApiHealth('healthy');
        }
      })
      .catch(() => {
        setApiHealth('fallback');
      });
  }, []);

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (projectId: string) => {
    // Navigate or smooth scroll to projects
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('projects');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('projects');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0E0E10] text-[#F4F4F5] selection:bg-[#DE4A20] selection:text-white">
      {/* 3-Zone Top Bar Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Fullscreen Navigation Drawer (matching video 00:04 & 01:13) */}
      <FullscreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      {/* Personalization & Asset Guide Modal (requested by user) */}
      <AssetGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Terracotta Grid Hero with Abu Raihan portrait & floating cards */}
            <HeroSection
              onNavigate={handleNavigate}
              onSelectProject={handleSelectProject}
            />

            {/* Core Technologies & Tools Marquee Banner */}
            <TechMarquee />

            {/* Impact through Practical Engineering & Metrics */}
            <ImpactSection />

            {/* Interactive Services Accordion with Dynamic Spotlight */}
            <ServicesSection />

            {/* 2-Column Staggered Bento Project Showcase */}
            <ProjectsSection onSelectProject={handleSelectProject} />

            {/* Engineering Process (4 dark cards with red diamond icons) */}
            <ProcessSection />

            {/* Why Choose Me Bento Grid */}
            <WhyChooseMeSection />

            {/* Developer in Action Dual-Monitor Display Frame */}
            <WorkspaceSection />

            {/* Client & Collaborator Testimonials */}
            <TestimonialsSection />

            {/* Pricing Packages (Monthly vs Project based toggle) */}
            <PricingSection onNavigate={handleNavigate} />

            {/* Latest Engineering Insights & Article Reader */}
            <ArticlesSection />

            {/* Let's Create Together Banner with Express Form */}
            <ContactSection />
          </>
        )}

        {currentPage === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {currentPage === 'services' && (
          <ServicesView onNavigate={handleNavigate} />
        )}

        {currentPage === 'blogs' && (
          <BlogsView onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactView onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global High-Impact Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
