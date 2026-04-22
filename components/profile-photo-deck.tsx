"use client"

import * as React from "react"
import { motion } from "framer-motion"

export type ProfileDeckPhoto = { src: string; alt: string }

type CardPosition = "front" | "middle" | "back" | "hidden"

function PhotoCard({
  photo,
  position,
  onShuffle,
}: {
  photo: ProfileDeckPhoto
  position: CardPosition
  onShuffle: () => void
}) {
  const dragRef = React.useRef(0)
  const isFront = position === "front"
  const isHidden = position === "hidden"

  const z =
    position === "front" ? 3 : position === "middle" ? 2 : position === "back" ? 1 : 0

  return (
    <motion.div
      style={{ zIndex: z }}
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
      } ${isHidden ? "pointer-events-none" : ""}`}
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

function buildDeck(photos: readonly ProfileDeckPhoto[], depth: number): ProfileDeckPhoto[] {
  if (photos.length === 0) return []
  const out: ProfileDeckPhoto[] = []
  for (let i = 0; i < depth; i++) {
    out.push(photos[i % photos.length])
  }
  return out
}

function slotPosition(index: number, total: number): CardPosition {
  if (total <= 1) return "front"
  if (total === 2) return index === 0 ? "front" : "back"
  if (total === 3) {
    if (index === 0) return "front"
    if (index === 1) return "middle"
    return "back"
  }
  /* 4 slots: same fan as 3, fourth sits under the visible back card */
  if (index === 0) return "front"
  if (index === 1) return "middle"
  if (index === 2) return "back"
  return "hidden"
}

export function ProfilePhotoDeck({ photos }: { photos: readonly ProfileDeckPhoto[] }) {
  const deckDepth = photos.length === 0 ? 0 : photos.length >= 4 ? 4 : 3
  const deck = React.useMemo(() => buildDeck(photos, deckDepth), [photos, deckDepth])
  const photoSrcKey = React.useMemo(() => photos.map((p) => p.src).join("|"), [photos])
  const [order, setOrder] = React.useState(() => Array.from({ length: deckDepth }, (_, i) => i))

  React.useEffect(() => {
    const depth = photos.length === 0 ? 0 : photos.length >= 4 ? 4 : 3
    setOrder(Array.from({ length: depth }, (_, i) => i))
  }, [photoSrcKey, photos.length])

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
        aria-label="Photo stack — drag the top image left to flip through photos"
      >
        {ordered.map((photo, index) => (
          <PhotoCard
            key={order[index]}
            photo={photo}
            position={slotPosition(index, ordered.length)}
            onShuffle={shuffle}
          />
        ))}
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
