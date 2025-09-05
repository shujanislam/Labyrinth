"use client"

import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const phrases = [
  "human intelligence",
  "artificial intelligence",
  "brain-computer intelligence",
]

export default function HeroThreeVideos() {
  const [index, setIndex] = useState(0)
  const section1 = useRef<HTMLDivElement>(null)
  const section2 = useRef<HTMLDivElement>(null)
  const section3 = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  // Cycle phrases in first section with GSAP fade
  useEffect(() => {
    const interval = setInterval(() => {
      if (!textRef.current) return

      gsap.to(textRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setIndex((prev) => (prev + 1) % phrases.length)
          gsap.to(textRef.current, { opacity: 1, duration: 0.5 })
        },
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Smooth crossfade between sections
  useEffect(() => {
    const sections = [section1.current, section2.current, section3.current]
    if (sections.some((s) => !s)) return

    // Section 1 → Section 2
    gsap.fromTo(
      section1.current,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: section2.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    )
    gsap.fromTo(
      section2.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: section2.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    )

    // Section 2 → Section 3
    gsap.fromTo(
      section2.current,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: section3.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    )
    gsap.fromTo(
      section3.current,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: section3.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <main className="w-full">
      {/* Section 1 */}
      <section
        ref={section1}
        className="relative h-screen w-full overflow-hidden opacity-100"
      >
        <video
          src="/earth.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {/* Cycling text */}
        <div className="relative z-20 flex items-center justify-center h-full px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            We are building{" "}
            <span ref={textRef}>{phrases[index]}</span>
          </h1>
        </div>
      </section>

      {/* Section 2 */}
      <section
        ref={section2}
        className="relative h-screen w-full overflow-hidden opacity-0"
      >
        <video
          src="/hardware.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 flex items-center justify-center h-full px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center">
            And defining how they interact with us
          </h2>
        </div>
      </section>

      {/* Section 3 */}
      <section
        ref={section3}
        className="relative h-screen w-full overflow-hidden opacity-0"
      >
        <video
          src="/tech.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 flex items-center justify-center h-full px-4">
          <div className="text-center text-white px-4">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto">
              We push the boundaries of{" "}
              <span className="font-semibold">AI, machine learning, embedded systems, and web technologies</span>{" "}
              to unlock new frontiers of knowledge and innovation.
              <br />
              <br />
              Our mission is to transform breakthrough research into{" "}
              <span className="font-semibold">practical technologies and products</span>{" "}
              that advance science, empower developers, and create meaningful impact in the world.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
