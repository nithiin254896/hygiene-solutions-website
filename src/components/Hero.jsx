//"use client"
//import { useEffect, useState } from "react"
//
//const heroImages = [
//  "/Assets/Hero/hero1.jpg",
//  "/Assets/Hero/hero2.jpg",
//  "/Assets/Hero/hero3.jpg",
//  "/Assets/Hero/hero4.jpg",
//  "/Assets/Hero/hero5.jpg",
//]
//
//export default function Hero() {
//  const [current, setCurrent] = useState(0)
//
//  useEffect(() => {
//    const interval = setInterval(() => {
//      setCurrent((prev) => (prev + 1) % heroImages.length)
//    }, 5000) // change every 5 seconds
//
//    return () => clearInterval(interval)
//  }, [])
//
//  return (
//    <section className="relative bg-white overflow-hidden">
//      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 py-20 items-center">
//
//        {/* LEFT CONTENT */}
//        <div className="relative z-10">
//          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
//            Clean Room Hygiene Solutions <br />
//            <span className="text-teal-600">for Critical Industries</span>
//          </h1>
//
//          <p className="mt-6 text-lg text-slate-600">
//            Providing active & passive sanitation systems for Pharma,
//            Food, Manufacturing & Clean Environments since 2007.
//          </p>
//
//          <div className="mt-8 flex gap-4">
//            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg">
//              Get Product Catalog
//            </button>
//            <button className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg">
//              Request a Quote
//            </button>
//          </div>
//        </div>
//
//        {/* RIGHT IMAGE SLIDER */}
//        <div className="relative w-full h-100">
//          {heroImages.map((img, index) => (
//            <img
//              key={img}
//              src={img}
//              alt="Clean Room"
//              className={`
//                absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg
//                transition-opacity duration-1000 ease-in-out
//                ${index === current ? "opacity-100" : "opacity-0"}
//              `}
//            />
//          ))}
//        </div>
//
//      </div>
//    </section>
//  )
//}

//"use client"
//import { useEffect, useState } from "react"
//import { HeroBackground } from "./HeroBackground"
//
//const heroImages = [
//  "/Assets/Hero/hero1.jpg",
//  "/Assets/Hero/hero2.jpg",
//  "/Assets/Hero/hero3.jpg",
//  "/Assets/Hero/hero4.jpg",
//  "/Assets/Hero/hero5.jpg",
//  "/Assets/Hero/hero6.jpg",
//]
//
//export default function Hero() {
//  const [current, setCurrent] = useState(0)
//
//  useEffect(() => {
//    const interval = setInterval(() => {
//      setCurrent((prev) => (prev + 1) % heroImages.length)
//    }, 5000)
//
//    return () => clearInterval(interval)
//  }, [])
//
//  return (
//    <section className="relative overflow-hidden bg-white">
//
//      {/* HERO CONTENT */}
//        <div className="relative z-10 max-w-7xl mx-auto px-6 py-15 grid md:grid-cols-2 gap-10 items-center">
//
//        {/* LEFT CONTENT */}
//        <div>
//          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
//            Clean Room Hygiene Solutions <br />
//            <span className="text-teal-600">for Critical Industries</span>
//          </h1>
//
//          <p className="mt-6 text-lg text-slate-600">
//            Providing active & passive sanitation systems for Pharma,
//            Food, Manufacturing & Clean Environments since 2007.
//          </p>
//
//          <div className="mt-8 flex gap-4">
//            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg">
//              Get Product Catalog
//            </button>
//            <button className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg">
//              Request a Quote
//            </button>
//          </div>
//        </div>
//
//        {/* RIGHT IMAGE SLIDER */}
//        <div className="relative w-full h-105">
//          {heroImages.map((img, index) => (
//            <img
//              key={img}
//              src={img}
//              alt="Clean Room"
//              className={`
//                absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg
//                transition-opacity duration-1000 ease-in-out
//                ${index === current ? "opacity-100" : "opacity-0"}
//              `}
//            />
//          ))}
//
//          {/* Image overlay for premium look */}
//          <div className="absolute inset-0 rounded-xl bg-linear-to-l from-teal-900/30 to-transparent" />
//        </div>
//
//        
//      </div>
//
//      {/* CURVE SVG */}
//      <HeroBackground />
//    </section>
//  )
//}

"use client"

import { useEffect, useState } from "react"
import { HeroBackground } from "./HeroBackground"

const heroImages = [
  "/Assets/Hero/hero1.jpg",
  "/Assets/Hero/hero2.jpg",
  "/Assets/Hero/hero3.jpg",
  "/Assets/Hero/hero4.jpg",
  "/Assets/Hero/hero5.jpg",
  "/Assets/Hero/hero6.jpg",
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [showQuote, setShowQuote] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Download brochure
  const downloadCatalog = () => {
    const link = document.createElement("a")
    link.href = "/brochure/Hygiene-Solutions-Brochure.pdf"
    link.download = "Hygiene-Solutions-Brochure.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative overflow-hidden bg-white">

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-15 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Clean Room Hygiene Solutions <br />
            <span className="text-teal-600">
              for Critical Industries
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Providing active & passive sanitation systems for Pharma,
            Food, Manufacturing & Clean Environments since 2007.
          </p>

          <div className="mt-8 flex gap-4">

            <button
              onClick={downloadCatalog}
              className="bg-teal-600 hover:bg-teal-700 transition text-white px-6 py-3 rounded-lg"
            >
              Get Product Catalog
            </button>

            <button
              onClick={() => setShowQuote(true)}
              className="border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition px-6 py-3 rounded-lg"
            >
              Request a Quote
            </button>

          </div>
        </div>

        {/* IMAGE SLIDER */}
        <div className="relative w-full h-105">
          {heroImages.map((img, index) => (
            <img
              key={img}
              src={img}
              alt="Clean Room"
              className={`absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 rounded-xl bg-linear-to-l from-teal-900/30 to-transparent" />
        </div>
      </div>

      <HeroBackground />

      {/* Quote Popup */}
      {showQuote && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-8 relative">

            <button
              onClick={() => setShowQuote(false)}
              className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-red-500"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold text-teal-700">
              Request a Quote
            </h2>

            <p className="text-gray-600 mt-2 mb-6">
              Fill in your details and our sales team will get back to you.
            </p>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Company Name"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                type="text"
                placeholder="Contact Person"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />

              <select className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>Select Product</option>
                <option>Air Curtain</option>
                <option>Hand Dryer</option>
                <option>Soap Dispenser</option>
                <option>Fogger Machine</option>
                <option>PVC Strip Curtains</option>
                <option>Fly Catcher</option>
                <option>Shoe Cover Dispenser</option>
                <option>Other</option>
              </select>

              <textarea
                rows="4"
                placeholder="Describe your requirement..."
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>

              <div className="flex justify-end gap-4">

                <button
                  type="button"
                  onClick={() => setShowQuote(false)}
                  className="border px-6 py-2 rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg"
                >
                  Submit Request
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </section>
  )
}