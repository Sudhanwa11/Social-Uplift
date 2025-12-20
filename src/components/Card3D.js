import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback // Added useCallback for robustness
} from "react";
import { cn } from "../utils/cn"; // Corrected path to local utility file

// --- Context and Hook ---

const MouseEnterContext = createContext(undefined);

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};


// --- Card Components ---

export const CardContainer = ({
  children,
  className,
  containerClassName,
  onClick
}) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  // Using useCallback for performance and dependency stability
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  }, []);

  const handleMouseEnter = useCallback((e) => {
    setIsMouseEntered(true);
  }, []);

  const handleMouseLeave = useCallback((e) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  }, []);

  // Pass onClick handler down to the interactive element
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      {/* Outer wrapper to manage perspective and positioning */}
      <div
        className={cn(
          // Adjusted py-20 to p-0 since the parent layout controls padding
          "w-full h-full flex items-center justify-center p-0", 
          containerClassName
        )}
        style={{
          perspective: "1000px",
        }}
      >
        {/* Inner container that receives the 3D transforms */}
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={onClick} // Pass the click handler here
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear h-full",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        // Removed hardcoded w-96, h-96 size constraints
        "[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] w-full h-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();

  const handleAnimations = useCallback(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);
  
  useEffect(() => {
    handleAnimations();
  }, [handleAnimations]);

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};
