export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
          About Me
        </h2>
        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>
            Like the ocean, I find depth in simplicity. I&apos;m a developer who believes that the best solutions flow naturally, with clarity and purpose. Based in a quiet corner of the world, I craft digital experiences that feel as refreshing as a sea breeze.
          </p>
          <p>
            My journey began with curiosity and has been shaped by a love for clean code, thoughtful design, and the endless possibilities of the web. When I&apos;m not coding, you&apos;ll find me exploring nature, reading, or contemplating the tides.
          </p>
          <p>
            I specialize in building accessible, performant applications using modern technologies. Every project is an opportunity to create something meaningful that stands the test of time.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL"].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm border border-border"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
