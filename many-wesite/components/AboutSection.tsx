"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ED6A25]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5F9598]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= IMAGE SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Image */}
          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="/assets/img/about/about-1.jpg"
              alt="About us"
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </div>

          {/* Floating Small Image */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-10 -right-10 w-52 h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
          >
            <Image
              src="/assets/img/about/about-2.jpg" 
              alt="Restaurant"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* ================= CONTENT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-[#ED6A25] font-semibold tracking-widest uppercase text-sm">
            Our Story
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
            We Create Beautiful Experiences
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Welcome to our place — where passion meets quality. We believe
            every detail matters, from the atmosphere to the service. Our
            mission is to deliver unforgettable moments for every guest.
          </p>

          <p className="text-gray-600 leading-relaxed mb-10">
            Whether you are here for dining, celebration, or relaxation,
            we promise warmth, excellence, and comfort every time.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6">
            {[
              "Premium Quality",
              "Fresh Ingredients",
              "Luxury Atmosphere",
              "Customer First",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="p-5 bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300"
              >
                <p className="font-semibold text-gray-800">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 bg-[#ED6A25] hover:bg-[#d95c1e] text-white px-8 py-3 rounded-full shadow-lg transition"
          >
            Discover More
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}