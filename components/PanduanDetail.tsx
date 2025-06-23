"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  CalendarDays, 
  Menu, 
  X,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";

interface Subtopic {
  title: string;
  href: string;
  children?: Subtopic[];
}

interface PanduanDetailProps {
  category: string;
  title: string;
  updated: string;
  subtopics: Subtopic[];
  content: React.ReactNode;
}

export default function PanduanDetail({
  category,
  title,
  updated,
  subtopics,
  content,
}: PanduanDetailProps) {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

  const handleDropdown = (key: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderSubtopics = (items: Subtopic[], depth = 0, parentKey = "") => {
    return items.map((item, idx) => {
      const key = parentKey + idx;
      const hasChildren = item.children && item.children.length > 0;
      return (
        <div key={key} className={`${depth > 0 ? 'ml-4' : ''}`}>
          <div className="flex items-center">
            {hasChildren && (
              <button
                type="button"
                className="mr-1 text-[#EC662B] focus:outline-none"
                onClick={() => handleDropdown(key)}
                aria-label={openDropdowns[key] ? 'Tutup subtopik' : 'Buka subtopik'}
              >
                {openDropdowns[key] ? <ChevronRight size={14} className="rotate-90 transition-transform" /> : <ChevronRight size={14} />}
              </button>
            )}
            <Link
              href={item.href}
              className={`
                flex items-center px-3 py-2 rounded-lg text-sm
                transition-colors duration-200 hover:bg-[#EC662B]/10 hover:text-[#EC662B]
                ${depth === 0 
                  ? "text-[#282828] font-medium" 
                  : "text-gray-600"
                }
              `}
            >
              {!hasChildren && <ChevronRight size={14} className="mr-2 flex-shrink-0" />}
              <span>{item.title}</span>
            </Link>
          </div>
          {hasChildren && openDropdowns[key] && (
            <div className="mt-1">
              {renderSubtopics(item.children!, depth + 1, key + "-")}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <main className="bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-[Karla,sans-serif]">
      <div className="max-w-screen-xl mx-auto lg:flex lg:gap-8">
        
        {/* Sidebar */}
        <aside className="lg:w-80 w-full mb-6 lg:mb-0">
          <div className="lg:sticky lg:top-28">
            {/* Mobile Toggle */}
            <button
              className="lg:hidden w-full mb-4 flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 shadow-sm"
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              <span className="flex items-center text-[#282828] font-medium">
                <Menu size={18} className="mr-2" />
                Daftar Isi
              </span>
              {openSidebar ? <X size={18} /> : <ChevronRight size={18} />}
            </button>

            {/* Sidebar Content */}
            <div className={`
              transition-all duration-300
              ${openSidebar ? 'block' : 'hidden lg:block'}
            `}>
              <nav className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                {/* Header */}
                <div className="bg-[#EC662B] text-white p-4 rounded-t-lg">
                  <p className="text-sm font-medium opacity-90">{category}</p>
                </div>

                {/* Navigation */}
                <div className="p-4">
                  <div className="space-y-1">
                    {renderSubtopics(subtopics)}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </aside>

        {/* Content */}
        <article className="flex-1 w-full min-w-0">
          {/* Header */}
          <div className="border rounded-lg p-6 bg-gray-50 mb-6">
            <span className="text-xs font-semibold text-gray-500 uppercase">{category}</span>
            <h1 className="text-3xl font-bold mt-2 text-[#282828]">{title}</h1>
            <div className="flex items-center text-sm text-gray-500 mt-1 mb-4">
              <CalendarDays size={16} className="mr-1 text-[#EC662B]" />
              Terakhir diperbarui: {updated}
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
            <div className="prose max-w-none 
              prose-headings:text-[#282828] 
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:font-bold
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-[#EC662B] prose-h3:font-semibold
              prose-p:text-gray-700 prose-p:leading-relaxed 
              prose-code:bg-gray-100 prose-code:text-[#EC662B] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-ul:my-4 prose-li:my-1
            ">
              {content}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-[#282828] mb-3">
              Apakah panduan ini membantu?
            </h3>
            <div className="flex gap-3">
              <button className="flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium">
                <ThumbsUp size={16} className="mr-2" />
                Ya, membantu
              </button>
              <button className="flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium">
                <ThumbsDown size={16} className="mr-2" />
                Perlu perbaikan
              </button>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}