"use client";
import { CameraIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const menuItems = [
        { href: "/", label: "Bio" },
        { href: "/galeria", label: "Galeria" },
        { href: "/contato", label: "Contato" },
    ];

    return (
        <nav
            className={`flex items-center justify-between p-4 grow ${
                isMenuOpen ? "grow" : ""
            }`}
        >
            <div className="flex items-center">
                <CameraIcon className="w-6 text-gray-500 mr-2" />
                <h1 className="text-xl font-bold mr-4">Beth Gavião</h1>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`${
                            pathName === item.href ? "bg-gray-400" : ""
                        } px-4 py-2 text-gray-600 rounded-xl hover:bg-gray-400 transition-colors duration-300`}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-gray-600 focus:outline-none"
                onClick={toggleMenu}
            >
                {isMenuOpen ? (
                    <XMarkIcon className="w-6" />
                ) : (
                    <Bars3Icon className="w-6" />
                )}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-gray-300 shadow-md md:hidden">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={toggleMenu}
                            className={`block text-left opacity-80 px-4 py-2 text-gray-600 rounded-xl hover:bg-gray-400 transition-colors duration-300`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
