// components/WhyUs.jsx
import { FaIndustry, FaShieldAlt, FaTools, FaTruck } from 'react-icons/fa'

export default function WhyUs() {
  const items = [
    { icon: <FaIndustry />, title: '18+ Years Industry Experience' },
    { icon: <FaShieldAlt />, title: 'Clean Room Concept Expertise' },
    { icon: <FaTruck />, title: 'Pan-India Supply & Installation' },
    { icon: <FaTools />, title: 'After-Sales & Support' },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <h2 className="text-center text-3xl font-bold text-slate-900 leading-tight mb-12">Why Choose Us?</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {items.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-teal-600 text-3xl mb-4">{item.icon}</div>
            <h3 className="font-semibold text-slate-900 leading-tight">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
