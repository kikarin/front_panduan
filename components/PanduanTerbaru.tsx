"use client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

const allArticles = [
  {
    title: "Cara Submit Jurnal di OJS",
    date: "Juni 13, 2025",
    slug: "cara-submit-jurnal-di-ojs",
  },
  {
    title: "Cara Mengatasi OJS Logout Sendiri Melalui Setting Session",
    date: "Juni 13, 2025",
    slug: "cara-mengatasi-ojs-logout-sendiri",
  },
  {
    title: "Cara Membuat Journal di OJS (Open Journal System)",
    date: "Juni 13, 2025",
    slug: "cara-membuat-journal-di-ojs",
  },
  {
    title: "Cara Membuat Favicon di OJS (Open Journal System)",
    date: "Juni 13, 2025",
    slug: "cara-membuat-favicon-di-ojs",
  },
  {
    title: "Cara Menghilangkan index.php pada (Open Journal System)",
    date: "Juni 13, 2025",
    slug: "cara-menghilangkan-indexphp-di-ojs",
  },
  {
    title: "Cara Install Plugin OJS (Open Journal System)",
    date: "Juni 13, 2025",
    slug: "cara-install-plugin-di-ojs",
  },
  {
    title: "Cara Meningkatkan Keamanan OJS (Open Journal System)",
    date: "Juni 13, 2025",
    slug: "cara-meningkatkan-keamanan-ojs",
  },
  {
    title: "Cara Menambahkan Google reCAPTCHA di OJS (Open Journal System)",
    date: "Juni 13, 2025",
    slug: "cara-menambahkan-recaptcha-di-ojs",
  },
  {
    title: "Cara Mengganti Theme OJS (Open Journal System)",
    date: "Juni 12, 2025",
    slug: "cara-mengganti-theme-di-ojs",
  },
  {
    title: "Cara Reset Password OJS (Open Journal System)",
    date: "Juni 12, 2025",
    slug: "cara-reset-password-ojs",
  },
  {
    title: "cara-menambahkan-user-di-ojs",
    date: "Juni 12, 2025",
    slug: "cara-menambahkan-user-di-ojs",
  },
  {
    title: "cara-setting-smtp2go-pada-domain",
    date: "Juni 12, 2025",
    slug: "cara-setting-smtp2go-pada-domain",
  },
];

export default function PanduanTerbaru() {
  const [showAll, setShowAll] = useState(false);

  const displayedArticles = showAll ? allArticles : allArticles.slice(0, 6);

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-[Karla,sans-serif]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#282828] mb-12 text-center">
          Panduan Terbaru
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedArticles.map((article, index) => (
            <Link
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              href={`/panduan-terbaru/${article.slug}`}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 block"
            >
              <h3 className="text-lg font-semibold text-[#282828] mb-4 leading-tight">
                {article.title}
              </h3>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <CalendarDays size={14} className="text-[#EC662B]" />
                  {article.date}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-[#EC662B] text-white font-medium rounded-full hover:bg-[#d4541f] transition-colors duration-200"
            >
              Muat Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
