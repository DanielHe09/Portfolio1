"use client"

/*
  Floats a tug-boat image across the hero's ocean.
  Two nested wrappers so drift (horizontal) and bob/rock can run on
  independent timings without fighting each other.
*/
export default function FloatingBoat() {
  return (
    <div
      className="pointer-events-none absolute -bottom-13 left-0 hero-boat-drift md:-bottom-25"
      style={{
        animation: "hero-boat-drift 42s linear infinite",
        animationDelay: "-8s",
        willChange: "transform",
      }}
      aria-hidden
    >
      <div
        className="hero-boat-bob"
        style={{
          animation: "hero-boat-bob 3.6s ease-in-out infinite",
          transformOrigin: "50% 80%",
          willChange: "transform",
        }}
      >
        <img
          src="/BOAT.png"
          alt=""
          className="h-80 w-80 select-none md:h-[28rem] md:w-[28rem]"
          draggable={false}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}
