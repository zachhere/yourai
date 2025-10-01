"use client"

import { animate, motion } from "framer-motion"
import React, { useEffect } from "react"
import { cn } from "../../lib/utils"

export interface AnimatedCardProps {
  className?: string
  title?: React.ReactNode
  description?: React.ReactNode
  icons?: Array<{
    icon: React.ReactNode
    size?: "sm" | "md" | "lg"
    className?: string
  }>
}

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
}

export function AnimatedCard({ className, title, description, icons = [] }: AnimatedCardProps) {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 group",
        "h-[400px] flex flex-col p-8",
        className
      )}
    >
      <div
        className={cn(
          "flex-1 rounded-xl z-40",
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
        )}
      >
        <AnimatedIcons icons={icons} />
      </div>
      {title && (
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white py-2">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">
          {description}
        </p>
      )}
    </div>
  )
}

function AnimatedIcons({ icons }: { icons: AnimatedCardProps["icons"] }) {
  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        {icons?.map((icon, index) => (
          <motion.div
            key={index}
            className={cn(
              sizeMap[icon.size || "lg"],
              "rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]",
              icon.className
            )}
            animate={{
              scale: [1, 1.1, 1],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatDelay: 1,
              delay: index * 0.1,
            }}
          >
            {icon.icon}
          </motion.div>
        ))}
      </div>
      <AnimatedSparkles />
    </div>
  )
}


const AnimatedSparkles = () => (
  <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
    <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
      <Sparkles />
    </div>
  </div>
)

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1
  const randomOpacity = () => Math.random()
  const random = () => Math.random()

  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        />
      ))}
    </div>
  )
}