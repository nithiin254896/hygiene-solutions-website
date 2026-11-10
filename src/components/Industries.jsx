//const industries = [
//  "Pharmaceutical",
//  "Food Processing",
//  "Dairy & Sea Foods",
//  "Cold Storage",
//  "Aerospace",
//]
//
//export default function Industries() {
//  return (
//    <section className="bg-gray-50 py-16">
//      <h2 className="text-center text-3xl font-bold text-slate-900 leading-tight">
//        Industries We Serve
//      </h2>
//
//      <div className="container mx-auto px-6 mt-10 grid md:grid-cols-5 gap-6">
//        {industries.map((item, i) => (
//          <div key={i} className="bg-white rounded-xl shadow p-4 text-center">
//            <img
//              src={`/Assets/industries/${i+1}.jpg`}
//              className="rounded-md"
//            />
//            <p className="mt-3 font-semibold">{item}</p>
//          </div>
//        ))}
//      </div>
//    </section>
//  )
//}

import Image from "next/image"

const industries_data = [
  { name: "Pharmaceutical", img: "pharmaceutical.jpg" },
  { name: "Food Processing", img: "food-processing.jpg" },
  { name: "Dairy & Sea Foods", img: "dairy.jpg" },
  { name: "Cold Storage & Warehouses", img: "cold-storage.jpg" },
  { name: "Aerospace & Manufacturing", img: "aerospace.jpg" },
]


export default function Industries() {
  return (
    <section className="bg-gray-50 py-16">
      <h2 className="text-center text-3xl font-bold text-slate-900">
        Industries We Serve
      </h2>

      <div className="max-w-7xl mx-auto px-6 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {industries_data.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-4 text-center
           transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="relative w-full h-40">
             <Image
                src={`/Assets/industries/${item.img}`}
                alt={item.name}
                fill
                className="object-cover rounded-md"
             />
            </div>

            <p className="mt-3 font-semibold text-slate-900 leading-tight">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
