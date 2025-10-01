"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface TextAnimateProps {
  children: ReactNode
  animation?: "blurInUp" | "fadeIn" | "slideInUp"
  by?: "character" | "word" | "line"
  once?: boolean
  className?: string
  whileInView?: boolean
}

const animations = {
  blurInUp: {
    initial: { opacity: 0, y: 20, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" }
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  },
  slideInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  }
}

export function TextAnimate({ 
  children, 
  animation = "blurInUp", 
  by = "character", 
  once = true,
  className = "",
  whileInView = false
}: TextAnimateProps) {
  const text = typeof children === "string" ? children : ""
  
  if (by === "character") {
    return (
      <motion.span className={className}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={animations[animation].initial}
            animate={whileInView ? undefined : animations[animation].animate}
            whileInView={whileInView ? animations[animation].animate : undefined}
            viewport={{ once }}
            transition={{
              duration: 0.38,
              delay: index * 0.038,
              ease: "easeOut"
            }}
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    )
  }
  
  if (by === "word") {
    return (
      <motion.span className={className}>
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={animations[animation].initial}
            animate={whileInView ? undefined : animations[animation].animate}
            whileInView={whileInView ? animations[animation].animate : undefined}
            viewport={{ once }}
            transition={{
              duration: 0.38,
              delay: index * 0.077,
              ease: "easeOut"
            }}
            style={{ display: "inline-block", marginRight: "0.25em" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    )
  }
  
  // Default: animate as whole text
  return (
    <motion.span
      className={className}
      initial={animations[animation].initial}
      animate={whileInView ? undefined : animations[animation].animate}
      whileInView={whileInView ? animations[animation].animate : undefined}
      viewport={{ once }}
      transition={{
        duration: 0.62,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.span>
  )
}

export function TextAnimateDemo() {
  return (
    <TextAnimate animation="blurInUp" by="character" once>
      Blur in by character
    </TextAnimate>
  )
}
