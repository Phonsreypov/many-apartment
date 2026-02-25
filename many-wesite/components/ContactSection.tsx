"use client";
import React from 'react'

export default function ContactSection() {
  return (
  <section className="bg-[#f7f7f7] py-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20">

      {/* LEFT SIDE - CONTACT INFO */}
      <div>
        <h2 className="text-4xl font-serif mb-6 text-[#1c1c1c]">
          Contact Info
        </h2>

        <p className="text-gray-600 leading-relaxed mb-10 max-w-md">
          We would love to hear from you. Whether you have a question
          about rooms, reservations, or anything else, our team is
          ready to assist you.
        </p>

        <div className="space-y-6 text-gray-700">

          <div className="flex gap-6">
            <span className="w-24 text-gray-500">Address:</span>
            <span>856 Cordia Extension Apt. 356, Lake, US</span>
          </div>

          <div className="flex gap-6">
            <span className="w-24 text-gray-500">Phone:</span>
            <span>(12) 345 67890</span>
          </div>

          <div className="flex gap-6">
            <span className="w-24 text-gray-500">Email:</span>
            <span>info.colorlib@gmail.com</span>
          </div>

          <div className="flex gap-6">
            <span className="w-24 text-gray-500">Fax:</span>
            <span>+(12) 345 67890</span>
          </div>

        </div>
      </div>


      {/* RIGHT SIDE - CONTACT FORM */}
      <div className="bg-white p-12 rounded-xl shadow-sm">

        <form className="space-y-8">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#C59D5F] transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#C59D5F] transition"
            />

          </div>

          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#C59D5F] transition resize-none"
          />

          <button
            type="submit"
            className="bg-[#C59D5F] text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-[#b78e52] transition"
          >
            Submit Now
          </button>

        </form>

      </div>

    </div>


    {/* MAP SECTION */}
    <div className="mt-24 rounded-xl overflow-hidden shadow-sm">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0606825994123!2d-72.8735845851828!3d40.760690042573295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e85b24c9274c91%3A0xf310d41b791bcb71!2sWilliam%20Floyd%20Pkwy%2C%20Mastic%20Beach%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1578582744646!5m2!1sen!2sbd"
        height="500"
        className="w-full border-0"
        loading="lazy"
      />
    </div>

  </div>
</section>
  )
}
