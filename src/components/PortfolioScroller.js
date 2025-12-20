import React from "react";

// 'speed' now represents DURATION in seconds. 
// Higher number = Slower speed (e.g., 60 = 60 seconds to loop once).
const PortfolioScroller = ({ children, speed = 60 }) => {
  
  // Flatten children to map them easily
  const originalItems = React.Children.toArray(children);

  return (
    <div 
      className="pf-scroll-wrapper" 
      style={{ 
        overflow: "hidden", 
        width: "100%", 
        padding: "20px 0",
        position: "relative",
        // Pass the speed prop as a CSS variable for the animation duration
        "--scroll-duration": `${speed}s`,
      }}
    >
      <div
        className="pf-scroll-track"
        style={{
          display: "flex",
          width: "max-content",
          willChange: "transform",
          // We use CSS animation for smoothness
          animation: "pf-scroll-left var(--scroll-duration) linear infinite",
        }}
        // Pause on hover for better UX
        onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
      >
        {/* RENDER 2 SETS FOR SEAMLESS LOOP */}
        {[0, 1].map((setIndex) => (
          <React.Fragment key={`set-${setIndex}`}>
            {originalItems.map((child, i) => 
              React.cloneElement(child, { 
                key: `set${setIndex}-${i}`,
                // We use margin-right on items instead of gap on parent
                // This ensures the total width calculation for the loop is pixel-perfect
                style: {
                  ...child.props.style,
                  marginRight: "32px", 
                }
              })
            )}
          </React.Fragment>
        ))}
      </div>

      {/* INJECT STYLES DIRECTLY TO AVOID EXTERNAL CSS DEPENDENCY FOR THIS COMPONENT */}
      <style>{`
        @keyframes pf-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
      `}</style>
    </div>
  );
};

export default PortfolioScroller;