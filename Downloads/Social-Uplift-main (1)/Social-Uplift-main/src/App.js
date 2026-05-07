// src/App.js
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './styles.css'; // Global Styles

// Import all separated components
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PortfolioModal } from './components/PortfolioModal';
import CreativePro from './components/CreativeProcess';

// Import data and utilities
import { portfolioData } from './data';
import { useSmoothScroll } from './utils/hooks';

export default function App() {
  // Global State
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrollToTopVisible, setIsScrollToTopVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Individual refs (stable across renders)
  const whyUsRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const creativeProcessRef = useRef(null);

  // Stable mapping used by the observer effect
  const sectionRefs = useMemo(() => ({
    'why-us': whyUsRef,
    'services': servicesRef,
    'portfolio': portfolioRef,
    'contact': contactRef,
    'creative-process': creativeProcessRef,
  }), []);

  const handleScroll = useSmoothScroll();

  const toggleNav = useCallback(() => setIsNavOpen(prev => !prev), []);
  
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openModal = useCallback((clientId) => {
    const content = portfolioData.find(item => item.id === clientId);
    if (content) {
      setModalContent(content);
      // Disable body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
  }, []);

  // Robust closeModal: accepts optional event. If called without event, just close.
  const closeModal = useCallback((e) => {
    const isBackdropOrClose =
      e &&
      (e.target.classList.contains('portfolio-modal') || e.target.closest('.close-modal'));
    // If called programmatically (no event) -> close. If event provided -> only close on backdrop/close
    if (!e || isBackdropOrClose) {
      setModalContent(null);
      // Re-enable body scroll
      document.body.style.overflow = '';
    }
  }, []);

  // Ensure body overflow is restored if modalContent becomes null for any reason
  useEffect(() => {
    if (!modalContent) {
      document.body.style.overflow = '';
    }
  }, [modalContent]);

  // Effect 1: Scroll Animations (Intersection Observer)
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe each section
    Object.values(sectionRefs).forEach(ref => {
      if (ref && ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref && ref.current) {
          observer.unobserve(ref.current);
        }
      });
      // safety: restore overflow
      document.body.style.overflow = '';
    };
  }, [sectionRefs]);

  // Effect 2: Scroll to Top Button Visibility (passive listener)
  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsScrollToTopVisible(true);
      } else {
        setIsScrollToTopVisible(false);
      }
    };

    window.addEventListener('scroll', handleScrollVisibility, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  // Effect 3: Handle smooth scrolling for anchor links (global handler)
  useEffect(() => {
    const anchorScroll = (e) => {
      const anchor = e.target.closest && e.target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          handleScroll(e, href);
          // Close mobile nav if open (nice UX)
          setIsNavOpen(false);
        }
      }
    };
    document.addEventListener('click', anchorScroll);
    return () => document.removeEventListener('click', anchorScroll);
  }, [handleScroll]);

  // Effect 4: Close modal on Escape key (keyboard accessibility)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        // Close programmatically (no event)
        closeModal();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [closeModal]);

  // Clean up body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <Header 
        isNavOpen={isNavOpen} 
        toggleNav={toggleNav} 
        handleScroll={handleScroll} 
      />
      
      <main>
        <Hero />
        {/* Pass refs for Intersection Observer to work on these sections */}
        <WhyUs ref={whyUsRef} />
        <Services ref={servicesRef} />
        <Portfolio ref={portfolioRef} openModal={openModal} />
        {/* Render CreativeProcess from its own dedicated file */}
        <CreativePro ref={creativeProcessRef} /> 
        <Contact ref={contactRef} />
      </main>
      
      <Footer />
      
      {/* Modals are rendered outside of the main flow */}
      <PortfolioModal modalContent={modalContent} closeModal={closeModal} />
      
      {/* Scroll to Top Button */}
      <div 
        className={`scroll-to-top ${isScrollToTopVisible ? 'active' : ''}`}
        onClick={scrollToTop}
        role="button"
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up" />
      </div>
    </>
  );
}
