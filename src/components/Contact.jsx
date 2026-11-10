// components/Contact.jsx
"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Socials from "./Socials"

export default function Contact() {
    const [status, setStatus] = useState("");
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    message: e.target.message.value,
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  } catch {
    setStatus("error");
  }
};

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Card */}
        <div className="relative bg-teal-800 rounded-3xl p-12 shadow-2xl overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE - CONTACT INFO */}
            <div className="text-white space-y-8">

              <h2 className="text-4xl font-bold leading-snug">
                Let’s talk on something <span className="text-teal-300">great</span> together
              </h2>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-teal-700 p-3 rounded-full">
                  <Mail size={20} />
                </div>
                <p className="text-lg">hygienesolutions@gmail.com</p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="bg-teal-700 p-3 rounded-full">
                  <Phone size={20} />
                </div>
                <p className="text-lg">+91 98765 43210</p>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="bg-teal-700 p-3 rounded-full">
                  <MapPin size={20} />
                </div>
                <p className="text-lg">Hyderabad, Telangana, India</p>
              </div>

              <Socials
                          containerStyles="flex gap-4"
                          iconStyles="text-[18px] hover:text-white transition-colors"
              />
            </div>

            {/* RIGHT SIDE - FORM CARD */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:ml-10">

              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Send us a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Your Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="w-full mt-2 border-b-2 border-gray-300 focus:border-teal-700 outline-none py-2 text-black placeholder:text-gray-400 caret-black"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-full mt-2 border-b-2 border-gray-300 focus:border-teal-700 outline-none py-2 text-black placeholder:text-gray-400 caret-black"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full mt-2 border-b-2 border-gray-300 focus:border-teal-700 outline-none py-2 text-black placeholder:text-gray-400 caret-black"
                    placeholder="+91 9876543210"
                    />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Requirement
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    className="w-full mt-2 border border-gray-300 rounded-lg focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none p-3 resize-none text-black placeholder:text-gray-400 caret-black"
                    placeholder="Tell us what product you are looking for..."
                    ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-700 text-white py-3 rounded-full font-semibold cursor-pointer not-[]:hover:bg-teal-800 transition duration-300 shadow-md hover:shadow-xl"
                >
                  Send Message
                </button>
                {status === "sending" && (
  <p className="text-blue-600 text-center">Sending message...</p>
)}

{status === "success" && (
  <p className="text-green-600 text-center font-medium">
    ✔ Message sent successfully! We will contact you soon.
  </p>
)}

{status === "error" && (
  <p className="text-red-600 text-center font-medium">
    ❌ Failed to send. Please try again.
  </p>
)}

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}