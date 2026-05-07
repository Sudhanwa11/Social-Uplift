import { useEffect, useMemo, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import "./TypingAnimation.css"
import { cn } from "../utils/cn" 

export function TypingAnimation({
  children,
  words,
  className,
  duration = 100,
  typeSpeed,
  delay = 0,
  pauseDelay = 1000,
  loop = false,
  // Removed 'as' prop as it caused the crash, using span internally
  startOnView = true,
  showCursor = true,
  blinkCursor = true,
  cursorStyle = "line",
  ...props
}) {
  // FIX: Using a simple motion.span resolves the crash, as it is a stable element.
  // The 'as' prop is ignored here but the className carries the visual style (h1/p).
  const MotionComponent = motion.span; 

  const [displayedText, setDisplayedText] = useState("")
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [phase, setPhase] = useState("typing")
  const elementRef = useRef(null)
  
  const isInView = useInView(elementRef, {
    amount: 0.3,
    once: true,
  })

  // Prepare words/children for animation (only single sentence needed for stable typing)
  const currentWord = useMemo(
    () => (children ? children : words?.[0] || ""),
    [words, children]
  )
  
  const typingSpeed = typeSpeed || duration

  const shouldStart = startOnView ? isInView : true 

  useEffect(() => {
    if (!shouldStart || !currentWord) return

    const timeoutDelay =
      delay > 0 && displayedText === ""
        ? delay // Apply initial delay only once
        : phase === "typing"
          ? typingSpeed
          : pauseDelay // Final pause delay if finished

    const timeout = setTimeout(() => {
      const graphemes = Array.from(currentWord);

      switch (phase) {
        case "typing":
          if (currentCharIndex < graphemes.length) {
            // Type one character at a time
            setDisplayedText(graphemes.slice(0, currentCharIndex + 1).join(""));
            setCurrentCharIndex(currentCharIndex + 1);
          } else {
            // FINISHED TYPING: Transition to pause/stop phase
            setPhase("pause"); 
          }
          break;

        case "pause":
          // The animation stays paused/finished here, as loop=false.
          break;
          
        case "deleting":
          // This phase is inactive in this stable configuration.
          break;
          
        default:
            break;
      }
    }, timeoutDelay)

    return () => clearTimeout(timeout)
  }, [
    shouldStart,
    phase,
    currentCharIndex,
    displayedText,
    currentWord, 
    typingSpeed,
    pauseDelay,
    delay,
  ])

  const isComplete = currentCharIndex >= currentWord.length && phase !== "deleting";

  const shouldShowCursor = showCursor && !isComplete;

  const getCursorChar = () => {
    switch (cursorStyle) {
      case "block":
        return "▌";
      case "underscore":
        return "_";
      case "line":
      default:
        return "|";
    }
  };

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("leading-[5rem] tracking-[-0.02em]", className)}
      {...props}
    >
      {displayedText}
      {shouldShowCursor && (
        <span
          className={cn("inline-block", blinkCursor && "animate-blink-cursor")}
        >
          {getCursorChar()}
        </span>
      )}
    </MotionComponent>
  );
}