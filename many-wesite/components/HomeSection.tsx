"use client";
import React from "react";
import HomeSlider from "./HomeSlider";
import ServiceSection from "./ServiceSection";
import HomeRoomSection from "./HomeRoomSection";
import HomeBlogSection from "./HomeBlogSection";

export default function HomeSection() {
  return (
    <>
      <HomeSlider />

      <section className="bg-[#F3F4F4] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="text-[#1D546D] font-semibold tracking-wider uppercase">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#061E29] mt-3 leading-tight">
              Intercontinental LA <br />
              Westlake Hotel
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Sona.com is a leading online accommodation site. We’re passionate
              about travel. Every day, we inspire and reach millions of
              travelers across 90 local websites in 41 languages.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              So when it comes to booking the perfect hotel, vacation rental,
              resort, apartment, guest house, or tree house, we’ve got you
              covered.
            </p>

            <button className="mt-8 bg-[#061E29] text-white px-6 py-3 rounded-full hover:bg-[#1D546D] transition">
              Read More
            </button>
          </div>

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/img/about/about-1.jpg"
              alt="about"
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />

            <img
              src="/assets/img/about/about-2.jpg"
              alt="about"
              className="rounded-2xl shadow-lg object-cover w-full h-full mt-10"
            />
          </div>
        </div>
      </section>
      <ServiceSection />

      <HomeRoomSection />

      <HomeBlogSection />
    </>
  );
}
