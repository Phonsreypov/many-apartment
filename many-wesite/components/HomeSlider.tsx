"use client";

import { useEffect, useState } from "react";

const slides = [
  "/assets/img/hero/hero-1.jpg",
  "/assets/img/hero/hero-2.jpg",
  "/assets/img/hero/hero-3.jpg",
];

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          style={{
            backgroundImage: `url(${slide})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-20" />

      {/* Content */}
      <div className="relative z-30 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Many Apartment Luxury Living
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Experience comfort, elegance, and modern living in the heart of the
            city.
          </p>

          <button className="bg-[#ED6A25] hover:bg-[#ff7f50] transition px-8 py-3 rounded-full text-white font-semibold shadow-lg">
            Discover Now
          </button>
        </div>
      </div>
    </section>
  );
}
