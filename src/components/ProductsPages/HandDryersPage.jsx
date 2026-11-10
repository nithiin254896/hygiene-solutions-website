import Image from "next/image";
import Link from "next/link";

/* ===================== DATA ===================== */

const jetHandDryers = [
  { name: "HS-JHD001 SS", material: "SS 304", power: "2000W" },
  { name: "HS-JHD001 ABS", material: "ABS", power: "2000W" },
  { name: "HS-JHD002 ABS", material: "ABS", power: "1850W" },
  { name: "HS-JHD003 ABS", material: "ABS", power: "1850W" },
  { name: "HS-JHD004 ABS", material: "ABS", power: "1650W" },
];

const miniJetDryers = [
  { name: "HS-MJHD ABS", power: "950W", speed: "100 m/s" },
  { name: "HS-MJHD SS", power: "950W", speed: "100 m/s" },
];

const meteoricDryers = [
  { name: "HS-MTJHD", power: "950W", speed: "100 m/s" },
];

const ssDryers = [
  { name: "HS-HD01 SS", power: "400–950W", material: "SS 304" },
  { name: "HS-HD02 SS", power: "1800W", material: "SS 304" },
  { name: "HS-HD03 SS", power: "1800W", material: "SS 304" },
  { name: "HS-HD04 SS", power: "2100W", material: "SS 304" },
  { name: "HS-HD05 SS", power: "2500W", material: "SS 304" },
  { name: "HS-HD06 SS", power: "1200W", material: "SS 304" },
  { name: "HS-HD07 SS", power: "1500W", material: "Iron" },
  { name: "HS-HD08 SS", power: "500W", material: "SS 304" },
  { name: "HS-HD09 SS", power: "550W", material: "SS 304" },
];

const absDryers = [
  { name: "HS-HD01 ABS", power: "1000W", material: "ABS" },
  { name: "HS-HD02 ABS", power: "1000W", material: "ABS" },
  { name: "HS-HD03 ABS", power: "1300W", material: "ABS" },
  { name: "HS-HD04 ABS", power: "1000W", material: "ABS" },
  { name: "HS-HD05 ABS", power: "2000W", material: "ABS" },
  { name: "HS-HD06 ABS", power: "1500W", material: "ABS" },
  { name: "HS-HD07 ABS", power: "2000W", material: "ABS" },
  { name: "HS-HD08 ABS", power: "1500W", material: "ABS" },
  { name: "HS-HD09 ABS", power: "1200W", material: "ABS" },
  { name: "HS-HD10 ABS", power: "1200W", material: "ABS" },
];

/* ===================== PAGE ===================== */

export default function HandDryersPage() {
  return (
    <section className="bg-white">

      {/* HERO */}
      <div className="relative w-full min-h-[80vh] overflow-hidden">
        <Image
          src="/Assets/HandDryers/hero.jpg"
          alt="Hand Dryers"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-5xl font-bold">Hand Dryers</h1>
            <p className="mt-4 text-lg max-w-2xl">
              High-performance hand dryers for hygienic and efficient drying in
              clean rooms, industries, and commercial spaces.
            </p>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">Our Range</h2>
        <p className="text-gray-600">
          Our hand dryers are designed for fast drying, energy efficiency, and
          long-term durability across industrial and commercial applications.
        </p>
      </div>

      {/* JET HAND DRYERS */}
      <Section title="Jet Hand Dryers" data={jetHandDryers} folder="jet" />

      {/* MINI JET */}
      <Section title="Mini Jet Hand Dryers" data={miniJetDryers} folder="mini" />

      {/* METEORIC */}
      <Section title="Meteoric Hand Dryers" data={meteoricDryers} folder="meteoric" />

      {/* SS DRYERS */}
      <Section title="Stainless Steel Hand Dryers" data={ssDryers} folder="ss" />

      {/* ABS DRYERS */}
      <Section title="ABS Hand Dryers" data={absDryers} folder="abs" />

      {/* FEATURES */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8">Key Features</h2>

          <ul className="grid md:grid-cols-2 gap-6 text-gray-600">
            <li>• High-speed drying (5–12 seconds)</li>
            <li>• Energy efficient motors</li>
            <li>• Durable ABS & Stainless Steel body</li>
            <li>• HEPA filter options available</li>
            <li>• Low noise & hygienic operation</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-teal-600 py-14 text-center text-white">
        <h3 className="text-2xl font-semibold">
          Need Hand Dryers for Your Facility?
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

/* ===================== REUSABLE SECTION ===================== */

function Section({ title, data, folder }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold mb-8">{title}</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div key={index} className="bg-slate-50 p-6 rounded-xl shadow">
            <div className="relative h-48">
              <Image
                src={`/Assets/HandDryers/${folder}-${index + 1}.png`}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="mt-4 font-semibold">{item.name}</h3>
            {item.material && (
              <p className="text-sm text-gray-600">
                Material: {item.material}
              </p>
            )}
            <p className="text-sm text-gray-600">Power: {item.power}</p>
            {item.speed && (
              <p className="text-sm text-gray-600">
                Air Speed: {item.speed}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}