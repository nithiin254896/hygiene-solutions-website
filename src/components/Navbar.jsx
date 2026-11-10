// components/Navbar.jsx
import Logo from "./Logo";
import Logo2 from "./Logo2";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <Logo />
          <Logo2 />
        </div>
        <div className="hidden md:flex gap-10 font-medium items-center text-slate-900 leading-tight">
          <a href="#" className="cursor-pointer hover:text-teal-600">Products</a>
          <a href="#" className="cursor-pointer hover:text-teal-600">Industries</a>
          <a href="#" className="cursor-pointer hover:text-teal-600">About</a>
          <a
    href="#contact"
    className="px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition"
  >
    Contact
    </a>
        </div>
      </div>
    </nav>
  )
}
