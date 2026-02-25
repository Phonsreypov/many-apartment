"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const images = [
  "/assets/img/room/room-1.jpg",
  "/assets/img/room/room-2.jpg",
  "/assets/img/room/room-3.jpg",
];

export default function RoomSlide() {

  const [index, setIndex] = useState(0);

  // Auto change slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* IMAGE SLIDER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Room Banner"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white max-w-3xl"
        >
          <p className="uppercase tracking-[5px] text-sm text-[#C59D5F] mb-4">
            Luxury Accommodation
          </p>

          <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
            Discover Our Beautiful Rooms & Suites
          </h1>

          <p className="text-gray-200 mb-8">
            Experience comfort, elegance, and modern design with our exclusive
            rooms crafted for your perfect stay.
          </p>

          <Link
            href="/about"
            className="inline-block px-8 py-3 bg-[#C59D5F] text-white uppercase tracking-widest text-sm hover:bg-[#b78e52] transition duration-300 hover:scale-105"
          >
            Explore About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}