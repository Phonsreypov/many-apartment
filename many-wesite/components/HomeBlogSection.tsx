"use client";

import { blogs } from "../configs/Data";
import TestimonialSection from "./TestimonialSection";

export default function HomeBlogSection() {
  return (
    <>
      <TestimonialSection />

      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* Title */}
          <div className="text-center mb-20">

            <span className="text-[#1D546D] uppercase tracking-[4px] font-semibold">
              Hotel News
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#061E29] mt-4">
              Our Blog & Events
            </h2>

            <div className="w-20 h-[3px] bg-[#5F9598] mx-auto mt-6 rounded-full" />

          </div>

          {/* Blog Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {blogs.map((blog, index) => (
              <div
                key={index}
                className={`relative rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition duration-500
              ${blog.size === "wide" ? "lg:col-span-2" : ""}
              `}
              >

                {/* Image */}
                <div
                  className="h-[360px] bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${blog.image})` }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061E29]/90 via-[#061E29]/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 p-6 text-white">

                  <span className="inline-block bg-[#1D546D] text-xs px-3 py-1 rounded-full mb-3">
                    {blog.category}
                  </span>

                  <h4 className="text-lg font-semibold mb-2 leading-snug">
                    {blog.title}
                  </h4>

                  <p className="text-sm text-gray-300">
                    {blog.date}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>
    </>
  );
}