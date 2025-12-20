import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export const FadeInText = ({ 
  text, 
  className, 
  delay = 0, // Delay before animation starts (in seconds)
  duration = 0.8 // Duration of the fade for each word
}) => {
  // Split text into individual words
  const words = text.split(" ");

  // Parent container variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.12, // Delay between each word
        delayChildren: delay 
      },
    }),
  };

  // Child (word) variants
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
    hidden: {
      opacity: 0,
      y: 20, // Slide up slightly
      filter: "blur(10px)", // Start blurry
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: duration,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "visible", display: "inline-block", lineHeight: "1.2" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{ once: true }}
      className={cn(className)}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.25em", display: "inline-block" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default FadeInText;