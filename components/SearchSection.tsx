"use client";

import { useState, useEffect, useRef } from "react";
import { Search, TrendingUp, Clock, ArrowRight } from "lucide-react";

const dummyResults = [
  {
    title: "Cara Membuat Website dengan WordPress",
    category: "WordPress",
    readTime: "5 min",
    isPopular: true
  },
  {
    title: "Cara Install SSL di cPanel",
    category: "Security",
    readTime: "3 min",
    isPopular: true
  },
  {
    title: "Mengatasi Error 403 Forbidden",
    category: "Troubleshooting",
    readTime: "4 min",
    isPopular: false
  },
  {
    title: "Panduan Migrasi Hosting ke Jagoan Hosting",
    category: "Hosting",
    readTime: "8 min",
    isPopular: false
  },
  {
    title: "Cara Setting Email di Outlook",
    category: "Email",
    readTime: "6 min",
    isPopular: true
  },
];

const popularSearches = [
  "WordPress Tutorial",
  "SSL Certificate",
  "Email Setup",
  "Domain Setup",
  "cPanel Guide"
];

export default function SearchSection() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof dummyResults>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 1) {
      const filtered = dummyResults.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.category.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const handlePopularSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    const filtered = dummyResults.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 500;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let offset = 0;
    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Moving grid pattern
      const gridSize = 40;
      ctx.strokeStyle = "rgba(236, 02, 43, 0.08)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = -gridSize + (offset % gridSize); x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Add subtle dots at intersections
      ctx.fillStyle = "rgba(236, 102, 43, 0.12)";
      for (let x = -gridSize + (offset % gridSize); x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      offset += 0.3;
      animationId = requestAnimationFrame(draw);
    };

    draw();
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  // Click outside to close results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full opacity-60"
      />

      {/* Gradient overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-[#EC662B]/5 via-[#EC662B]/10 to-[#EC662B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[200px] bg-gradient-to-l from-orange-200/20 to-transparent rounded-full blur-2xl" />

      {/* Main content */}
      <div className="relative z-10 py-10 px-4 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apa yang ingin kamu{" "}
            <span className="text-[#EC662B] relative">
              pelajari
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 12" fill="none">
                <path d="M0 8C20 4, 40 0, 60 2C80 4, 90 6, 100 8" stroke="#EC662B" strokeWidth="2" fill="none" opacity="0.6"/>
              </svg>
            </span>{" "}
            hari ini?
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Temukan panduan lengkap dan tutorial terbaru untuk mengembangkan kemampuan digitalmu
          </p>
        </div>

        {/* Search Section */}
        <div ref={searchRef} className="relative max-w-2xl mx-auto mb-8">
          <div className={`relative transition-all duration-300 ${
            isSearchFocused ? "transform scale-105" : ""
          }`}>
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Cari tutorial, panduan, atau topik yang kamu butuhkan..."
              className="w-full border-2 border-gray-200 rounded-2xl py-4 px-6 pl-14 focus:outline-none focus:border-[#EC662B] focus:ring-4 focus:ring-[#EC662B]/10 text-base bg-white shadow-lg transition-all duration-300 placeholder:text-gray-400"
            />
            <Search
              size={20}
              className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                isSearchFocused ? "text-[#EC662B]" : "text-gray-400"
              }`}
            />
            
            {/* Search button */}
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#EC662B] text-white px-6 py-2 rounded-xl hover:bg-[#d1572a] transition-colors duration-200 font-medium">
              Cari
            </button>
          </div>

          {/* Search Results Dropdown */}
          {(results.length > 0 || (isSearchFocused && query.length === 0)) && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-20">
              {query.length === 0 && isSearchFocused ? (
                // Show popular searches when focused but no query
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={18} className="text-[#EC662B]" />
                    <span className="font-medium text-gray-700">Pencarian Populer</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((term, idx) => (
                      <button
                        key={idx}
                        onClick={() => handlePopularSearch(term)}
                        className="px-4 py-2 bg-gray-100 hover:bg-[#EC662B] hover:text-white rounded-full text-sm transition-colors duration-200"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                // Show search results
                <div className="max-h-80 overflow-y-auto">
                  {results.map((item, idx) => (
                    <div
                      key={idx}
                      className="group p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b border-gray-50 last:border-b-0"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {item.isPopular && (
                              <TrendingUp size={14} className="text-[#EC662B]" />
                            )}
                            <h3 className="font-medium text-gray-900 group-hover:text-[#EC662B] transition-colors duration-200">
                              {item.title}
                            </h3>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span className="bg-gray-100 px-2 py-1 rounded-md text-xs">
                              {item.category}
                            </span>
                            <div className="flex items-center gap-1">
                              <Clock size={12} />
                              <span>{item.readTime}</span>
                            </div>
                          </div>
                        </div>
                        <ArrowRight size={16} className="text-gray-400 group-hover:text-[#EC662B] group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div className="group">
            <div className="text-2xl font-bold text-[#EC662B] group-hover:scale-110 transition-transform duration-200">500+</div>
            <div className="text-sm text-gray-600">Tutorial</div>
          </div>
          <div className="group">
            <div className="text-2xl font-bold text-[#EC662B] group-hover:scale-110 transition-transform duration-200">50k+</div>
            <div className="text-sm text-gray-600">Member Aktif</div>
          </div>
          <div className="group">
            <div className="text-2xl font-bold text-[#EC662B] group-hover:scale-110 transition-transform duration-200">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}