"use client"

import { useEffect, useState } from "react"

interface Bird {
  id: number
  startX: number
  y: number
  direction: "left" | "right"
  speed: number
  size: number
  delay: number
  wingPhase: number
}

// Simple seagull SVG shape inspired by the reference image
function Seagull({ 
  size = 30, 
  direction = "right",
  wingPhase = 0 
}: { 
  size?: number
  direction?: "left" | "right"
  wingPhase?: number
}) {
  const flip = direction === "left" ? -1 : 1
  // Wing animation - subtle up/down movement
  const wingOffset = Math.sin(wingPhase) * 3
  
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 60 36"
      fill="none"
      style={{ transform: `scaleX(${flip})` }}
    >
      {/* Body */}
      <ellipse cx="30" cy="20" rx="8" ry="4" fill="#f7f4e3" />
      {/* Head */}
      <circle cx="38" cy="18" r="3" fill="#f7f4e3" />
      {/* Beak */}
      <path d="M41 18 L45 19 L41 20 Z" fill="#e8a87c" />
      {/* Left wing */}
      <path
        d={`M22 20 Q10 ${12 + wingOffset} 5 ${8 + wingOffset} Q12 ${14 + wingOffset} 22 18 Z`}
        fill="#f7f4e3"
        stroke="#d9c9d6"
        strokeWidth="0.5"
      />
      {/* Left wing tip (dark) */}
      <path
        d={`M5 ${8 + wingOffset} Q8 ${10 + wingOffset} 10 ${12 + wingOffset} L7 ${9 + wingOffset} Z`}
        fill="#4a6a7a"
      />
      {/* Right wing */}
      <path
        d={`M38 20 Q50 ${12 - wingOffset} 55 ${8 - wingOffset} Q48 ${14 - wingOffset} 38 18 Z`}
        fill="#f7f4e3"
        stroke="#d9c9d6"
        strokeWidth="0.5"
      />
      {/* Right wing tip (dark) */}
      <path
        d={`M55 ${8 - wingOffset} Q52 ${10 - wingOffset} 50 ${12 - wingOffset} L53 ${9 - wingOffset} Z`}
        fill="#4a6a7a"
      />
      {/* Tail */}
      <path d="M22 19 L16 21 L22 22 Z" fill="#f7f4e3" />
    </svg>
  )
}

export default function FlyingBirds() {
  const [birds, setBirds] = useState<Bird[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Initialize with 3 birds at different positions
    const initialBirds: Bird[] = [
      {
        id: 1,
        startX: -100,
        y: 15 + Math.random() * 20,
        direction: "right",
        speed: 15 + Math.random() * 10,
        size: 25 + Math.random() * 15,
        delay: 0,
        wingPhase: 0,
      },
      {
        id: 2,
        startX: 110,
        y: 20 + Math.random() * 15,
        direction: "left",
        speed: 18 + Math.random() * 8,
        size: 30 + Math.random() * 10,
        delay: 0,
        wingPhase: Math.PI / 2,
      },
      {
        id: 3,
        startX: -50,
        y: 25 + Math.random() * 20,
        direction: "right",
        speed: 12 + Math.random() * 12,
        size: 20 + Math.random() * 15,
        delay: 0,
        wingPhase: Math.PI,
      },
    ]
    setBirds(initialBirds)

    // Spawn new birds periodically
    let birdIdCounter = 4
    const spawnInterval = setInterval(() => {
      const direction = Math.random() > 0.5 ? "right" : "left"
      const newBird: Bird = {
        id: birdIdCounter++,
        startX: direction === "right" ? -100 : 110,
        y: 10 + Math.random() * 35,
        direction,
        speed: 12 + Math.random() * 15,
        size: 20 + Math.random() * 20,
        delay: 0,
        wingPhase: Math.random() * Math.PI * 2,
      }
      
      setBirds(prev => {
        // Keep max 6 birds to avoid too many animations
        const filtered = prev.length > 5 ? prev.slice(1) : prev
        return [...filtered, newBird]
      })
    }, 3000) // New bird every 3 seconds

    return () => clearInterval(spawnInterval)
  }, [])

  // Wing flapping animation
  useEffect(() => {
    if (!mounted) return
    
    const wingInterval = setInterval(() => {
      setBirds(prev => 
        prev.map(bird => ({
          ...bird,
          wingPhase: bird.wingPhase + 0.5,
        }))
      )
    }, 100)

    return () => clearInterval(wingInterval)
  }, [mounted])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
      {birds.map((bird) => (
        <div
          key={bird.id}
          className="absolute"
          style={{
            top: `${bird.y}%`,
            left: bird.direction === "right" ? `${bird.startX}%` : undefined,
            right: bird.direction === "left" ? `${110 - bird.startX}%` : undefined,
            animation: `fly-${bird.direction} ${bird.speed}s linear infinite`,
            animationDelay: `${bird.delay}s`,
            opacity: 0.9,
          }}
        >
          <Seagull 
            size={bird.size} 
            direction={bird.direction}
            wingPhase={bird.wingPhase}
          />
        </div>
      ))}
      <style jsx>{`
        @keyframes fly-right {
          0% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(25vw) translateY(-8px);
          }
          50% {
            transform: translateX(50vw) translateY(5px);
          }
          75% {
            transform: translateX(75vw) translateY(-5px);
          }
          100% {
            transform: translateX(120vw) translateY(0);
          }
        }
        @keyframes fly-left {
          0% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(-25vw) translateY(-10px);
          }
          50% {
            transform: translateX(-50vw) translateY(8px);
          }
          75% {
            transform: translateX(-75vw) translateY(-6px);
          }
          100% {
            transform: translateX(-120vw) translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
