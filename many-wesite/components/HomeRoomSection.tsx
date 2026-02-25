"use client";

import Link from "next/link";
import { rooms } from "../configs/Data";

export default function HomeRoomSection() {
  return (
    <section className="py-28 bg-[#F3F4F4]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-20">
          <span className="text-[#1D546D] uppercase tracking-[4px] font-semibold">
            Our Rooms
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#061E29] mt-4">
            Luxury Living Experience
          </h2>

          <div className="w-20 h-[3px] bg-[#5F9598] mx-auto mt-6" />
        </div>

        {/* Room Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition duration-500"
            >

              {/* Image */}
              <div
                className="h-[440px] bg-cover bg-center transition duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${room.image})` }}
              />

              {/* Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061E29]/90 via-[#061E29]/30 to-transparent" />

              {/* Price Badge */}
              <div className="absolute top-5 right-5 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[#061E29] font-semibold shadow-md">
                ${room.price}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 w-full p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">
                  {room.title}
                </h3>

                {/* Hidden details appear on hover */}
                <div className="opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                  <p className="text-sm text-gray-200 mb-4">
                    Premium comfort with modern luxury design and full amenities.
                  </p>

                  <Link
                    href={`/rooms`}
                    className="inline-block bg-[#1D546D] px-5 py-2 rounded-full text-sm text-white hover:bg-[#5F9598] transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}