import Image from "next/image";
import Link from "next/link";

const manualDispensers = [
  { name: "HS-MSD01 ABS", capacity: "1000 ml", material: "ABS" },
  { name: "HS-MSD02 ABS", capacity: "750 ml", material: "ABS" },
  { name: "HS-MSD03 ABS", capacity: "500 ml", material: "ABS" },
  { name: "HS-MSD04 ABS", capacity: "1000 ml", material: "ABS" },
  { name: "HS-MSD05 ABS", capacity: "800 ml", material: "ABS" },
  { name: "HS-MSD06 ABS", capacity: "1000 ml", material: "ABS" },
  { name: "HS-MSD07 ABS", capacity: "500 ml", material: "ABS" },
  { name: "HS-MSD08 ABS", capacity: "400 ml x 2", material: "ABS" },
  { name: "HS-MSD01 SS", capacity: "1000 ml", material: "SS 304" },
  { name: "HS-MSD02 SS", capacity: "800 ml", material: "SS 304" },
];

const autoDispensers = [
  { name: "HS-ASD01 ABS", capacity: "1000 ml", material: "ABS" },
  { name: "HS-ASD02 ABS", capacity: "2400 ml", material: "ABS" },
  { name: "HS-ASD03 ABS", capacity: "1000 ml", material: "ABS" },
  { name: "HS-ASD04 ABS", capacity: "800 ml", material: "ABS" },
  { name: "HS-ASD05 ABS", capacity: "500 ml", material: "ABS" },
  { name: "HS-ASD06 ABS", capacity: "500 ml", material: "ABS" },
  { name: "HS-ASD07 ABS", capacity: "500 ml", material: "ABS" },
  { name: "HS-ASD08 ABS", capacity: "1000 ml", material: "ABS" },
  { name: "HS-ASD01 SS", capacity: "700 ml", material: "SS 304" },
  { name: "HS-ASD02 SS", capacity: "1100 ml", material: "SS 304" },
];

export default function SoapDispenserPage() {
  return (
    <section className="bg-white">

      {/* HERO */}
      <div className="relative w-full min-h-[80vh] overflow-hidden">
        <Image
          src="/Assets/Soap/hero.jpg"
          alt="Soap Dispensers"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-5xl font-bold">Soap Dispensers</h1>
            <p className="mt-4 text-lg max-w-2xl">
              Complete range of manual and automatic dispensers for hygienic environments.
            </p>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">Our Range</h2>
        <p className="text-gray-600">
          We provide a wide variety of soap and sanitizer dispensers designed for
          industrial and commercial hygiene applications.
        </p>
      </div>

      {/* MANUAL DISPENSERS */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-8">Manual Soap Dispensers</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {manualDispensers.map((item, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-xl shadow">
              <div className="relative h-48">
                <Image
                  src={`/Assets/Soap/manual-${index + 1}.png`}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="mt-4 font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">Material: {item.material}</p>
              <p className="text-sm text-gray-600">Capacity: {item.capacity}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AUTOMATIC DISPENSERS */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-8">Automatic Dispensers</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {autoDispensers.map((item, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-xl shadow">
              <div className="relative h-48">
                <Image
                  src={`/Assets/Soap/auto-${index + 1}.png`}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="mt-4 font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">Material: {item.material}</p>
              <p className="text-sm text-gray-600">Capacity: {item.capacity}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8">Key Features</h2>

          <ul className="grid md:grid-cols-2 gap-6 text-gray-600">
            <li>• Touch-free operation (automatic models)</li>
            <li>• Durable ABS & Stainless Steel body</li>
            <li>• Multiple capacity options</li>
            <li>• Easy installation and maintenance</li>
            <li>• Hygienic and efficient dispensing</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-teal-600 py-14 text-center text-white">
        <h3 className="text-2xl font-semibold">
          Need Soap Dispensers for Your Facility?
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