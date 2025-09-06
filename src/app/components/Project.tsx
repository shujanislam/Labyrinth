'use client'

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Brain } from "lucide-react" // Lucide icon

const projects = [
  {
    title: "TBNet",
    description: "Advanced Tuberculosis detection with Neural Network",
    icon: "brain", // logical placeholder, will render Brain icon
    links: ["GitHub"],
    links_value: ["https://github.com/Git-Blame-Society/TBNet"]
  },
]

export default function Project() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <Link
            href="https://github.com/Git-Blame-Society/"
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
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                {project.icon === "brain" && <Brain className="w-12 h-12 text-foreground" />}
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
                        href={project.links_value[i]}
                        target="_blank"
                        rel="noopener noreferrer"
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
