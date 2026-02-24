"use client";

import Image from "next/image";

export default function RoomSlide() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/assets/img/room/room-1.jpg"
        alt="Room Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div className="text-white max-w-3xl">

          {/* Subtitle */}
          <p className="uppercase tracking-[5px] text-sm text-[#C59D5F] mb-4">
            Luxury Accommodation
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Discover Our Beautiful Rooms & Suites
          </h1>

          {/* Description */}
          <p className="text-gray-200 mb-8">
            Experience comfort, elegance, and modern design with our
            exclusive rooms crafted for your perfect stay.
          </p>

          {/* Button */}
          <button className="px-8 py-3 bg-[#C59D5F] text-white uppercase tracking-widest text-sm hover:bg-[#b78e52] transition">
            Explore Rooms
          </button>

        </div>
      </div>

    </section>
  );
}