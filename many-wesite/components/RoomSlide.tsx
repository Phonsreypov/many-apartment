"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { slider, slides } from "@/configs/Data";



export default function RoomSlide() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slider.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[75vh] overflow-hidden">

      {/* IMAGE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: 100, opacity: 0, scale: 1.1 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={slider[index].image}
            alt="Room Banner"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* GRADIENT OVERLAY (Luxury style) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index + "-text"}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <p className="uppercase tracking-[6px] text-sm text-[#C59D5F] mb-4">
              {slider[index].subtitle}
            </p>

            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              {slider[index].title}
            </h1>

            <p className="text-gray-200 mb-10">
              {slider[index].description}
            </p>

            <Link
              href="/about"
              className="inline-block px-10 py-4 bg-[#C59D5F] text-white uppercase tracking-widest text-sm hover:bg-[#b78e52] transition duration-300 hover:scale-105"
            >
              Explore About Us
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* SLIDE INDICATORS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${i === index ? "bg-[#C59D5F] scale-125" : "bg-white/50"
              }`}
          />
        ))}
      </div>

    </section>
  );
}