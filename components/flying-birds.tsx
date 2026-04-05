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

// Seagull SVG with synchronized wing flapping and body bob
function Seagull({ 
  size = 60, 
  direction = "right",
  wingPhase = 0 
}: { 
  size?: number
  direction?: "left" | "right"
  wingPhase?: number
}) {
  const flip = direction === "left" ? -1 : 1

  // Both wings move in the same direction.
  // Positive wingOffset = tips go DOWN (downstroke).
  const wingOffset = Math.sin(wingPhase) * 11

  // Body bobs OPPOSITE to wings: rises during downstroke, dips during upstroke.
  const bodyBob = -wingOffset * 0.32
  const bodyY  = 28 + bodyBob
  const headY  = 25 + bodyBob

  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 -4 80 56"
      fill="none"
      style={{ transform: `scaleX(${flip})` }}
    >
      {/* --- Far (left) wing — rendered behind body --- */}
      <path
        d={`M28 ${bodyY + 1} Q12 ${18 + wingOffset} 2 ${8 + wingOffset} Q15 ${16 + wingOffset} 28 ${bodyY - 2} Z`}
        fill="#f0ede0"
        stroke="#d9c9d6"
        strokeWidth="1"
      />
      <path
        d={`M18 ${18 + wingOffset * 0.7} Q10 ${14 + wingOffset} 5 ${10 + wingOffset}`}
        stroke="#d9c9d6"
        strokeWidth="0.5"
        fill="none"
      />
      <path
        d={`M2 ${8 + wingOffset} Q6 ${11 + wingOffset} 12 ${15 + wingOffset} L8 ${10 + wingOffset} L4 ${7 + wingOffset} Z`}
        fill="#4a6a7a"
      />

      {/* --- Tail (moves with body) --- */}
      <path
        d={`M28 ${bodyY - 1} L18 ${bodyY + 2} L28 ${bodyY + 3} Z`}
        fill="#f7f4e3"
      />
      <path
        d={`M20 ${bodyY + 1} L18 ${bodyY + 2} L20 ${bodyY + 3}`}
        stroke="#d9c9d6"
        strokeWidth="0.5"
        fill="none"
      />

      {/* --- Body (bobs with wings) --- */}
      <ellipse cx="40" cy={bodyY} rx="12" ry="5" fill="#f7f4e3" />

      {/* --- Near (right) wing — rendered in front of body --- */}
      <path
        d={`M52 ${bodyY + 1} Q68 ${18 + wingOffset} 78 ${8 + wingOffset} Q65 ${16 + wingOffset} 52 ${bodyY - 2} Z`}
        fill="#f7f4e3"
        stroke="#d9c9d6"
        strokeWidth="1"
      />
      <path
        d={`M62 ${18 + wingOffset * 0.7} Q70 ${14 + wingOffset} 75 ${10 + wingOffset}`}
        stroke="#d9c9d6"
        strokeWidth="0.5"
        fill="none"
      />
      <path
        d={`M78 ${8 + wingOffset} Q74 ${11 + wingOffset} 68 ${15 + wingOffset} L72 ${10 + wingOffset} L76 ${7 + wingOffset} Z`}
        fill="#4a6a7a"
      />

      {/* --- Head, eye, beak (bob with body) --- */}
      <circle cx="52" cy={headY} r="5" fill="#f7f4e3" />
      <circle cx="54" cy={headY - 1} r="1" fill="#2a3a4a" />
      <path
        d={`M57 ${headY} L64 ${headY + 1} L57 ${headY + 3} Z`}
        fill="#e8a87c"
      />
    </svg>
  )
}

export default function FlyingBirds() {
  const [birds, setBirds] = useState<Bird[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Initialize with 3 birds at different positions - 2x larger sizes
    const initialBirds: Bird[] = [
      {
        id: 1,
        startX: -100,
        y: 12 + Math.random() * 18,
        direction: "right",
        speed: 18 + Math.random() * 8,
        size: 110 + Math.random() * 50,
        delay: 0,
        wingPhase: 0,
      },
      {
        id: 2,
        startX: 110,
        y: 18 + Math.random() * 15,
        direction: "left",
        speed: 20 + Math.random() * 6,
        size: 120 + Math.random() * 40,
        delay: 0,
        wingPhase: Math.PI / 2,
      },
      {
        id: 3,
        startX: -50,
        y: 22 + Math.random() * 18,
        direction: "right",
        speed: 16 + Math.random() * 10,
        size: 100 + Math.random() * 60,
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
        y: 8 + Math.random() * 32,
        direction,
        speed: 16 + Math.random() * 12,
        size: 50 + Math.random() * 35,
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
          wingPhase: bird.wingPhase + 0.8,
        }))
      )
    }, 60)

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
