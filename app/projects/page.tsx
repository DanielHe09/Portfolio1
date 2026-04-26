import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

const PROJECTS = [
  {
    title: "Dex2",
    description:
      "Chrome Extension AI agent that stores tab info as context and performs actions like analyzing sheets, opening new tabs, and drafting emails.",
    tags: ["LangChain", "MongoDB", "TypeScript", "React", "Python", "FastAPI", "Supabase"],
    url: "https://github.com/DanielHe09/Dex2",
    image: "/Dex2%20Cover.png",
  },
  {
    title: "Lumiere",
    description:
      "Personalized AI concierge service that uses web crawling to generate accurate, tailored itineraries.",
    tags: ["TypeScript", "Supabase", "Next.js", "Vercel"],
    url: "https://lumiere-gamma-self.vercel.app",
    image: "/Lumiere%20Cover.png",
  },
  {
    title: "Say Less",
    description:
      "Web app that converts American Sign Language to speech and speech to text in real time.",
    awardHighlight: "Best Use of ElevenLabs",
    awardContext: "at Hack Trent 2025.",
    tags: ["Python", "FastAPI", "Docker", "Render", "ElevenLabs", "MediaPipe"],
    url: "https://devpost.com/software/sayless-3g8jdl",
    image: "/Sayless%20Cover.png",
  },
  {
    title: "Mini-v",
    description:
      "A C++ inference server that optimizes LLM throughput using a request scheduler with micro-batching and continuous batching delegation.",
    tags: ["C++", "Llama.cpp", "Python"],
    url: "https://github.com/DanielHe09/mini-v",
    image: "/Mini-v%20Cover.png",
  },
  {
    title: "The Fastest Root",
    description:
      "Web app that supports restaurant owners and families in accessing affordable groceries efficiently.",
    awardHighlight: "3rd Place Overall",
    awardContext: "at Ignition Hacks 2024.",
    tags: ["Python", "JavaScript"],
    url: "https://devpost.com/software/the-fastest-root",
    image: "/Fastest%20Root%20Cover.png",
  },
  {
    title: "Motor Shield",
    description:
      "AI-powered motor telemetry and diagnostics dashboard.",
    awardHighlight: "Industry Choice Award",
    awardContext: "at the Canadian Tech Summit 2026.",
    tags: ["Python", "TypeScript", "Next.js"],
    url: "https://motor-shield.vercel.app/Dashboard",
    image: "/Motorshield%20Cover.png",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#d9c9d6] px-6 py-20 text-[#2a4a5a]">
      <ScrollReveal className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold">Projects</h1>
            <p className="mt-2 max-w-2xl text-sm text-[#4a6a7a] md:text-base">
              A collection of my projects and experiences.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#4a9ba0] px-4 py-2 text-sm font-medium text-[#4a9ba0] transition-colors duration-300 hover:bg-[#4a9ba0]/10"
          >
            Back Home
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
          {PROJECTS.map((project, index) => {
            const cardBody = (
              <>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#c5dde8]">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-4 p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-semibold leading-snug text-[#2a4a5a] transition-colors group-hover:text-[#4a9ba0] md:text-2xl">
                      {project.title}
                    </h2>
                    {project.url ? (
                      <span
                        className="shrink-0 text-[#8a9aaa] transition-colors group-hover:text-[#4a9ba0]"
                        aria-hidden
                      >
                        <ExternalLink className="h-5 w-5 md:h-6 md:w-6" />
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm leading-relaxed text-[#5a7a8a] md:text-base">
                    {project.description}
                    {project.awardHighlight ? (
                      <>
                        {" "}
                        <span className="font-semibold text-[#456b7a]">{project.awardHighlight}</span>
                        {project.awardContext ? <> {project.awardContext}</> : null}
                      </>
                    ) : null}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded bg-[#8ac4d0]/20 px-2 py-1 text-xs text-[#4a9ba0]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )

            return project.url ? (
              <Link
                key={`${project.title}-${index}`}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                  className="group flex flex-col overflow-hidden rounded-xl border-2 border-[#4a9ba0] bg-[#f7f4e3] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#4a9ba0]/10 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a9ba0]"
              >
                {cardBody}
              </Link>
            ) : (
              <div
                key={`${project.title}-${index}`}
                className="group flex flex-col overflow-hidden rounded-xl border-2 border-[#4a9ba0] bg-[#f7f4e3] shadow-sm"
              >
                {cardBody}
              </div>
            )
          })}
        </div>
      </ScrollReveal>
    </main>
  )
}
