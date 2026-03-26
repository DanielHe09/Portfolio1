import { Github, Linkedin, Twitter, Mail, ExternalLink, MapPin, Briefcase } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a2332] text-[#c8d4e3]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated wave background */}
        <div className="absolute inset-0 z-0">
          <svg
            className="absolute bottom-0 w-full h-64"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#3d5a73"
              fillOpacity="0.3"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            >
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,181.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </path>
            <path
              fill="#5a7d9a"
              fillOpacity="0.2"
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
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#7a9cb8] font-medium mb-4 tracking-wide">Hello, I&apos;m</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-[#9aabbf] mb-8 max-w-2xl mx-auto leading-relaxed">
            A passionate developer crafting beautiful digital experiences with clean code and thoughtful design.
          </p>
          <div className="flex items-center justify-center gap-6 mb-12">
            <Link
              href="https://github.com"
              className="p-3 rounded-full bg-[#2a3544]/60 hover:bg-[#4a6b8a]/30 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="p-3 rounded-full bg-[#2a3544]/60 hover:bg-[#4a6b8a]/30 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com"
              className="p-3 rounded-full bg-[#2a3544]/60 hover:bg-[#4a6b8a]/30 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:hello@example.com"
              className="p-3 rounded-full bg-[#2a3544]/60 hover:bg-[#4a6b8a]/30 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#projects"
              className="px-8 py-3 bg-[#4a6b8a] hover:bg-[#5a7d9a] rounded-lg font-medium transition-colors duration-300 text-[#e8f0f5]"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border border-[#3d5066] hover:border-[#7a9cb8] hover:text-[#7a9cb8] rounded-lg font-medium transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-[#1e2a3a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-[#7a9cb8]">01.</span> About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-[#9aabbf] leading-relaxed">
              <p>
                I&apos;m a software developer who loves building things for the web. My journey started back in 2015 when I decided to try customizing a WordPress theme — turns out hacking together a custom theme taught me a lot about HTML &amp; CSS!
              </p>
              <p>
                Fast-forward to today, and I&apos;ve had the privilege of working at startups, agencies, and large corporations. My main focus these days is building accessible, inclusive products and digital experiences.
              </p>
              <p>Here are some technologies I&apos;ve been working with:</p>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {["TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 text-sm">
                    <span className="text-[#7a9cb8]">▹</span>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-[#4a6b8a]/20 to-[#7a9cb8]/10 border-2 border-[#5a7d9a]/30 flex items-center justify-center">
                  <span className="text-6xl text-[#7a9cb8]/50">?</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-48 h-48 border-2 border-[#5a7d9a]/30 rounded-lg -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-[#7a9cb8]">02.</span> Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                role: "Senior Developer",
                company: "Tech Company",
                period: "2022 - Present",
                description: "Lead development of customer-facing web applications using React and Node.js. Mentored junior developers and established coding standards.",
              },
              {
                role: "Full Stack Developer",
                company: "Digital Agency",
                period: "2020 - 2022",
                description: "Built responsive web applications for various clients. Collaborated with designers to implement pixel-perfect UIs.",
              },
              {
                role: "Junior Developer",
                company: "Startup Inc",
                period: "2018 - 2020",
                description: "Developed and maintained internal tools. Gained experience with modern JavaScript frameworks and agile methodologies.",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-[#3d5066] hover:border-[#7a9cb8] transition-colors duration-300"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-[#6b8fa8]" />
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                  <span className="hidden md:block text-[#5a6b7a]">@</span>
                  <span className="text-[#7a9cb8]">{job.company}</span>
                </div>
                <p className="text-sm text-[#6a7b8a] mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  {job.period}
                </p>
                <p className="text-[#9aabbf]">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-[#1e2a3a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-[#7a9cb8]">03.</span> Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Project One",
                description: "A full-stack web application with real-time features and modern UI design.",
                tags: ["React", "Node.js", "Socket.io"],
              },
              {
                title: "Project Two",
                description: "An e-commerce platform with payment integration and inventory management.",
                tags: ["Next.js", "Stripe", "PostgreSQL"],
              },
              {
                title: "Project Three",
                description: "A mobile-first dashboard for data visualization and analytics.",
                tags: ["TypeScript", "D3.js", "Tailwind"],
              },
              {
                title: "Project Four",
                description: "CLI tool for automating development workflows and deployments.",
                tags: ["Node.js", "Commander", "AWS"],
              },
              {
                title: "Project Five",
                description: "REST API with authentication, rate limiting, and comprehensive documentation.",
                tags: ["Express", "JWT", "Swagger"],
              },
              {
                title: "Project Six",
                description: "Browser extension for productivity with cross-browser support.",
                tags: ["JavaScript", "Chrome API", "Firefox"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group p-6 bg-[#232f3e] rounded-lg hover:translate-y-[-4px] transition-all duration-300 border border-[#3d5066]/50 hover:border-[#7a9cb8]/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-[#4a6b8a]/10 rounded-lg">
                    <svg className="w-6 h-6 text-[#7a9cb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <Link href="#" className="text-[#6a7b8a] hover:text-[#7a9cb8] transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
                <h3 className="text-lg font-semibold text-[#d8e4ef] mb-2 group-hover:text-[#7a9cb8] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#8a9baa] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-[#4a6b8a]/15 text-[#8aacbf] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-[#7a9cb8]">04.</span> Get In Touch
          </h2>
          <p className="text-[#9aabbf] mb-8 leading-relaxed">
            I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open. I&apos;ll do my best to get back to you!
          </p>
          <Link
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#4a6b8a] hover:bg-[#5a7d9a] rounded-lg font-medium transition-colors duration-300 text-[#e8f0f5]"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </Link>
          <div className="flex items-center justify-center gap-2 mt-8 text-[#7a8b9a]">
            <MapPin className="w-4 h-4" />
            <span>San Francisco, CA</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#2d3d4d]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#7a8b9a] text-sm">
            Designed &amp; Built with care
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com" className="text-[#7a8b9a] hover:text-[#9aabbf] transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com" className="text-[#7a8b9a] hover:text-[#9aabbf] transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" className="text-[#7a8b9a] hover:text-[#9aabbf] transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
