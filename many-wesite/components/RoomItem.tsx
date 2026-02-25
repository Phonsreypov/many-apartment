"use client";

import Image from "next/image";
import Link from "next/link";
import { RoomData } from "@/configs/roomList";
import RoomSlide from "./RoomSlide";

interface RoomItemProps {
  room: RoomData;
}

export default function RoomItem({ room }: RoomItemProps) {
  return (
    <>
      <div className=" bg-white border border-gray-200  overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group justify-between">
        {/* Image */}
        <div className="relative w-full h-[280px] overflow-hidden ">
          <Image
            src={room.image}
            alt={room.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <h3 className="text-2xl font-serif text-gray-800">{room.title}</h3>

          {/* Price */}
          <div className="flex items-end gap-1">
            <span className="text-3xl font-semibold text-[#C59D5F]">
              {room.price}$
            </span>
            <span className="text-gray-500 text-sm mb-1">/Per night</span>
          </div>

          {/* Room Info */}
          <div className="space-y-2 text-gray-600 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">Size:</span>
              <span>{room.size}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Capacity:</span>
              <span>Max person {room.capacity}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Bed:</span>
              <span>{room.bed}</span>
            </div>

            <div className="flex justify-between items-start">
              <span className="font-medium">Services:</span>
              <span className="text-right max-w-[60%]">
                {room.services.join(", ")}
              </span>
            </div>
          </div>

          {/* Button */}
          <Link
            href={`/rooms/${room.slug}`}
            className="inline-block pt-4 text-sm tracking-widest uppercase border-b-2 border-[#C59D5F] text-gray-800 hover:text-[#C59D5F] transition"
          >
            More Details
          </Link>
        </div>
      </div>
    </>
  );
}
