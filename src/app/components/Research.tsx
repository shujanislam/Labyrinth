'use client'

import Image from "next/image"
import { Card } from "@/components/ui/card"

const researchItems = [
  {
    title: "AI & ML Research",
    description:
      "Exploring large language models, multimodal AI, and applied machine learning for real-world problems.",
  },
  {
    title: "Embedded Systems",
    description:
      "Building intelligent edge devices, robotics, and IoT systems powered by efficient ML models.",
  },
  {
    title: "Web Technologies",
    description:
      "Developing scalable platforms, web infrastructure, and intuitive user interfaces for next-gen applications.",
  },
  {
    title: "Cross-Tech Innovation",
    description:
      "Bridging AI, embedded systems, and web platforms to create transformative, interdisciplinary solutions.",
  },
]

export default function Research() {
  return (
    <section className="flex h-screen research items-center justify-center">
      <div className="w-[80%] no-scrollbar p-8 items-center justify-center">
        <h2 className="text-3xl font-bold tracking-tight mb-8">
          Our Research
        </h2>
        <div className="space-y-6">
          {researchItems.map((item, idx) => (
            <Card
              key={idx}
              className="p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
