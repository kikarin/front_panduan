"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = ["Semua", "Hosting", "Domain", "VPS", "Email"];

const guides = [
  {
    category: "Hosting",
    title: "Panduan Lengkap Hosting (cPanel)",
    description: "Pelajari cara mengelola hosting dengan cPanel dari dasar hingga advanced",
    href: "#",
    image: "/web.png",
  },
  {
    category: "Domain",
    title: "Panduan Lengkap Domain",
    description: "Memahami domain, DNS, dan cara konfigurasi yang tepat",
    href: "#",
    image: "/web.png",
  },
  {
    category: "VPS",
    title: "Panduan Lengkap VM / VPS",
    description: "Setup dan konfigurasi Virtual Private Server untuk berbagai kebutuhan",
    href: "#",
    image: "/web.png",
  },
  {
    category: "VPS",
    title: "Panduan Lengkap VPS Windows",
    description: "Pengelolaan VPS dengan sistem operasi Windows Server",
    href: "#",
    image: "/web.png",
  },
  {
    category: "Email",
    title: "Panduan Lengkap Email Bisnis",
    description: "Setup email profesional untuk bisnis dengan fitur lengkap",
    href: "#",
    image: "/web.png",
  },
  {
    category: "Layanan",
    title: "Panduan Lengkap Layanan SSL",
    description: "Implementasi SSL certificate untuk keamanan website",
    href: "#",
    image: "/web.png",
  },
];

export default function PanduanPage() {
  const [selectedTab, setSelectedTab] = useState("Semua");

  const filteredGuides =
    selectedTab === "Semua"
      ? guides
      : guides.filter((g) => g.category === selectedTab);

  return (
    <main className="bg-gray-50 min-h-screen pt-16 pb-12 px-4 sm:px-6 lg:px-8 font-[Karla,sans-serif]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Explore Semua Panduan
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Temukan panduan lengkap sesuai kebutuhan layanan kamu dengan step-by-step yang mudah diikuti.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedTab(cat)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedTab === cat
                ? "bg-[#EC662B] text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-sm"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Guide Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredGuides.map((guide, idx) => (
          <div
            key={idx}
            className="group bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:border-gray-300"
          >
            {/* Category & Read Time */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-[#EC662B] uppercase tracking-wide">
                {guide.category}
              </span>
            </div>

            {/* Icon */}
            <div className="mb-4">
              <Image
                src={guide.image}
                alt={guide.title}
                width={48}
                height={48}
                className="rounded-lg"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
              {guide.title}
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {guide.description}
            </p>

            {/* Link */}
            <Link
              href={guide.href}
              className="inline-flex items-center text-[#EC662B] font-medium group-hover:underline transition-colors"
            >
              Mulai Belajar
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}