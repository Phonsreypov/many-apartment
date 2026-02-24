"use client";

import Image from "next/image";
import { services } from "../configs/Services"; // adjust path if needed

export default function ServiceSection() {
  return (
    <section className="relative py-24 bg-linear-to-b from-white to-[#F3F4F4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-20">
          <span className="text-[#1D546D] font-semibold uppercase tracking-[3px]">
            What We Offer
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#061E29] mt-4">
            Exceptional Services
          </h2>

          <div className="w-24 h-1 bg-[#5F9598] mx-auto mt-6 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#5F9598]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Icon circle */}
              <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-[#1D546D]/10 mb-6 group-hover:bg-[#1D546D] transition duration-500">

                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                  className="object-contain transition duration-500 group-hover:brightness-0 group-hover:invert"
                />

              </div>

              {/* Title */}
              <h4 className="relative text-xl font-semibold text-[#061E29] mb-4">
                {service.title}
              </h4>

              {/* Description */}
              <p className="relative text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}