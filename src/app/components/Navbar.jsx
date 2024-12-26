"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll to toggle dynamic theme
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic classes
  const bgColor = isScrolled ? "bg-charcoal" : "bg-white";
  const textColor = isScrolled ? "text-yellow" : "text-charcoal";
  const navHeight = "h-[12vh]";

  const navLinks = ["Home", "Services", "Menu", "Contact"];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`bg-[#fafafa] fixed top-0 left-0 w-full ${bgColor} ${textColor} ${navHeight} shadow-sm z-50`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" aria-label="Navigate to Home Page" className="z-50">
          <div className="relative w-48 h-24 ml-[-30px]">
            <Image
              src="/assets/img/Logo-1.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-2xl font-coolvetica capitalize tracking-wide">
          {navLinks.map((item) => {
            const isActive = pathname === `/${item.toLowerCase()}` || (item === "Home" && pathname === "/");
            return (
              <li key={item} className="relative">
                <Link
                  href={`/${item.toLowerCase()}`}
                  className={`transition-all duration-500 ease-in-out ${
                    isActive
                      ? "text-red"
                      : "text-charcoal hover:text-red"
                  }`}
                  aria-label={`Navigate to ${item} Page`}
                >
                  {item}
                </Link>
                {isActive && (
                  <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-red rounded"></span>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-4xl focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isOpen ? <FiX className="text-red" /> : <FiMenu className="text-yellow" />}
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed inset-0 bg-white text-charcoal flex flex-col justify-center items-center space-y-8 z-40"
            >
              {navLinks.map((item) => {
                const isActive = pathname === `/${item.toLowerCase()}` || (item === "Home" && pathname === "/");
                return (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className={`text-6xl transition-all duration-500 ease-in-out ${
                      isActive
                        ? "text-red"
                        : "text-charcoal hover:text-red"
                    }`}
                    aria-label={`Navigate to ${item} Page`}
                  >
                    {item}
                    {isActive && (
                      <span className="block mt-2 h-[2px] bg-red w-full rounded"></span>
                    )}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
