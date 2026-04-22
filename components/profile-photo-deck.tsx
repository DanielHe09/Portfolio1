"use client"

import * as React from "react"
import { motion } from "framer-motion"

export type ProfileDeckPhoto = { src: string; alt: string }

function PhotoCard({
  photo,
  position,
  onShuffle,
}: {
  photo: ProfileDeckPhoto
  position: "front" | "middle" | "back"
  onShuffle: () => void
}) {
  const dragRef = React.useRef(0)
  const isFront = position === "front"

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? 2 : position === "middle" ? 1 : 0,
      }}
      animate={{
        rotate:
          position === "front"
            ? "-6deg"
            : position === "middle"
              ? "0deg"
              : "6deg",
        x:
          position === "front"
            ? "0%"
            : position === "middle"
              ? "33%"
              : "66%",
      }}
      drag="x"
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={(e) => {
        dragRef.current = (e as PointerEvent).clientX
      }}
      onDragEnd={(e) => {
        if (dragRef.current - (e as PointerEvent).clientX > 150) {
          onShuffle()
        }
        dragRef.current = 0
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[min(22rem,72vw)] w-[min(18rem,72vw)] select-none place-content-center overflow-hidden rounded-2xl border-2 border-[#4a9ba0]/40 bg-[#f7f4e3]/90 shadow-lg backdrop-blur-sm ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="pointer-events-none h-full w-full object-cover"
        draggable={false}
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  )
}

function buildDeck(photos: ProfileDeckPhoto[], depth = 3): ProfileDeckPhoto[] {
  if (photos.length === 0) return []
  const out: ProfileDeckPhoto[] = []
  for (let i = 0; i < depth; i++) {
    out.push(photos[i % photos.length])
  }
  return out
}

export function ProfilePhotoDeck({ photos }: { photos: ProfileDeckPhoto[] }) {
  const deck = React.useMemo(() => buildDeck(photos, 3), [photos])
  const [order, setOrder] = React.useState(() => deck.map((_, i) => i))

  const ordered = order.map((i) => deck[i]!)

  const shuffle = React.useCallback(() => {
    setOrder((prev) => {
      const [first, ...rest] = prev
      return [...rest, first]
    })
  }, [])

  if (deck.length === 0) return null

  return (
    <div className="flex w-full min-w-0 max-w-full flex-col items-center gap-7">
      <div
        className="relative isolate mx-auto h-[min(22rem,72vw)] w-[min(26rem,88vw)] max-w-full sm:w-[min(26rem,80vw)]"
        aria-label="Photo stack — drag the top image left to see the next"
      >
        {ordered.map((photo, index) => {
          const total = ordered.length
          let position: "front" | "middle" | "back"
          if (total <= 1) position = "front"
          else if (total === 2) position = index === 0 ? "front" : "back"
          else
            position =
              index === 0 ? "front" : index === 1 ? "middle" : "back"

          return (
            <PhotoCard
              key={order[index]}
              photo={photo}
              position={position}
              onShuffle={shuffle}
            />
          )
        })}
      </div>
      {/* Caption anchored to middle card center: x 33% + half card width = 0.83 × card width from deck left */}
      <div className="relative mx-auto min-h-[2.75rem] w-[min(26rem,88vw)] max-w-full pt-1 sm:w-[min(26rem,80vw)]">
        <p className="absolute left-[calc(min(18rem,72vw)*0.83)] top-0 -translate-x-1/2 whitespace-nowrap text-xs leading-snug text-[#7a8a9a]">
          Drag the top photo left to flip through.
        </p>
      </div>
    </div>
  )
}
