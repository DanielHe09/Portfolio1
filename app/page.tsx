import { Github, Linkedin, Twitter, Mail, ExternalLink, MapPin, Briefcase } from "lucide-react"
import Link from "next/link"
import FlyingBirds from "@/components/flying-birds"
import HeroClouds from "@/components/hero-clouds"

// Color palette from the image:
// Soft cream: #f7f4e3
// Peachy pink: #f5ddd5
// Dusty lavender: #d9c9d6
// Teal ocean: #4a9ba0
// Light sky blue: #8ac4d0
// Pale blue: #c5dde8

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
      "Web app that converts American Sign Language to speech and speech to text in real time; Best use of ElevenLabs at Hack Trent 2025.",
    tags: ["Python", "FastAPI", "Docker", "Render", "ElevenLabs", "MediaPipe"],
    url: "https://devpost.com/software/sayless-3g8jdl",
    image: "/Sayless%20Cover.png",
  },
  {
    title: "The Fastest Root",
    description:
      "Web app that supports restaurant owners and families in accessing affordable groceries efficiently; 3rd place overall at Ignition Hacks 2024.",
    tags: ["Python", "JavaScript"],
    url: "https://devpost.com/software/the-fastest-root",
    image: "/Fastest%20Root%20Cover.png",
  },
  {
    title: "Motor Shield",
    description:
      "AI-powered motor telemetry and diagnostics dashboard; received the Industry Choice award at the Canadian Tech Summit.",
    tags: ["Python", "TypeScript", "Next.js"],
    url: "https://motor-shield.vercel.app/Dashboard",
    image: "/Motorshield%20Cover.png",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#c5dde8] text-[#2a4a5a]">
      {/* Hero Section with Sunset Sky and Ocean Waves */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Sunset sky gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f4e3] via-[#f5ddd5] via-40% via-[#d9c9d6] via-60% to-[#8ac4d0] z-0" />
        
        {/* Sun glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-radial rounded-full bg-[#f7f4e3] opacity-80 blur-2xl z-[1]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#fff8e7] rounded-full opacity-90 blur-sm z-[1]" />

        {/* Pastel drifting clouds — behind birds */}
        <HeroClouds />

        {/* Flying birds animation */}
        <FlyingBirds />

        {/* Ocean waves */}
        <div className="absolute bottom-0 left-0 right-0 z-[2]">
          {/* Back wave - deepest */}
          <svg
            className="absolute bottom-32 w-full h-48"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#4a9ba0"
              fillOpacity="0.3"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            >
              <animate
                attributeName="d"
                dur="12s"
                repeatCount="indefinite"
                values="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,181.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </path>
          </svg>

          {/* Middle wave */}
          <svg
            className="absolute bottom-16 w-full h-48"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#4a9ba0"
              fillOpacity="0.5"
              d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,218.7C672,213,768,235,864,245.3C960,256,1056,256,1152,240C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            >
              <animate
                attributeName="d"
                dur="8s"
                repeatCount="indefinite"
                values="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,218.7C672,213,768,235,864,245.3C960,256,1056,256,1152,240C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,245.3C672,235,768,213,864,218.7C960,224,1056,256,1152,266.7C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,218.7C672,213,768,235,864,245.3C960,256,1056,256,1152,240C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </path>
          </svg>

          {/* Front wave - closest */}
          <svg
            className="absolute bottom-0 w-full h-40"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#4a9ba0"
              fillOpacity="0.8"
              d="M0,288L48,277.3C96,267,192,245,288,240C384,235,480,245,576,261.3C672,277,768,299,864,293.3C960,288,1056,256,1152,234.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            >
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="M0,288L48,277.3C96,267,192,245,288,240C384,235,480,245,576,261.3C672,277,768,299,864,293.3C960,288,1056,256,1152,234.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,192L48,197.3C96,203,192,213,288,234.7C384,256,480,288,576,293.3C672,299,768,277,864,261.3C960,245,1056,235,1152,240C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,288L48,277.3C96,267,192,245,288,240C384,235,480,245,576,261.3C672,277,768,299,864,293.3C960,288,1056,256,1152,234.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </path>
          </svg>

          {/* Ocean floor */}
          <div className="absolute bottom-0 w-full h-8 bg-[#4a9ba0]" />
        </div>

        {/* Soft radial scrim that recedes the scene behind the name */}
        <div
          className="absolute z-[9] pointer-events-none"
          style={{
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 38% at 50% 44%, rgba(247,244,227,0.28) 0%, transparent 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-[#3a7a80] text-lg md:text-2xl font-semibold mb-2 tracking-[0.3em] uppercase"
            style={{ animation: "hero-fade-up 0.7s ease-out 0.1s both" }}
          >
            Hi, I&apos;m
          </p>
          <h1
            className="leading-none mb-10 mt-2"
            style={{
              fontFamily: "var(--font-pacifico)",
              fontSize: "clamp(5rem, 16vw, 11rem)",
              color: "#1a3040",
              textShadow:
                "0 2px 0 rgba(255,255,255,0.35), 0 6px 24px rgba(26,48,64,0.18)",
              animation: "hero-name-in 0.85s cubic-bezier(0.22,1,0.36,1) 0.25s both",
            }}
          >
            Daniel
          </h1>
          <div className="flex items-center justify-center gap-6 mb-12">
            <Link
              href="https://github.com/DanielHe09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#d9c9d6]/50 hover:bg-[#4a9ba0]/30 text-[#4a6a7a] hover:text-[#4a9ba0] transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/daniel-he-1309b2294/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#d9c9d6]/50 hover:bg-[#4a9ba0]/30 text-[#4a6a7a] hover:text-[#4a9ba0] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com/DanielHe09"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#d9c9d6]/50 hover:bg-[#4a9ba0]/30 text-[#4a6a7a] hover:text-[#4a9ba0] transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:dhe72@uwo.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#d9c9d6]/50 hover:bg-[#4a9ba0]/30 text-[#4a6a7a] hover:text-[#4a9ba0] transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#projects"
              className="px-8 py-3 bg-[#4a9ba0] hover:bg-[#3a8b90] text-white rounded-lg font-medium transition-colors duration-300"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border-2 border-[#4a9ba0] text-[#4a9ba0] hover:bg-[#4a9ba0]/10 rounded-lg font-medium transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-[#f7f4e3]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#2a4a5a]">
            About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-[#4a6a7a] leading-relaxed">
              <p>
                I&apos;m a CS student building AI agents, full-stack systems, and applied AI/ML. I care about writing reliable software, especially when models and data are involved.
              </p>
              <p>
                Currently, I&apos;m doing undergraduate research for LLM hallucination benchmarking and synthetic data generation. I&apos;ve also worked on AI infrastructure for internal chatbots and automation.
              </p>
              <p>Here are some technologies I&apos;ve been working with:</p>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {["LangChain", "MongoDB", "TypeScript", "React", "Next.js", "Python", "FastAPI", "Supabase"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 text-sm">
                    <span className="text-[#4a9ba0]">▹</span>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-[#8ac4d0]/30 to-[#4a9ba0]/20 border-2 border-[#4a9ba0]/30 overflow-hidden">
                  <img
                    src="/Profile.png"
                    alt="Headshot"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-48 h-48 border-2 border-[#4a9ba0]/30 rounded-lg -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-[#f5ddd5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#2a4a5a]">
            Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                role: "Undergraduate Research Assistant",
                company: "Western University",
                period: "Oct 2025 - Present",
                description: "LLM hallucination benchmarking and synthetic data generation for evaluation pipelines.",
              },
              {
                role: "Developer 1 Intern",
                company: "Scotiabank",
                period: "May 2025 - August 2025",
                description: "AI infrastructure work for internal chatbots and automation.",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-[#d9c9d6] hover:border-[#4a9ba0] transition-colors duration-300"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-[#4a9ba0]" />
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-[#2a4a5a]">{job.role}</h3>
                  <span className="hidden md:block text-[#8a9aaa]">@</span>
                  <span className="text-[#4a9ba0]">{job.company}</span>
                </div>
                <p className="text-sm text-[#7a8a9a] mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  {job.period}
                </p>
                <p className="text-[#4a6a7a]">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-[#d9c9d6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#2a4a5a]">Projects</h2>
          <p className="text-center text-[#4a6a7a] text-sm md:text-base mt-3 mb-12 max-w-2xl mx-auto leading-relaxed">
            A collection of my projects and experiences.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
                      <h3 className="text-xl md:text-2xl font-semibold text-[#2a4a5a] group-hover:text-[#4a9ba0] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      {project.url ? (
                        <span className="shrink-0 text-[#8a9aaa] group-hover:text-[#4a9ba0] transition-colors" aria-hidden>
                          <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                        </span>
                      ) : null}
                    </div>
                    <p className="text-[#5a7a8a] text-sm md:text-base leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-[#8ac4d0]/20 text-[#4a9ba0] rounded"
                        >
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
                  className="group flex flex-col overflow-hidden rounded-xl bg-[#f7f4e3] border-2 border-[#4a9ba0] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#4a9ba0]/10 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a9ba0]"
                >
                  {cardBody}
                </Link>
              ) : (
                <div
                  key={`${project.title}-${index}`}
                  className="group flex flex-col overflow-hidden rounded-xl bg-[#f7f4e3] border-2 border-[#4a9ba0] shadow-sm"
                >
                  {cardBody}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#8ac4d0]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#2a4a5a]">
            Get In Touch
          </h2>
          <p className="text-[#2a4a5a]/80 mb-8 leading-relaxed">
            I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open. I&apos;ll do my best to get back to you!
          </p>
          <Link
            href="mailto:dhe72@uwo.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#f7f4e3] hover:bg-white text-[#4a9ba0] rounded-lg font-medium transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </Link>
          <div className="flex items-center justify-center gap-2 mt-8 text-[#2a4a5a]/70">
            <MapPin className="w-4 h-4" />
            <span>Toronto, ON</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#4a9ba0]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#c5dde8] text-sm">
            Designed &amp; Built with care
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/DanielHe09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5dde8] hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/daniel-he-1309b2294/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5dde8] hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://x.com/DanielHe09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5dde8] hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
