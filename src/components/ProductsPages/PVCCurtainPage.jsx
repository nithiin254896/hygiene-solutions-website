//import Image from "next/image"
//
//export default function PVCCurtainPage() {
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
//        <div className="div">
//        <h1 className="text-4xl font-bold text-slate-900">
//          Air Curtains
//        </h1>
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

export default function PVCCurtainPage() {
  return (
    <section className="bg-white">

      {/* ================= HERO ================= */}
      <div className="relative w-full min-h-[72vh] md:min-h-[85vh] overflow-hidden">

        <Image
          src="/Assets/PVC/hero.jpg"
          alt="PVC Strip Curtains"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-widest text-teal-300 uppercase bg-teal-500/10 border border-teal-400/40 rounded-full backdrop-blur-sm">
              Hygiene Solutions
            </span>

            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-[0_6px_18px_rgba(0,0,0,0.95)]">
              PVC Strip Curtains
            </h1>

            <p className="mt-6 max-w-2xl text-gray-200 text-lg md:text-xl leading-relaxed">
              High-quality PVC strip curtains designed to protect clean environments from
              dust, insects, fumes and temperature loss while allowing smooth movement
              of personnel and materials.
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
          PVC STRIP CURTAINS / DOORS
        </h2>

        <p className="text-slate-600 leading-relaxed text-lg max-w-4xl">
          PVC strip curtains supplied by Hygiene Solutions provide an effective barrier
          against dust, insects, humidity, fumes and noise while still allowing easy
          passage of people, forklifts and materials. They maintain internal temperature
          control and reduce energy loss in industrial environments. The strips are
          mounted on aluminium or stainless steel channels and can be installed in
          warehouses, cold storages, food processing plants and pharmaceutical facilities.
        </p>

      </div>


      {/* ================= PRODUCT IMAGES ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid md:grid-cols-2 gap-10">

          {["product-1.jpg", "product-2.jpg"].map((img) => (
            <div key={img} className="bg-slate-50 p-6 rounded-2xl shadow-md">
              <div className="relative h-64 w-full">
                <Image
                  src={`/Assets/PVC/${img}`}
                  alt="PVC Strip Curtain"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}

        </div>
      </div>


      {/* ================= ADVANTAGES ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-semibold text-slate-900 mb-8">
          Advantages
        </h2>

        <ul className="grid md:grid-cols-2 gap-6 text-slate-600 leading-relaxed">

          <li>• Restricts movement of smoke, dust, insects and fumes.</li>
          <li>• Reduces hot or cold air loss and lowers electricity consumption.</li>
          <li>• Allows natural light to pass through the entrance.</li>
          <li>• Helps isolate noisy machinery.</li>
          <li>• Improves employee comfort and workplace safety.</li>
          <li>• Highly durable with excellent flexibility.</li>
          <li>• Requires very minimal maintenance.</li>
          <li>• Ideal for industrial and cold storage environments.</li>

        </ul>
      </div>


      {/* ================= TYPES ================= */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-slate-900 mb-10">
            Available Types of PVC Strips
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold text-lg mb-3">Standard Transparent</h3>
              <p className="text-slate-600">
                Suitable for normal environments with temperatures ranging from +5°C to +60°C.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold text-lg mb-3">Amber Anti-Insect</h3>
              <p className="text-slate-600">
                Special amber colored strips that repel insects, ideal for food processing areas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold text-lg mb-3">Polar & Super Polar</h3>
              <p className="text-slate-600">
                Designed for cold storage applications with temperatures down to -40°C.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold text-lg mb-3">Double Ribbed</h3>
              <p className="text-slate-600">
                Ribbed strips provide extra impact resistance for forklift traffic.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold text-lg mb-3">Opaque Strips</h3>
              <p className="text-slate-600">
                Available in grey, black, blue or orange for privacy and visual separation.
              </p>
            </div>

          </div>
        </div>
      </div>


      {/* ================= SPECIFICATIONS ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-semibold text-slate-900 mb-8">
          Product Specifications
        </h2>

        <div className="overflow-x-auto border rounded-xl">
          <table className="min-w-full text-sm text-left border-collapse">

            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="px-4 py-3">Specification</th>
                <th className="px-4 py-3">Options</th>
              </tr>
            </thead>

            <tbody className="divide-y">

              <tr>
                <td className="px-4 py-3">Strip Thickness</td>
                <td className="px-4 py-3">2 mm, 3 mm, 5 mm</td>
              </tr>

              <tr>
                <td className="px-4 py-3">Strip Width</td>
                <td className="px-4 py-3">200 mm, 300 mm</td>
              </tr>

              <tr>
                <td className="px-4 py-3">Temperature Range</td>
                <td className="px-4 py-3">+60°C to -40°C depending on type</td>
              </tr>

              <tr>
                <td className="px-4 py-3">Material</td>
                <td className="px-4 py-3">Flexible Industrial Grade PVC</td>
              </tr>

              <tr>
                <td className="px-4 py-3">Mounting System</td>
                <td className="px-4 py-3">Aluminium / Stainless Steel Channels</td>
              </tr>

            </tbody>

          </table>
        </div>
      </div>


      {/* ================= FEATURES ================= */}
      <div className="bg-slate-50 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-slate-900 mb-8">
            Key Features
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-slate-600 leading-relaxed">

            <li>• Transparent design prevents collisions with moving vehicles.</li>
            <li>• Strips return to original position after passage.</li>
            <li>• Rounded edges allow smooth personnel movement.</li>
            <li>• Maintains internal temperature for energy efficiency.</li>
            <li>• Reduces noise levels up to 15 dB.</li>
            <li>• Flame resistant and easy to clean material.</li>

          </ul>

        </div>

      </div>


      {/* ================= CTA ================= */}
      <div className="bg-teal-600 py-14 text-center text-white">

        <h3 className="text-2xl font-semibold">
          Need PVC Strip Curtains for Your Facility?
        </h3>

        <p className="mt-3 max-w-2xl mx-auto">
          Our experts can help you select the right PVC curtain thickness,
          strip type and installation method for your industrial environment.
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