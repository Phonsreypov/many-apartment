"use client";


export default function FooterSection() {
    return (
        <footer className="relative bg-[#061E29] text-white overflow-hidden">
            {/* Decorative glow background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#5F9598] rounded-full blur-[140px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1D546D] rounded-full blur-[140px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-24">
                {/* TOP GRID */}
                <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Many Apartment</h2>

                        <p className="text-gray-300 text-sm leading-relaxed">
                            Experience luxury living with modern comfort. Designed for
                            travelers who value elegance, relaxation, and premium service.
                        </p>

                        {/* Social */}
                        <div className="flex gap-4 mt-8">
                            {["F", "T", "I", "Y"].map((s, i) => (
                                <div
                                    key={i}
                                    className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-[#5F9598] transition cursor-pointer"
                                >
                                    {s}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-semibold mb-6 text-lg">Explore</h4>

                        <ul className="space-y-3 text-gray-300">
                            <li className="hover:text-[#5F9598] cursor-pointer transition">
                                Rooms
                            </li>
                            <li className="hover:text-[#5F9598] cursor-pointer transition">
                                Gallery
                            </li>
                            <li className="hover:text-[#5F9598] cursor-pointer transition">
                                Events
                            </li>
                            <li className="hover:text-[#5F9598] cursor-pointer transition">
                                Blog
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-6 text-lg">Contact</h4>

                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="flex items-center gap-3">+855 12 345 678</li>

                            <li className="flex items-center gap-3">
                                info@manyapartment.com
                            </li>

                            <li className="flex items-center gap-3">Phnom Penh, Cambodia</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold mb-6 text-lg">Newsletter</h4>

                        <p className="text-gray-300 text-sm mb-5">
                            Subscribe for updates & exclusive offers.
                        </p>

                        <div className="flex bg-white rounded-full overflow-hidden shadow-lg">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 text-black outline-none"
                            />

                            <button className="bg-[#1D546D] px-3 hover:bg-[#5F9598] transition">
                                Send
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
                    <p>
                        © {new Date().getFullYear()} Many Apartment. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <span className="hover:text-[#5F9598] cursor-pointer transition">
                            Privacy
                        </span>
                        <span className="hover:text-[#5F9598] cursor-pointer transition">
                            Terms
                        </span>
                        <span className="hover:text-[#5F9598] cursor-pointer transition">
                            Policy
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
