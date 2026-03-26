import { Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Like messages in a bottle, I welcome every connection. Whether you have a project in mind or just want to say hello, I&apos;d love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-5 w-5 text-primary" />
            <span>hello@example.com</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Somewhere by the Sea</span>
          </div>
        </div>

        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
          <a href="mailto:hello@example.com">
            <Send className="h-4 w-4 mr-2" />
            Send a Message
          </a>
        </Button>
      </div>
    </section>
  )
}
