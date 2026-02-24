"use client";
import React from "react";
import { testimonials } from "../configs/Data";

export default function TestimonialSection() {


    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">

                {/* Title */}
                <div className="text-center mb-14">
                    <span className="text-sm uppercase tracking-widest text-orange-500 font-semibold">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
                        What Customers Say
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
                        >
                            {/* Quote */}
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {item.text}
                            </p>

                            {/* Rating */}
                            <div className="flex mb-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} className="text-yellow-400 text-lg">
                                        {i < Math.floor(item.rating) ? "★" : "☆"}
                                    </span>
                                ))}
                            </div>

                            {/* Author */}
                            <h5 className="font-semibold text-gray-800">
                                — {item.name}
                            </h5>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}