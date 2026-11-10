import Image from "next/image"

export default function WashroomEquipmentPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-slate-900">
           Washroom Equipments
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-3xl">
          High-performance air curtains designed to prevent dust, insects,
          and temperature loss in cleanroom and industrial environments.
        </p>

        <div className="relative mt-10 w-full h-[420px] rounded-xl overflow-hidden shadow">
          <Image
            src="/Assets/Products/air-curtain.jpg"
            alt="Air Curtains"
            fill
            className="object-cover"
          />
        </div>

        <h3 className="mt-10 text-xl font-semibold">
          Applications
        </h3>

        <ul className="mt-4 list-disc list-inside text-slate-600">
          <li>Pharmaceutical cleanrooms</li>
          <li>Food processing plants</li>
          <li>Cold storage facilities</li>
        </ul>

      </div>
    </section>
  )
}
