"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProductBar, setShowProductBar] = useState(true);
  const pathname = usePathname();
  const productRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: "Tutorial", href: "#" },
    { name: "Hosting", href: "#" },
    { name: "Domain", href: "#" },
    { name: "VPS", href: "#" },
    { name: "Support", href: "#" },
  ];

  const productItems = [
    { label: "Rekomendasi Produk", isHighlight: true },
    { label: "Hosting", href: "#" },
    { label: "Domain & License", href: "#" }, 
    { label: "VPS", href: "#" },
    { label: "Partnership", href: "#" },
    { label: "Promo", href: "#" },
  ];

  useEffect(() => {
    let lastScrollY = 0;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Set scrolled state
      setIsScrolled(scrollY > 30);
      
      // Hide/show ProductBar based on scroll direction
      if (scrollY > 100) {
        if (scrollY > lastScrollY) {
          // Scrolling down
          setShowProductBar(false);
        } else {
          // Scrolling up
          setShowProductBar(true);
        }
      } else {
        setShowProductBar(true);
      }
      
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-sm"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? "h-16" : "h-18"
          }`}>
            {/* Logo */}
            <Link
              href="/"
              className={`text-[#EC662B] font-bold tracking-tight transition-all duration-300 hover:scale-105 ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}
            >
              Panduan.id
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-all duration-200 hover:text-[#EC662B] group ${
                    pathname === item.href
                      ? "text-[#EC662B]"
                      : "text-gray-700"
                  } ${isScrolled ? "text-sm" : "text-base"}`}
                >
                  {item.name}
                  <span className={`absolute left-0 -bottom-2 h-0.5 bg-[#EC662B] transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex items-center">
              <button
                className="text-gray-600 hover:text-[#EC662B] transition-all duration-200 p-2 rounded-full hover:bg-gray-100"
                aria-label="Search"
              >
                <Search size={isScrolled ? 20 : 22} />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}>
            <div className="border-t border-gray-200/50 py-4">
              <div className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-3 font-medium transition-all duration-200 rounded-lg mx-2 ${
                      pathname === item.href
                        ? "text-[#EC662B] bg-orange-50"
                        : "text-gray-700 hover:text-[#EC662B] hover:bg-gray-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <button
                  className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:text-[#EC662B] hover:bg-gray-50 transition-all duration-200 rounded-lg mx-2"
                  aria-label="Search"
                >
                  <Search size={20} />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ProductBar */}
      <div
        ref={productRef}
        className={`sticky top-16 z-40 bg-gradient-to-r from-[#EC662B] to-[#d4541f] text-white transition-all duration-500 ${
          showProductBar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 py-3">
            {productItems.map((item, idx) =>
              item.isHighlight ? (
                <span
                  key={item.label}
                  className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium text-sm border border-white/20"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  key={item.label}
                  href={item.href || "#"}
                  className="font-medium hover:text-white/80 transition-all duration-200 text-sm relative group px-2 py-1"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white/80 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;