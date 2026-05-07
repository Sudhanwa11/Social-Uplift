import { useCallback } from 'react';

/**
 * Initializes the Vanta.js HALO effect.
 * @param {React.RefObject<HTMLDivElement>} vantaRef - Ref attached to the Vanta container.
 * @returns {() => void} Cleanup function to destroy the effect.
 */
export const initVanta = (vantaRef) => {
  if (window.VANTA && vantaRef.current) {
    let vantaEffect = window.VANTA.HALO({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      baseColor: 0xf8c8dc, 
      backgroundColor: 0x0, 
      amplitudeFactor: 3.00,
      size: 2.20
    });

    const handleResize = () => {
      if (vantaEffect) vantaEffect.resize();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function: destroys the Vanta effect and removes the resize listener
    return () => {
      window.removeEventListener('resize', handleResize);
      if (vantaEffect) vantaEffect.destroy();
    };
  }
};

/**
 * Custom hook for smooth scrolling to anchor tags, considering the fixed header.
 * @returns {(e: Event, targetId: string) => void} The smooth scroll handler.
 */
export const useSmoothScroll = () => {
  const handleScroll = useCallback((e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if(targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for fixed header height
        behavior: 'smooth'
      });
    }
  }, []);
  return handleScroll;
};

/**
 * Creates and initializes the dynamic gradual blur effect (replicates original JS).
 * @param {HTMLDivElement} container - The ref for the overall gradual blur section.
 * @param {number} strength - Blur strength multiplier.
 * @param {number} divCount - Number of blur layers.
 */
export const createGradualBlur = (container, strength = 2, divCount = 5) => {
    const blurContainer = container.querySelector('.gradual-blur');
    const blurInner = blurContainer.querySelector('.gradual-blur-inner');
    
    if (!blurInner) return;

    // Clear existing layers
    blurInner.innerHTML = '';
    
    // Create blur layers
    for (let i = 1; i <= divCount; i++) {
        const progress = i / divCount;
        const blurValue = 0.0625 * (progress * divCount + 1) * strength;
        
        const p1 = ((100 / divCount) * i - (100 / divCount)).toFixed(1);
        const p2 = ((100 / divCount) * i).toFixed(1);
        
        const layer = document.createElement('div');
        layer.style.position = 'absolute';
        layer.style.inset = '0';
        layer.style.maskImage = `linear-gradient(to bottom, transparent ${p1}%, black ${p2}%)`;
        layer.style.webkitMaskImage = `linear-gradient(to bottom, transparent ${p1}%, black ${p2}%)`;
        layer.style.backdropFilter = `blur(${blurValue.toFixed(3)}rem)`;
        layer.style.webkitBackdropFilter = `blur(${blurValue.toFixed(3)}rem)`;
        layer.style.opacity = '1';
        
        blurInner.appendChild(layer);
    }
};
