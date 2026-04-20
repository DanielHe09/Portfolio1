"use client"

import {
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react"

const REVEAL_DURATION = "0.85s"
const REVEAL_EASE = "cubic-bezier(0.22, 1, 0.36, 1)"
const REVEAL_OFFSET_Y = 28

type ScrollRevealProps = {
  children: ReactNode
  className?: string
}

export function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useLayoutEffect(() => {
    if (typeof window === "undefined") return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReducedMotion(true)
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const style: CSSProperties = reducedMotion
    ? { opacity: 1, transform: "none" }
    : {
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0, 0, 0) scale(1)"
          : `translate3d(0, ${REVEAL_OFFSET_Y}px, 0) scale(0.97)`,
        transition: `opacity ${REVEAL_DURATION} ${REVEAL_EASE}, transform ${REVEAL_DURATION} ${REVEAL_EASE}`,
      }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
