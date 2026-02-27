"use client";

import React from "react";
import { reservationFormData } from "@/configs/Data";

export default function ReservationForm() {
  return (
    <div className="lg:sticky lg:top-24">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10">

        {/* Title */}
        <h3 className="text-2xl font-serif mb-10 text-[#1c1c1c]">
          {reservationFormData.title}
        </h3>

        <form className="space-y-7">

          {reservationFormData.fields.map((field) => (
            <div key={field.name}>

              <label className="block text-sm text-gray-500 mb-2 tracking-wide">
                {field.label}
              </label>

              {/* INPUT TYPE */}
              {field.type === "date" && (
                <input
                  type="date"
                  className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d1a46e] transition"
                />
              )}

              {/* SELECT TYPE */}
              {field.type === "select" && (
                <select className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d1a46e] transition">
                  {field.options?.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              )}

            </div>
          ))}

          {/* Button */}
          <div className="border-t border-gray-100 pt-6">
            <button
              type="submit"
              className="w-full bg-[#d1a46e] hover:bg-[#c3925c] text-white py-4 rounded-lg font-semibold tracking-wide transition duration-300 shadow-md hover:shadow-lg"
            >
              {reservationFormData.buttonText}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}