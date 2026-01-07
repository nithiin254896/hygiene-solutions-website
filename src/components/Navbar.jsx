// components/Navbar.jsx
import Logo from "./Logo";
import Logo2 from "./Logo2";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <Logo />
          <Logo2 />
        </div>
        <div className="hidden md:flex gap-8 font-medium items-center text-slate-900 leading-tight">
          <a href="#">Products</a>
          <a href="#">Industries</a>
          <a href="#">About</a>
          <a href="#" className="bg-teal-600 text-white px-4 py-2 rounded-lg">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
