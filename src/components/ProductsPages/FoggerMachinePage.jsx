//import Image from "next/image"
//
//export default function FoggerPage() {
//  return (
//    <section className="py-20 bg-gray-50">
//      <div className="max-w-7xl mx-auto px-6">
//
//        <h1 className="text-4xl font-bold text-slate-900">
//          Air Curtains
//        </h1>
//
//        <p className="mt-6 text-lg text-slate-600 max-w-3xl">
//          High-performance air curtains designed to prevent dust, insects,
//          and temperature loss in cleanroom and industrial environments.
//        </p>
//
//        <div className="relative mt-10 w-full h-[420px] rounded-xl overflow-hidden shadow">
//          <Image
//            src="/Assets/Products/air-curtain.jpg"
//            alt="Air Curtains"
//            fill
//            className="object-cover"
//          />
//        </div>
//
//        <h3 className="mt-10 text-xl font-semibold">
//          Applications
//        </h3>
//
//        <ul className="mt-4 list-disc list-inside text-slate-600">
//          <li>Pharmaceutical cleanrooms</li>
//          <li>Food processing plants</li>
//          <li>Cold storage facilities</li>
//        </ul>
//
//      </div>
//    </section>
//  )
//}

import Image from "next/image";
import Link from "next/link";

export default function FoggerMachinePage() {
  return (
    <section className="bg-white">

      {/* ================= HERO ================= */}
      <div className="relative w-full min-h-[72vh] md:min-h-[85vh] overflow-hidden">

        <Image
          src="/Assets/Fogger/hero.jpg"
          alt="Fogger Machine"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-widest text-teal-300 uppercase bg-teal-500/10 border border-teal-400/40 rounded-full backdrop-blur-sm">
              Hygiene Solutions
            </span>

            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold">
              Industrial Fogger Machines
            </h1>

            <p className="mt-6 max-w-2xl text-gray-200 text-lg md:text-xl">
              High performance dry fogging machines designed for sterilization,
              sanitation and disinfection in pharmaceutical clean rooms,
              hospitals and food processing facilities.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-7 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-xl transition duration-300"
              >
                Request a Quote
              </Link>
            </div>

          </div>
        </div>
      </div>


      {/* ================= INTRO ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          FOGGER MACHINE
        </h2>

        <p className="text-slate-600 leading-relaxed text-lg max-w-4xl">
          Hygiene Solutions fogger machines are used for sterilization and
          sanitation of clean rooms, pharmaceutical facilities and operation
          theatres. These machines generate ultra-fine dry fog particles which
          effectively disinfect large spaces quickly and uniformly.
        </p>

      </div>


      {/* ================= PRODUCT IMAGES ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid md:grid-cols-3 gap-10">

          {["product-1.jpg", "product-2.jpg", "product-3.jpg"].map((img) => (
            <div key={img} className="bg-slate-50 p-6 rounded-2xl shadow-md">
              <div className="relative h-64 w-full">
                <Image
                  src={`/Assets/Fogger/${img}`}
                  alt="Fogger Machine"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}

        </div>
      </div>


      {/* ================= FEATURES ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-semibold text-slate-900 mb-8">
          Key Features
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 text-slate-600 leading-relaxed">

          <li>• Produces dry fog with uniform sub-micron particle size.</li>
          <li>• Adjustable liquid flow rate from 0–50 ml/min.</li>
          <li>• Digital timer for automatic operation (1–99 minutes).</li>
          <li>• High speed FHP motor for powerful fog thrust.</li>
          <li>• Advanced SS 316 air-jet nozzle design.</li>
          <li>• Portable and easy to move.</li>
          <li>• Covers areas up to 20,000 cubic feet.</li>
          <li>• Optional rotating stand for 120° or 360° oscillation.</li>

        </ul>
      </div>


      {/* ================= APPLICATIONS ================= */}
      <div className="bg-slate-50 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-slate-900 mb-8">
            Applications
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-slate-600">

            <li>• Pharmaceutical clean rooms</li>
            <li>• Operation theatres</li>
            <li>• Food processing facilities</li>
            <li>• Cold storage facilities</li>
            <li>• Warehouses</li>
            <li>• Industrial sanitation</li>

          </ul>

        </div>

      </div>


      {/* ================= SPECIFICATIONS ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-semibold text-slate-900 mb-8">
          Technical Specifications
        </h2>

        <div className="overflow-x-auto border rounded-xl">

          <table className="min-w-full text-sm text-left border-collapse">

            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="px-4 py-3">Parameter</th>
                <th className="px-4 py-3">Specification</th>
              </tr>
            </thead>

            <tbody className="divide-y">

              <tr>
                <td className="px-4 py-3">Particle Size</td>
                <td className="px-4 py-3">Uniform Sub Microns</td>
              </tr>

              <tr>
                <td className="px-4 py-3">Flow Rate</td>
                <td className="px-4 py-3">1–3 Litres / Hour (Adjustable)</td>
              </tr>

              <tr>
                <td className="px-4 py-3">Tank Capacity</td>
                <td className="px-4 py-3">8 Litres</td>
              </tr>

              <tr>
                <td className="px-4 py-3">Motor Speed</td>
                <td className="px-4 py-3">24,000 RPM</td>
              </tr>

              <tr>
                <td className="px-4 py-3">Power Supply</td>
                <td className="px-4 py-3">230V AC, 50/60 Hz</td>
              </tr>

              <tr>
                <td className="px-4 py-3">Area Coverage</td>
                <td className="px-4 py-3">Up to 20,000 cubic feet</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>


      {/* ================= CTA ================= */}
      <div className="bg-teal-600 py-14 text-center text-white">

        <h3 className="text-2xl font-semibold">
          Looking for Industrial Fogger Machines?
        </h3>

        <p className="mt-3 max-w-2xl mx-auto">
          Contact our team to select the right fogging machine for your
          sanitation and sterilization requirements.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 bg-white text-teal-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition"
        >
          Contact Us
        </Link>

      </div>

    </section>
  );
}