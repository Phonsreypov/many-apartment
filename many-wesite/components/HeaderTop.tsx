"use client";

import Link from "next/link";
import { MenuTop } from "@/configs/Routes";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeaderTop() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/90 backdrop-blur-lg shadow-md py-3"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/img/manylogo.png"
            alt="Many Apartment Logo"
            width={80}
            height={50}
            className={`  
              }`}
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-12">
          {MenuTop.map((menu) => (
            <div key={menu.label} className="relative group">
              {/* MENU LINK */}
              <Link
                href={menu.url}
                className={`relative font-medium tracking-wide transition duration-300
        ${isScrolled ? "text-[#061E29]" : "text-white"}
        hover:text-[#C59D5F]`}
              >
                {menu.label}

                {/* Animated Underline */}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#C59D5F] transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* DROPDOWN */}
              {menu.children && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 p-6 min-w-[240px]">
                    {/* Small Arrow Top */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100"></div>

                    <div className="space-y-3">
                      {menu.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.url}
                          className="block px-4 py-3 rounded-lg text-[#061E29] hover:bg-[#C59D5F] transition"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* BOOKING BUTTON DESKTOP */}
        <div className="hidden lg:block">
          <button className="bg-[#C59D5F] text-white px-6 py-2 rounded-full hover:scale-105 transition">
            Booking Now
          </button>
        </div>

        {/* MOBILE BUTTON (ANIMATED) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden relative w-10 h-10 flex items-center justify-center transition ${isScrolled ? "text-[#061E29]" : "text-white"
            }`}
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute left-0 w-full h-[2px] bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 top-2" : "top-0"
                }`}
            />
            <span
              className={`absolute left-0 w-full h-[2px] bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : "top-2"
                }`}
            />
            <span
              className={`absolute left-0 w-full h-[2px] bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 top-2" : "top-4"
                }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? "max-h-[700px]" : "max-h-0"
          }`}
      >
        <div className="bg-white shadow-xl">
          <ul className="p-6 space-y-4">
            {MenuTop.map((menu) => (
              <li key={menu.label}>
                <div className="flex justify-between items-center">
                  <Link
                    href={menu.url}
                    onClick={() => setMobileOpen(false)}
                    className="font-medium text-[#061E29]"
                  >
                    {menu.label}
                  </Link>

                  {menu.children && (
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === menu.label ? null : menu.label,
                        )
                      }
                      className="text-lg"
                    >
                      {openDropdown === menu.label ? "−" : "+"}
                    </button>
                  )}
                </div>

                {/* CHILD DROPDOWN */}
                {menu.children && (
                  <div
                    className={`overflow-hidden transition-all duration-500 ${openDropdown === menu.label ? "max-h-96 mt-3" : "max-h-0"
                      }`}
                  >
                    <div className="pl-4 space-y-2 border-l">
                      {menu.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.url}
                          className="block py-2 text-[#5F9598]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}

            <button className="w-30 bg-[#C59D5F] text-white py-3  mt-4">
              Booking Now
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
}
