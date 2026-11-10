import Image from "next/image";
import Link from "next/link";

/* ===================== DATA ===================== */

const washroomAccessories = [
  { name: "Aerosol Dispensers" },
  { name: "Tissue Paper Dispensers" },
  { name: "Jumbo Roll Tissue Dispensers" },
  { name: "Hard Roll Tissue Dispensers" },
  { name: "Sensor Taps" },
  { name: "Foot Operated Taps" },
];

const maintenanceEquipment = [
  { name: "Shoe Cover Dispensers" },
  { name: "Shoe Shine Machines" },
  { name: "Wringer Buckets" },
  { name: "Janitorial Carts" },
];

const wasteManagement = [
  { name: "Push Bins" },
  { name: "Swing Bins" },
  { name: "Pedal Bins" },
  { name: "Bio Waste Bins" },
  { name: "Ashtray Bins" },
  { name: "Perforated Bins" },
];

const safetySystems = [
  { name: "Queue Managers" },
  { name: "Signages" },
  { name: "Traffic Cones" },
  { name: "Expandable Cone Bars" },
  { name: "Elastic Poles" },
  { name: "Caution Signs" },
  { name: "Sign Boards" },
];

const consumables = [
  { name: "Shoe Pouch (Non-Woven)" },
  { name: "Sanitizer Stand" },
  { name: "Urinal Screens" },
  { name: "Napkins (C-Fold / M-Fold / Jumbo / HRT)" },
  { name: "Aerosol Refills / Liquids" },
];

/* ===================== PAGE ===================== */

export default function ViewMoreProducts() {
  return (
    <section className="bg-white">

      {/* HERO */}
      <div className="relative w-full min-h-[80vh] overflow-hidden">
        <Image
          src="/Assets/ViewMore/hero.jpg"
          alt="More Products"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-5xl font-bold">More Products</h1>
            <p className="mt-4 text-lg max-w-2xl">
              Explore our complete range of hygiene, maintenance, and facility
              management products designed for industrial and commercial use.
            </p>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">Our Extended Product Range</h2>
        <p className="text-gray-600">
          We offer a wide range of supporting hygiene and facility products
          ensuring cleanliness, safety, and operational efficiency across industries.
        </p>
      </div>

      {/* SECTIONS */}
      <Section title="Washroom Accessories" data={washroomAccessories} folder="washroom" />
      <Section title="Maintenance Equipment" data={maintenanceEquipment} folder="maintenance" />
      <Section title="Waste Management" data={wasteManagement} folder="waste" />
      <Section title="Queue & Safety Systems" data={safetySystems} folder="safety" />
      <Section title="Consumables" data={consumables} folder="consumables" />

      {/* CTA */}
      <div className="bg-teal-600 py-14 text-center text-white">
        <h3 className="text-2xl font-semibold">
          Looking for Custom Hygiene Solutions?
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
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-8">{title}</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div key={index} className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            
            <div className="relative h-40">
              <Image
                src={`/Assets/ViewMore/${folder}-${index + 1}.png`}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="mt-4 font-semibold">{item.name}</h3>

            <button className="mt-4 w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition">
              Enquire Now
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}