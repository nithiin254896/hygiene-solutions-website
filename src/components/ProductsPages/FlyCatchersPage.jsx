import Image from "next/image";
import Link from "next/link";

export default function FlyCatchersPage() {
  return (
    <section className="bg-white">

      {/* ================= HERO ================= */}
      <div className="relative w-full min-h-[72vh] md:min-h-[85vh] overflow-hidden">

        <Image
          src="/Assets/FlyCatchers/hero.jpg"
          alt="Fly Catchers"
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
              Fly Catchers
            </h1>

            <p className="mt-6 max-w-2xl text-gray-200 text-lg md:text-xl leading-relaxed">
              Advanced fly control systems designed to maintain hygienic environments by effectively eliminating flying insects in industrial and commercial spaces.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-7 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-xl transition"
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
          FLY CATCHERS
        </h2>

        <p className="text-slate-600 leading-relaxed text-lg max-w-4xl">
          Fly catchers are essential hygiene equipment used in industries like food processing, pharmaceuticals, and clean rooms. 
          They help control flying insects using safe, efficient, and chemical-free methods, ensuring a contamination-free environment.
        </p>

      </div>

      {/* ================= PRODUCT IMAGES ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="grid md:grid-cols-3 gap-10">

          {["glue-pad.jpg", "electric-ss.jpg", "powder-coated.jpg"].map((img) => (
            <div key={img} className="bg-slate-50 p-6 rounded-2xl shadow-md">
              <div className="relative h-64 w-full">
                <Image
                  src={`/Assets/FlyCatchers/${img}`}
                  alt="Fly Catcher"
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

          <li>• Effective elimination of flying insects.</li>
          <li>• Available in glue pad and electric models.</li>
          <li>• Chemical-free and safe operation.</li>
          <li>• Stainless steel and powder-coated body options.</li>
          <li>• Suitable for industrial and commercial use.</li>
          <li>• Low maintenance and easy servicing.</li>
          <li>• Energy-efficient performance.</li>
          <li>• Durable and corrosion-resistant design.</li>

        </ul>
      </div>

      {/* ================= PRODUCT TYPES ================= */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-slate-900 mb-10">
            Available Models
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="relative h-56">
                <Image
                  src="/Assets/FlyCatchers/glue-pad.jpg"
                  alt="Glue Pad"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-center font-medium text-slate-700">
                Glue Pad Fly Catcher — Silent, chemical-free insect trapping
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="relative h-56">
                <Image
                  src="/Assets/FlyCatchers/electric-ss.jpg"
                  alt="Electric SS"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-center font-medium text-slate-700">
                Electric SS Model — Stainless steel durable design
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="relative h-56">
                <Image
                  src="/Assets/FlyCatchers/powder-coated.jpg"
                  alt="Powder Coated"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-center font-medium text-slate-700">
                Electric Powder Coated — Cost-effective industrial solution
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-teal-600 py-14 text-center text-white">
        <h3 className="text-2xl font-semibold">
          Need Help Choosing the Right Fly Catcher?
        </h3>
        <p className="mt-3 max-w-2xl mx-auto">
          Get expert guidance to select the ideal fly control solution for your facility.
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