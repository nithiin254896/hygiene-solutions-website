
"use client"
import Image from "next/image"
//import ProjectsCarousel from "./ProjectsCarousel"

// Row 1 Clients
const clientsRow1 = [
  { name: "Client 1", logo: "/assets/img/clients/client1.png" },
  { name: "Client 2", logo: "/assets/img/clients/client2.png" },
  { name: "Client 3", logo: "/assets/img/clients/client3.png" },
  { name: "Client 4", logo: "/assets/img/clients/client4.png" },
  { name: "Client 5", logo: "/assets/img/clients/client5.png" },
  { name: "Client 6", logo: "/assets/img/clients/client6.png" },
  { name: "Client 7", logo: "/assets/img/clients/client7.png" },
  { name: "Client 8", logo: "/assets/img/clients/client8.png" },
]

// Row 2 Clients
const clientsRow2 = [
  { name: "Client 9", logo: "/assets/img/clients/client9.png" },
  { name: "Client 10", logo: "/assets/img/clients/client10.png" },
  { name: "Client 11", logo: "/assets/img/clients/client11.png" },
  { name: "Client 12", logo: "/assets/img/clients/client12.png" },
  { name: "Client 13", logo: "/assets/img/clients/client13.png" },
  { name: "Client 14", logo: "/assets/img/clients/client14.png" },
  { name: "Client 15", logo: "/assets/img/clients/client15.png" },
  { name: "Client 16", logo: "/assets/img/clients/client16.png" },
]

// Row 3 Clients
const clientsRow3 = [
  { name: "Client 17", logo: "/assets/img/clients/client17.png" },
  { name: "Client 18", logo: "/assets/img/clients/client18.png" },
  { name: "Client 19", logo: "/assets/img/clients/client19.png" },
  { name: "Client 20", logo: "/assets/img/clients/client20.png" },
  { name: "Client 21", logo: "/assets/img/clients/client21.png" },
  { name: "Client 22", logo: "/assets/img/clients/client22.png" },
  { name: "Client 23", logo: "/assets/img/clients/client23.png" },
  { name: "Client 24", logo: "/assets/img/clients/client24.png" },
]

// Row component
function ClientRow({ clients, reverse }) {
  return (
    <div
      className={`flex gap-10 animate-scroll ${
        reverse ? "animate-scroll-reverse" : ""
      }`}
    >
      {/* Duplicate for seamless loop */}
      {[...clients, ...clients].map((client, i) => (
        <div key={i} className="relative w-32 h-16 shrink-0">
          <Image
            src={client.logo}
            alt={client.name}
            fill
            className="object-contain"
            sizes="(max-width:768px) 100vw, 150px"
          />
        </div>
      ))}
    </div>
  )
}

// Main component
export default function Clients() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold text-slate-900 leading-tight mb-12">Trusted by Leading Brands</h2>
        <div className="space-y-8">
          <ClientRow clients={clientsRow1} />
          <ClientRow clients={clientsRow2} reverse />
          <ClientRow clients={clientsRow3} />
        </div>
      </div>
    </section>
  )
}
