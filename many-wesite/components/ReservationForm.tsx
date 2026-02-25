import React from "react";

export default function ReservationForm() {
  return (
    <div className="lg:sticky lg:top-24">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10">

        {/* Title */}
        <h3 className="text-2xl font-serif mb-10 text-[#1c1c1c]">
          Your Reservation
        </h3>

        <form className="space-y-7">

          {/* Check In */}
          <div>
            <label className="block text-sm text-gray-500 mb-2 tracking-wide">
              Check In
            </label>
            <input
              type="date"
              className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d1a46e] transition"
            />
          </div>

          {/* Check Out */}
          <div>
            <label className="block text-sm text-gray-500 mb-2 tracking-wide">
              Check Out
            </label>
            <input
              type="date"
              className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d1a46e] transition"
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm text-gray-500 mb-2 tracking-wide">
              Guests
            </label>
            <select className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d1a46e] transition">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
              <option>Family (4+)</option>
            </select>
          </div>

          {/* Room */}
          <div>
            <label className="block text-sm text-gray-500 mb-2 tracking-wide">
              Room
            </label>
            <select className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d1a46e] transition">
              <option>1 Room</option>
              <option>2 Rooms</option>
              <option>3 Rooms</option>
            </select>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 pt-6">
            <button
              type="submit"
              className="w-full bg-[#d1a46e] hover:bg-[#c3925c] text-white py-4 rounded-lg font-semibold tracking-wide transition duration-300 shadow-md hover:shadow-lg"
            >
              CHECK AVAILABILITY
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}