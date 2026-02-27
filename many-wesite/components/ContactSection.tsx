"use client";

import React from "react";
import {
  contactInfo,
  contactContent,
  mapEmbedUrl,
} from "@/configs/Data";

export default function ContactSection() {
  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-serif mb-6 text-[#1c1c1c]">
              {contactContent.title}
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10 max-w-md">
              {contactContent.description}
            </p>

            <div className="space-y-6 text-gray-700">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <span className="w-24 text-gray-500">
                    {item.label}
                  </span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white p-12 rounded-xl shadow-sm">
            <form className="space-y-8">

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#C59D5F]"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#C59D5F]"
                />
              </div>

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#C59D5F] resize-none"
              />

              <button
                type="submit"
                className="bg-[#C59D5F] text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-[#b78e52]"
              >
                Submit Now
              </button>

            </form>
          </div>

        </div>

        {/* MAP */}
        <div className="mt-24 rounded-xl overflow-hidden shadow-sm">
          <iframe
            src={mapEmbedUrl}
            height="500"
            className="w-full border-0"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}