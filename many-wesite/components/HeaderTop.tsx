"use client";

import Link from "next/link";
import { MenuTop } from "@/configs/Routes";
import { useState, useEffect } from "react";

export default function HeaderTop() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
      ${isScrolled
          ? "bg-[#1D546D]/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* Logo */}
        <div className="font-bold text-xl text-[#ffffff]">
          <Link href="/">Many Apartment</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:block ">
          <ul className="flex items-center gap-8">
            {MenuTop.map((menu) => (
              <li key={menu.label} className="relative group">
                <Link
                  href={menu.url}
                  className="menu text-[#ffffff] font-medium hover:text-[#5F9598] transition duration-300"
                >
                  {menu.label}
                </Link> 

                {/* Dropdown */}
                {menu.children && (
                  <ul className="absolute left-0 top-full mt-4 bg-[#F3F4F4] shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[200px] border border-[#E5E7EB]">
                    {menu.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.url}
                          className="block px-5 py-3 text-[#1D546D] hover:bg-[#061E29] hover:text-white transition"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Booking Button Desktop */}
        <div className="hidden lg:block">
          <button className="bg-[#061E29] text-white px-6 py-2 rounded-full hover:bg-[#1D546D] transition">
            Booking Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-[#061E29]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F3F4F4] shadow-xl">
          <ul className="flex flex-col p-6 gap-4">
            {MenuTop.map((menu) => (
              <li key={menu.label}>
                <Link
                  href={menu.url}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#1D546D] font-medium"
                >
                  {menu.label}
                </Link>

                {menu.children && (
                  <ul className="pl-4 mt-2">
                    {menu.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.url}
                          className="block py-1 text-[#5F9598]"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <button className="bg-[#061E29] text-white px-5 py-2 rounded-full mt-4">
              Booking Now
            </button>
          </ul>
        </div>
      )}
    </header>
  );
}