/**
 * Pastel drifting clouds — above sky, below FlyingBirds (z-[2]).
 * Fully rounded — no L commands anywhere, bottom is a Q sag curve.
 * Drifts in groups of 1, 2, or 3 overlapping puffs.
 */

type CloudVariant = "cream" | "peach" | "sky" | "wave"
type CloudShape = "skyscraper" | "tall" | "medium" | "short"

interface Puff {
  variant: CloudVariant
  shape: CloudShape
  /** Width as % of cluster container */
  w: number
  /** Left offset as % of cluster container */
  l: number
  /** Top offset in px */
  t: number
  /** z-index within cluster */
  z: number
}

interface Cluster {
  puffs: Puff[]
  /** Container height in px */
  h: number
  top: string
  width: string
  direction: "ltr" | "rtl"
  duration: 125 | 155 | 165 | 195 | 210
  delay: string
}

const CLUSTERS: Cluster[] = [
  // pair
  { puffs: [
      { variant: "cream", shape: "tall",       w: 72, l: 0,  t: 6,  z: 1 },
      { variant: "sky",   shape: "short",      w: 62, l: 34, t: 22, z: 0 },
    ], h: 115, top: "7%",  width: "min(260px,36vw)", direction: "ltr", duration: 165, delay: "0s" },
  // solo
  { puffs: [
      { variant: "sky",   shape: "short",      w: 100, l: 0, t: 0, z: 0 },
    ], h: 84,  top: "13%", width: "min(180px,25vw)", direction: "rtl", duration: 195, delay: "-28s" },
  // triple
  { puffs: [
      { variant: "wave",  shape: "short",      w: 56, l: 0,  t: 22, z: 1 },
      { variant: "peach", shape: "tall",       w: 64, l: 18, t: 0,  z: 2 },
      { variant: "cream", shape: "short",      w: 54, l: 44, t: 26, z: 0 },
    ], h: 135, top: "4%",  width: "min(300px,42vw)", direction: "ltr", duration: 210, delay: "-62s" },
  // solo
  { puffs: [
      { variant: "wave",  shape: "medium",     w: 100, l: 0, t: 0, z: 0 },
    ], h: 94,  top: "19%", width: "min(195px,27vw)", direction: "rtl", duration: 155, delay: "-12s" },
  // pair
  { puffs: [
      { variant: "cream", shape: "medium",     w: 74, l: 0,  t: 8,  z: 1 },
      { variant: "peach", shape: "short",      w: 60, l: 36, t: 24, z: 0 },
    ], h: 110, top: "22%", width: "min(275px,38vw)", direction: "ltr", duration: 125, delay: "-85s" },
  // solo
  { puffs: [
      { variant: "sky",   shape: "tall",       w: 100, l: 0, t: 0, z: 0 },
    ], h: 100, top: "25%", width: "min(165px,23vw)", direction: "rtl", duration: 165, delay: "-48s" },
  // triple
  { puffs: [
      { variant: "sky",   shape: "short",      w: 55, l: 0,  t: 20, z: 1 },
      { variant: "peach", shape: "skyscraper", w: 62, l: 22, t: 0,  z: 2 },
      { variant: "cream", shape: "short",      w: 52, l: 46, t: 24, z: 0 },
    ], h: 135, top: "28%", width: "min(295px,41vw)", direction: "ltr", duration: 195, delay: "-105s" },
  // pair
  { puffs: [
      { variant: "cream", shape: "skyscraper", w: 72, l: 0,  t: 0,  z: 1 },
      { variant: "wave",  shape: "medium",     w: 64, l: 34, t: 28, z: 0 },
    ], h: 125, top: "10%", width: "min(270px,37vw)", direction: "rtl", duration: 125, delay: "-72s" },
  // solo
  { puffs: [
      { variant: "wave",  shape: "tall",       w: 100, l: 0, t: 0, z: 0 },
    ], h: 100, top: "27%", width: "min(210px,29vw)", direction: "ltr", duration: 155, delay: "-22s" },
  // pair
  { puffs: [
      { variant: "peach", shape: "medium",     w: 76, l: 0,  t: 6,  z: 1 },
      { variant: "sky",   shape: "short",      w: 60, l: 38, t: 24, z: 0 },
    ], h: 110, top: "32%", width: "min(275px,38vw)", direction: "rtl", duration: 210, delay: "-88s" },
]

const VARIANT_STYLES: Record<CloudVariant, { fill: string; stroke: string }> = {
  cream: { fill: "#f7f4e3", stroke: "#d9c9d6" },
  peach: { fill: "#faf3ef", stroke: "#d9c9d6" },
  sky:   { fill: "#eef5f7", stroke: "#c5dde8" },
  wave:  { fill: "#d8e8ec", stroke: "#8ac4d0" },
}

/**
 * All corners are cubic bezier curves — no L commands.
 * Bottom is a single Q (quadratic) that creates a gentle belly/sag.
 * BL corner: M point curves left-then-up.
 * BR corner: last cubic arrives at a point well inside the right edge,
 *   then Q sweeps the bottom back to the start.
 */
const SHAPE_PATHS: Record<CloudShape, { viewBox: string; d: string }> = {
  skyscraper: {
    viewBox: "0 0 200 115",
    d: [
      "M 22 98",
      "C 12 98 8 90 10 80",       // BL fillet: goes left then up
      "C 10 66 16 54 26 48",       // left wall rising
      "C 30 34 50 26 62 34",       // left bump
      "C 66 16 88 10 100 22",      // left of main peak
      "C 108 8 126 10 132 22",     // main peak (tallest)
      "C 140 14 158 20 162 34",    // right of main peak
      "C 168 28 178 38 178 52",    // right bump
      "C 180 66 176 80 166 88",    // right wall descending
      "C 160 96 150 102 138 100",  // BR fillet: curves left
      "Q 80 110 22 98 Z",          // belly bottom back to start
    ].join(" "),
  },
  tall: {
    viewBox: "0 0 200 100",
    d: [
      "M 22 86",
      "C 12 86 8 78 10 68",
      "C 10 56 16 46 26 42",
      "C 32 28 52 22 64 30",
      "C 70 14 92 10 102 22",
      "C 110 10 128 14 134 26",
      "C 142 18 158 26 162 40",
      "C 168 54 166 68 158 76",
      "C 152 84 140 90 128 88",
      "Q 76 98 22 86 Z",
    ].join(" "),
  },
  medium: {
    viewBox: "0 0 200 94",
    d: [
      "M 20 76",
      "C 10 76 8 68 10 60",
      "C 10 48 18 40 28 38",
      "C 34 24 54 18 66 28",
      "C 72 14 94 12 104 22",
      "C 112 12 130 16 136 28",
      "C 144 22 158 30 162 44",
      "C 166 56 162 68 154 76",
      "C 148 82 138 86 126 84",
      "Q 74 90 20 76 Z",
    ].join(" "),
  },
  short: {
    viewBox: "0 0 200 84",
    d: [
      "M 18 66",
      "C 8 66 6 58 8 50",
      "C 10 42 18 36 28 36",
      "C 34 24 54 20 66 28",
      "C 72 16 92 14 102 24",
      "C 110 14 128 18 134 30",
      "C 140 24 156 30 160 44",
      "C 164 54 160 64 152 70",
      "C 146 74 136 76 124 74",
      "Q 72 80 18 66 Z",
    ].join(" "),
  },
}

function CloudSvg({ variant, shape }: { variant: CloudVariant; shape: CloudShape }) {
  const { fill, stroke } = VARIANT_STYLES[variant]
  const { viewBox, d } = SHAPE_PATHS[shape]
  return (
    <svg
      viewBox={viewBox}
      className="h-auto w-full drop-shadow-[0_1px_2px_rgba(42,74,90,0.08)]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={d}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function HeroClouds() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[min(58vh,520px)] overflow-hidden"
      aria-hidden
    >
      {CLUSTERS.map((cluster, ci) => {
        const animName =
          cluster.direction === "ltr" ? "hero-cloud-drift-ltr" : "hero-cloud-drift-rtl"
        const animation = `${animName} ${cluster.duration}s linear infinite`

        return (
          <div
            key={ci}
            className="absolute will-change-transform"
            style={{
              top: cluster.top,
              left: cluster.direction === "ltr" ? "-5%" : undefined,
              right: cluster.direction === "rtl" ? "-5%" : undefined,
              width: cluster.width,
              height: `${cluster.h}px`,
              animation,
              animationDelay: cluster.delay,
            }}
          >
            {cluster.puffs.map((puff, pi) => (
              <div
                key={pi}
                style={{
                  position: "absolute",
                  width: `${puff.w}%`,
                  left: `${puff.l}%`,
                  top: `${puff.t}px`,
                  zIndex: puff.z,
                  opacity: 0.94,
                }}
              >
                <CloudSvg variant={puff.variant} shape={puff.shape} />
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
