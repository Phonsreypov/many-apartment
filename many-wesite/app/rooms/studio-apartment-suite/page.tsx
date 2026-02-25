import { Bed, Maximize2, Sunrise, Users, Star } from "lucide-react";
import { roomDetails } from "@/configs/roomList";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReservationForm from "@/components/ReservationForm";
import BreadcrumbSection from "@/components/BreadcrumbSection";

export default function RoomPage({ params }: { params: { slug: string } }) {
  const room =
    roomDetails.find((r) => r.slug === "studio-apartment-suite") ||
    roomDetails[0];
  // if not found show 404
  if (!room) {
    notFound();
  }

  return (
    <>
      <BreadcrumbSection
        title={room.title}
        imageUrl={
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        }
        paragraph={"Sweet room"}
      />
      <section className="bg-[#f3f3f3] py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-14">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            {/* MAIN IMAGE */}
            <div className="relative w-full h-[520px] overflow-hidden mb-6">
              <Image
                src={room.image}
                alt={room.title}
                fill
                className="object-cover"
              />
            </div>

            {/* EXTRA IMAGES GALLERY */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {room.images.map((img, index) => (
                <div
                  key={index}
                  className="relative h-[160px] overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={img}
                    alt={`${room.title}-${index}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* TITLE + RATING + BOOK BUTTON */}
            <div className="flex items-center justify-between flex-wrap mb-4 gap-4">
              <h3 className="text-4xl font-serif text-[#1c1c1c]">
                {room.title}
              </h3>

              <div className="flex items-center gap-6">
                {/* STARS */}
                <div className="flex text-[#d1a46e]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#d1a46e" stroke="none" />
                  ))}
                </div>

                <Link
                  href={`/booking?room=${room.slug}`}
                  className="bg-[#d1a46e] text-white px-6 py-3 text-sm font-semibold"
                >
                  BOOKING NOW
                </Link>
              </div>
            </div>

            {/* PRICE */}
            <h2 className="text-5xl font-bold text-[#d1a46e] mb-10">
              {room.price}$
              <span className="text-base text-gray-600 ml-2 font-normal">
                /Pernight
              </span>
            </h2>

            {/* INFO TABLE */}
            <div className="space-y-3 text-gray-700 mb-10">
              <div className="flex gap-10">
                <span className="w-30 text-gray-500">Size:</span>
                <span>{room.info.size}</span>
              </div>

              <div className="flex gap-10">
                <span className="w-30 text-gray-500">Capacity:</span>
                <span>{room.info.capacity}</span>
              </div>

              <div className="flex gap-10">
                <span className="w-30 text-gray-500">Bed:</span>
                <span>{room.info.bed}</span>
              </div>

              <div className="flex gap-10">
                <span className="w-30 text-gray-500">Services:</span>
                <span>{room.info.services}</span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-relaxed">{room.description}</p>
          </div>
          <ReservationForm />
        </div>
      </section>
    </>
  );
}
