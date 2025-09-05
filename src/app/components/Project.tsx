'use client'

import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Gemma",
    description: "A family of lightweight, state-of-the-art open models.",
    icon: "/icons/gemma.png",
    links: ["Google AI Studio"],
  },
  {
    title: "Veo",
    description: "Our state-of-the-art video generation model.",
    icon: "/icons/veo.png",
    links: ["Gemini app", "Flow", "Google AI Studio", "Vertex AI Studio"],
  },
  {
    title: "Imagen",
    description: "Our leading text-to-image generation model.",
    icon: "/icons/imagen.png",
    links: ["Gemini app", "Whisk", "Google AI Studio", "Vertex AI Studio"],
  },
  {
    title: "Lyria",
    description: "Our latest music generation model.",
    icon: "/icons/lyria.png",
    links: ["MusicFX DJ", "Google AI Studio", "Vertex AI Studio"],
  },
]

export default function Project() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Start Building</h2>
          <Link
            href="/projects"
            className="text-sm px-4 py-2 border rounded-full hover:bg-muted transition"
          >
            View projects
          </Link>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="p-6 rounded-xl border bg-card text-card-foreground"
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4">
                <Image
                  src={project.icon}
                  alt={`${project.title} icon`}
                  width={48}
                  height={48}
                />
              </div>

              {/* Title + description */}
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              {/* Links */}
              <div className="mb-6">
                <p className="text-xs text-muted-foreground uppercase mb-2">
                  Try it in
                </p>
                <ul className="space-y-1">
                  {project.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="text-sm hover:text-foreground transition"
                      >
                        {link} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn more */}
              <Link
                href="#"
                className="text-sm hover:text-foreground transition"
              >
                Learn more →
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
