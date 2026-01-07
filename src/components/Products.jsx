// components/Products.jsx
export default function Products() {
  const products = [
    { title: 'Air Curtains', img: '/images/air-curtain.jpg' },
    { title: 'PVC Strip Curtains', img: '/images/pvc-curtain.jpg' },
    { title: 'Fogger Machines', img: '/images/fogger.jpg' },
    { title: 'Washroom Equipment', img: '/images/washroom.jpg' },
  ]

  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-3xl font-bold text-slate-900 leading-tight mb-12">Our Products</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {products.map((p, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow">
            <img src={p.img} alt={p.title} />
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <button className="mt-3 text-teal-600 font-medium">
                View Products →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
