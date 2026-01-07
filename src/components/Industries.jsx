const industries = [
  "Pharmaceutical",
  "Food Processing",
  "Dairy & Sea Foods",
  "Cold Storage",
  "Aerospace",
]

export default function Industries() {
  return (
    <section className="bg-gray-50 py-16">
      <h2 className="text-center text-3xl font-bold text-slate-900 leading-tight">
        Industries We Serve
      </h2>

      <div className="container mx-auto px-6 mt-10 grid md:grid-cols-5 gap-6">
        {industries.map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4 text-center">
            <img
              src={`/industries/${i + 1}.jpg`}
              className="rounded-md"
            />
            <p className="mt-3 font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
