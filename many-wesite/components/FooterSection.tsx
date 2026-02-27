"use client";

import Link from "next/link";
import { footerData } from "@/configs/Data";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

export default function FooterSection() {
    return (
        <footer className="relative bg-[#061E29] text-white overflow-hidden">
            {/* Luxury Glow Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-[#5F9598] rounded-full blur-[180px]" />
                <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-[#1D546D] rounded-full blur-[180px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-32">
                {/* MAIN GRID */}
                <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-4">
                    {/* BRAND */}
                    <div>
                        <h2 className="mb-6">
                            <Image
                                src={footerData.brand.image}
                                alt="Footer Logo"
                                width={90}
                                height={50}
                                className="object-contain"
                            />
                        </h2>

                        <p className="text-gray-300 leading-relaxed text-sm max-w-sm">
                            {footerData.brand.description}
                        </p>

                        {/* SOCIAL ICONS */}
                        <div className="flex gap-4 mt-10">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                <div
                                    key={i}
                                    className="group relative w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-[#C59D5F] transition duration-300 cursor-pointer"
                                >
                                    <Icon
                                        size={18}
                                        className="group-hover:text-[#C59D5F] transition"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* EXPLORE */}
                    <div>
                        <h4 className="text-lg font-semibold mb-8">
                            {footerData.explore.title}
                        </h4>

                        <ul className="space-y-4 text-gray-300">
                            {footerData.explore.links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.url}
                                        className="hover:text-[#C59D5F] transition flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-[2px] bg-[#C59D5F] group-hover:w-4 transition-all duration-300"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-lg font-semibold mb-8">
                            {footerData.contact.title}
                        </h4>

                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="hover:text-[#C59D5F] transition">
                                {footerData.contact.phone}
                            </li>
                            <li className="hover:text-[#C59D5F] transition">
                                {footerData.contact.email}
                            </li>
                            <li>{footerData.contact.location}</li>
                        </ul>
                    </div>

                    {/* NEWSLETTER */}
                    <div>
                        <h4 className="text-lg font-semibold mb-8">
                            {footerData.newsletter.title}
                        </h4>

                        <p className="text-gray-300 text-sm mb-6">
                            {footerData.newsletter.description}
                        </p>

                        <div className="flex items-center bg-white/5 backdrop-blur rounded-full overflow-hidden border border-white/10 focus-within:border-[#C59D5F] transition">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-5 py-3 bg-transparent text-white placeholder-gray-400 outline-none text-sm"
                            />
                            <button className="bg-[#C59D5F] px-3 py-3 text-sm font-medium hover:bg-[#b8914d] transition">
                                Send
                            </button>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-white/10 mt-24 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-6">
                    <p>
                        © {new Date().getFullYear()} Many Apartment All rights
                        reserved.
                    </p>

                    <div className="flex gap-8">
                        {footerData.bottomLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.url}
                                className="hover:text-[#C59D5F] transition"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
