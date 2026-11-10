import Link from "next/link"

export default function Products() {
  const products = [
    {
      title: "Air Curtains",
      slug: "air-curtains",
      img: "/Assets/Products/air-curtain.jpg",
    },
    {
      title: "PVC Strip Curtains",
      slug: "pvc-strip-curtains",
      img: "/Assets/Products/pvc-curtain.jpg",
    },
    {
      title: "Fogger Machines",
      slug: "fogger-machines",
      img: "/Assets/Products/fogger.jpg",
    },
    {
      title: "Soap Dispensers",
      slug: "soap-dispensers",
      img: "/Assets/Products/soap-dispenser.jpg",
    },
        {
      title: "Hand Dryers",
      slug: "hand-dryers",
      img: "/Assets/Products/washroom-equips.jpg",
    },
    {
      title: "Fly Catcher",
      slug: "fly-catcher",
      img: "/Assets/Products/washroom-equips.jpg",
    },
        {
      title: "Scrubbing Station ",
      slug: "scrubbing-station",
      img: "/Assets/Products/washroom-equips.jpg",
    },
            {
      title: "Other Equipments",
      slug: "view-more",
      img: "/Assets/Products/washroom-equips.jpg",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-3xl font-bold text-slate-900 mb-12">
        Our Products
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {products.map((p) => (
          <div
            key={p.slug}
            className="
              bg-white rounded-xl overflow-hidden shadow
              transition-shadow duration-300 hover:shadow-xl
            "
          >
            {/* IMAGE */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="
                  w-full h-full object-cover
                  transition-transform duration-300 hover:scale-105
                "
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 text-center">
              <h3 className="font-semibold text-slate-900 min-h-12">
                {p.title}
              </h3>

              <Link
                href={`/products/${p.slug}`}
                className="inline-block mt-3 text-teal-600 font-medium hover:underline"
              >
                View Products →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
