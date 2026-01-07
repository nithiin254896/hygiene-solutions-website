// components/Contact.jsx
export default function Contact() {
  return (
    <section className="bg-teal-700 text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <form className="grid md:grid-cols-2 gap-6">
          <input className="p-3 rounded text-black" placeholder="Name" />
          <input className="p-3 rounded text-black" placeholder="Company" />
          <input className="p-3 rounded text-black" placeholder="Email" />
          <input className="p-3 rounded text-black" placeholder="Phone" />
          <textarea className="p-3 rounded text-black md:col-span-2" placeholder="Requirement"></textarea>
          <button className="bg-white text-teal-700 px-6 py-3 rounded font-semibold md:col-span-2">
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}
