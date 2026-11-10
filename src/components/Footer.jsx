import Image from "next/image";
import Link from "next/link";
import { RiMapPin2Fill, RiPhoneFill, RiMailFill, RiTimeFill } from "react-icons/ri";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] text-slate-300">

      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* COMPANY */}
        <div>
          <Image
            src="/assets/img/logo/logo.png"
            width={180}
            height={40}
            alt="Hygiene Solutions"
            className="mb-5"
          />

          <p className="text-sm leading-relaxed text-slate-400">
            Hygiene Solutions is a Clean Room Concept company providing
            sanitation and regulatory equipment for pharmaceutical,
            food processing, aerospace and manufacturing industries
            across India since 2007.
          </p>

          <div className="mt-5">
            <h5 className="text-white font-semibold mb-2">Industries We Serve</h5>
            <ul className="text-sm space-y-1 text-slate-400">
              <li>Pharmaceutical Industries</li>
              <li>Food Processing Units</li>
              <li>Dairy & Cold Storage</li>
              <li>Aerospace & Manufacturing</li>
            </ul>
          </div>
        </div>

        {/* PRODUCTS */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-lg">Our Products</h4>
          <ul className="space-y-2 text-sm text-slate-400">

            <li><Link href="/air-curtains" className="hover:text-teal-400">Air Curtains</Link></li>
            <li><Link href="#" className="hover:text-teal-400">PVC Strip Curtains</Link></li>
            <li><Link href="#" className="hover:text-teal-400">Fogger Machines</Link></li>
            <li><Link href="#" className="hover:text-teal-400">Hand Dryers</Link></li>
            <li><Link href="#" className="hover:text-teal-400">Soap Dispensers</Link></li>
            <li><Link href="#" className="hover:text-teal-400">Fly Catchers</Link></li>
            <li><Link href="#" className="hover:text-teal-400">Shoe Shine Machines</Link></li>
            <li><Link href="#" className="hover:text-teal-400">Scrubbing Stations</Link></li>

          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-400">

            <li><Link href="/" className="hover:text-teal-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-teal-400">About Us</Link></li>
            <li><Link href="/products" className="hover:text-teal-400">Products</Link></li>
            <li><Link href="/industries" className="hover:text-teal-400">Industries</Link></li>
            <li><Link href="/contact" className="hover:text-teal-400">Contact</Link></li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-lg">Contact Us</h4>

          <ul className="space-y-4 text-sm">

            <li className="flex gap-3">
              <RiMapPin2Fill className="text-teal-400 mt-1" />
              <span className="text-slate-400">
                BN-212, Street No-2, Balaram Nagar,<br/>
                Safilguda, Malkajgiri,<br/>
                Hyderabad - 500047
              </span>
            </li>

            <li className="flex gap-3">
              <RiPhoneFill className="text-teal-400 mt-1" />
              <span className="text-slate-400">
                +91 99590 91102<br/>
                +91 99590 91104
              </span>
            </li>

            <li className="flex gap-3">
              <RiMailFill className="text-teal-400 mt-1" />
              <span className="text-slate-400">info@hygienesol.in</span>
            </li>

            <li className="flex gap-3">
              <RiTimeFill className="text-teal-400 mt-1" />
              <span className="text-slate-400">
                Mon - Sat : 9:30 AM - 7:00 PM
              </span>
            </li>

          </ul>

          <div className="mt-6">
            <Socials
              containerStyles="flex gap-4"
              iconStyles="text-[18px] hover:text-teal-400 transition-colors"
            />
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">

          <p>© {new Date().getFullYear()} Hygiene Solutions. All rights reserved.</p>

          <p className="text-xs">
            Designed & Developed for Industrial Cleanroom Solutions
          </p>

        </div>
      </div>
    </footer>
  );
}