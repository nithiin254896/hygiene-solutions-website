"use client"
import { useEffect, useState } from "react"

const heroImages = [
  "/Assets/Hero/hero1.jpg",
  "/Assets/Hero/hero2.jpg",
  "/Assets/Hero/hero3.jpg",
  "/Assets/Hero/hero4.jpg",
  "/Assets/Hero/hero5.jpg",
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 5000) // change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-20 items-center">

        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Clean Room Hygiene Solutions <br />
            <span className="text-teal-600">for Critical Industries</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Providing active & passive sanitation systems for Pharma,
            Food, Manufacturing & Clean Environments since 2007.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg">
              Get Product Catalog
            </button>
            <button className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg">
              Request a Quote
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="relative w-full h-100">
          {heroImages.map((img, index) => (
            <img
              key={img}
              src={img}
              alt="Clean Room"
              className={`
                absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg
                transition-opacity duration-1000 ease-in-out
                ${index === current ? "opacity-100" : "opacity-0"}
              `}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
