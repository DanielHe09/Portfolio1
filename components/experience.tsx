const experiences = [
  {
    title: "Senior Developer",
    company: "Ocean Tech",
    period: "2022 - Present",
    description: "Leading frontend architecture and mentoring junior developers. Building scalable applications with React and TypeScript.",
  },
  {
    title: "Full Stack Developer",
    company: "Tide Studios",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects. Implemented CI/CD pipelines and improved deployment workflows.",
  },
  {
    title: "Junior Developer",
    company: "Wave Digital",
    period: "2018 - 2020",
    description: "Started my journey building web applications. Learned the fundamentals of modern web development.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
              <p className="text-sm text-primary mb-1">{exp.period}</p>
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {exp.title}
              </h3>
              <p className="text-muted-foreground mb-2">{exp.company}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
