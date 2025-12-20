"use client";

import React, { useRef, useMemo } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { cn } from "../utils/cn";

const sizeClasses = {
  sm: "text-lg md:text-xl",
  md: "text-xl md:text-2xl lg:text-3xl",
  lg: "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
  xl: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
  "2xl": "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export default function ScrollReveal({
  children,
  containerClassName,
  textClassName,
  enableBlur = true,
  baseOpacity = 0.1,
  blurStrength = 4,
  staggerDelay = 0.05,
  threshold = 0.4,
  duration = 0.8,
  size = "lg",
  align = "left",
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: threshold });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotation = useTransform(scrollYProgress, [0, 0.5], [2, 0]);

  const words = useMemo(() => {
    if (typeof children !== "string") return [];
    return children.split(/(\s+)/).filter(Boolean);
  }, [children]);

  return (
    <motion.div
      ref={containerRef}
      style={{ rotate: rotation }}
      className={cn("transform-gpu", containerClassName)}
    >
      <motion.p
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={cn(
          "leading-tight font-medium",
          sizeClasses[size],
          alignClasses[align],
          textClassName
        )}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: staggerDelay },
          },
        }}
      >
        {words.map((word, i) =>
          word.trim() === "" ? (
            <span key={i}>{word}</span>
          ) : (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: {
                  opacity: baseOpacity,
                  y: 20,
                  filter: enableBlur ? `blur(${blurStrength}px)` : "none",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration, ease: "easeOut" },
                },
              }}
            >
              {word}
            </motion.span>
          )
        )}
      </motion.p>
    </motion.div>
  );
}
