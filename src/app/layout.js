import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

/* =========================
   SEO METADATA
========================= */
export const metadata = {
  title: {
    default: 'Hygiene Solutions | Clean Room & Hygiene Systems',
    template: '%s | Hygiene Solutions',
  },
  description:
    'Hygiene Solutions provides complete clean room and hygiene systems for pharmaceutical, food processing, dairy, cold storage and aerospace industries across India.',
  keywords: [
    'Hygiene Solutions',
    'Clean Room Solutions',
    'Pharmaceutical Clean Room',
    'Food Processing Hygiene',
    'Air Curtains',
    'PVC Strip Curtains',
    'Fogger Machines',
    'Industrial Hygiene Systems',
  ],
  authors: [{ name: 'Hygiene Solutions' }],
  creator: 'Hygiene Solutions',
  metadataBase: new URL('https://www.hygienesolutions.com'),
  openGraph: {
    title: 'Hygiene Solutions | Clean Room & Hygiene Systems',
    description:
      'Complete hygiene and clean room solutions for pharmaceutical, food, dairy, cold storage and aerospace industries.',
    url: 'https://www.hygienesolutions.com',
    siteName: 'Hygiene Solutions',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

/* =========================
   GOOGLE FONTS
========================= */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

/* =========================
   ROOT LAYOUT
========================= */
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="bg-slate-50 text-slate-800 font-sans antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
