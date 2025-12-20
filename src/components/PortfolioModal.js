import React, { useCallback, useEffect, useRef } from 'react';
import { clientTestimonials } from '../data';
import CustomVideoPlayer from './CustomVideoPlayer';
import './PortfolioModal.css';

// --- ASSET IMPORTS ---
// Ensure these paths match your project structure exactly
import DoshiVideo from '../assets/Doshi03.mp4';
import DoshiTh from '../assets/Doshi04.png'

import LumosVideo from '../assets/Lumos02.mp4';
import LumosTh from '../assets/Lumos04.png';

import NiorVideo from '../assets/niorvid2.mp4';
import NiorTh from '../assets/nior04.png';

import GirlsVideo from '../assets/Girls03.mp4';
import GirlsTh from '../assets/Girls04.png';

import HovvVideo from '../assets/Hovvo1.mp4';
import HovvTh from '../assets/Hovv04.png';

import InfiniteVideo from '../assets/Infinite01.mp4';
import InfiniteTh from '../assets/Infinite04.png';

import JainVideo from '../assets/Jainlife03.mp4';
import JainTh from '../assets/JainLife04.png';

// Fallback/Placeholder if needed
import PlaceholderImg from '../assets/GirlsFlavourMainLogo.jpg'; // Or any default

const PortfolioModal = ({ modalContent, closeModal }) => {
  const modalRef = useRef(null);

  // --- 1. CONFIGURATION: Map Client ID to Media ---
  const getClientMedia = (id) => {
    switch (id) {
      case 'doshi-design':
        return { type: 'video', src: DoshiVideo, poster: DoshiTh }; 
      case 'girls-flavour':
        return { type: 'video', src: GirlsVideo, poster: GirlsTh };
      case 'how-patio':
        return { type: 'video', src: HovvVideo, poster: HovvTh };
      case 'infinite-proptech':
        return { type: 'video', src: InfiniteVideo, poster: InfiniteTh };
      case 'jain-life':
        return { type: 'video', src: JainVideo, poster: JainTh };
      case 'lumos-cafe':
        return { type: 'video', src: LumosVideo, poster: LumosTh }; 
      case 'nior-cafe':
        return { type: 'video', src: NiorVideo, poster: NiorTh };
      default:
        // Fallback for any other clients not listed
        return { type: 'image', src: PlaceholderImg };
    }
  };

  // --- 2. MODAL LOGIC (Close on Click/Esc) ---
  const handleModalClick = useCallback((e) => {
    if (e.target.classList && e.target.classList.contains('portfolio-modal')) {
      closeModal();
    }
  }, [closeModal]);

  useEffect(() => {
    if (!modalContent) return;
    const prevActive = document.activeElement;
    modalRef.current?.focus?.();

    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
      prevActive?.focus?.();
    };
  }, [modalContent, closeModal]);

  if (!modalContent) return null;

  const {
    title = '',
    subtitle = '',
    services = [],
    results = [],
    id,
  } = modalContent;

  // --- 3. DATA PREPARATION ---
  const mediaData = getClientMedia(id);

  // Testimonial Parsing
  const fullTestimonial = clientTestimonials && id ? clientTestimonials[id] : null;
  let testimonialQuote = 'Testimonial data unavailable.';
  let testimonialClient = '';

  if (fullTestimonial) {
    if (typeof fullTestimonial === 'string') {
      const parts = fullTestimonial.split(' - ');
      testimonialQuote = parts[0] || testimonialQuote;
      testimonialClient = parts[1] || '';
    } else if (typeof fullTestimonial === 'object') {
      testimonialQuote = fullTestimonial.quote || testimonialQuote;
      testimonialClient = fullTestimonial.author || '';
    }
  }

  // --- 4. RENDER ---
  return (
    <div
      className={`portfolio-modal ${id ? 'active' : ''}`}
      id={`${id}-modal`}
      onClick={handleModalClick}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      ref={modalRef}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button
          className="close-modal"
          onClick={() => closeModal()}
          aria-label="Close modal"
        >
          <i className="fas fa-times" aria-hidden="true"></i>
        </button>

        {/* Header */}
        <div className="modal-header">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        {/* Body Grid: Left Media | Right Details */}
        <div className="modal-body stacked-layout">
          
          {/* --- LEFT: SINGLE MEDIA ITEM --- */}
          <div className="modal-media-section">
            {mediaData.type === 'video' ? (
              <CustomVideoPlayer 
                src={mediaData.src} 
                thumbnail={mediaData.poster} // Optional thumbnail before playing
                className="modal-featured-video"
              />
            ) : (
              <div className="modal-featured-image-wrapper">
                <img 
                  src={mediaData.src} 
                  alt={`${title} highlight`} 
                  className="modal-featured-image"
                />
              </div>
            )}
          </div>

          {/* --- RIGHT: DETAILS --- */}
          <div className="modal-details-right">
            <h3>Services Provided</h3>
            <ul className="services-list">
              {Array.isArray(services) && services.length ? (
                services.map((service, index) => <li key={index}>{service}</li>)
              ) : (
                <li>Services not listed.</li>
              )}
            </ul>

            <div className="testimonial">
              <p>{testimonialQuote}</p>
              {testimonialClient && <p className="client">- {testimonialClient}</p>}
            </div>

            <div className="results">
              <h4>Campaign Results</h4>
              <div className="results-grid">
                {Array.isArray(results) && results.length ? (
                  results.map((result, index) => (
                    <div className="result-item" key={index}>
                      <div className="result-value">{result.value}</div>
                      <div className="result-label">{result.label}</div>
                    </div>
                  ))
                ) : (
                  <div>No results data available.</div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export {PortfolioModal};
export default PortfolioModal;