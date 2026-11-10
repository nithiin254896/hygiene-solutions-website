import Image from "next/image";
import Link from "next/link";

/* ===================== DATA ===================== */

const scrubbingStations = [
  {
    name: "HS-197",
    material: "Stainless Steel 304",
    description: "Floor mounted scrubbing station with matte finish",
  },
  {
    name: "HS-198",
    material: "Stainless Steel 304",
    description: "Heavy-duty scrubbing station with curved internal corners",
  },
];

/* ===================== PAGE ===================== */

export default function ScrubbingStationPage() {
  return (
    <section className="bg-white">

      {/* HERO */}
      <div className="relative w-full min-h-[80vh] overflow-hidden">
        <Image
          src="/Assets/ScrubbingStation/hero.jpg"
          alt="Scrubbing Station"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-5xl font-bold">Scrubbing Station</h1>
            <p className="mt-4 text-lg max-w-2xl">
              High-quality stainless steel scrubbing stations designed for
              clean room and industrial hygiene applications.
            </p>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">Our Range</h2>
        <p className="text-gray-600">
          Wash stations made of Stainless Steel 304 grade with durable construction,
          matte finish, and hygienic design. Ideal for pharmaceutical, food processing,
          and clean room environments.
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-8">Scrubbing Stations</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {scrubbingStations.map((item, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-xl shadow">
              <div className="relative h-64">
                <Image
                  src={`/Assets/ScrubbingStation/scrub-${index + 1}.png`}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="mt-4 font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">
                Material: {item.material}
              </p>
              <p className="text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8">Key Features</h2>

          <ul className="grid md:grid-cols-2 gap-6 text-gray-600">
            <li>• Stainless Steel 304 grade construction</li>
            <li>• Matte finish for clean room compatibility</li>
            <li>• Floor mounted with leveling jacks</li>
            <li>• Internal curved corners for hygiene</li>
            <li>• Integrated drainage system</li>
            <li>• Compatible with dispensers & sensor taps</li>
          </ul>
        </div>
      </div>

      {/* APPLICATIONS */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8">Applications</h2>

        <ul className="grid md:grid-cols-2 gap-6 text-gray-600">
          <li>• Pharmaceutical industries</li>
          <li>• Food processing units</li>
          <li>• Clean rooms</li>
          <li>• Hospitals & laboratories</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="bg-teal-600 py-14 text-center text-white">
        <h3 className="text-2xl font-semibold">
          Need Scrubbing Stations for Your Facility?
        </h3>

        <Link
          href="/contact"
          className="inline-block mt-6 bg-white text-teal-700 px-6 py-3 rounded-lg"
        >
          Contact Us
        </Link>
      </div>

    </section>
  );
}
