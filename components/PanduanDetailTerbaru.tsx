"use client";

import { CalendarDays, ExternalLink } from "lucide-react";

interface Props {
  category: string;
  title: string;
  updated: string;
  content: React.ReactNode;
}

export default function PanduanDetailTerbaru({ category, title, updated, content }: Props) {
  return (
    <main className="bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-[Karla,sans-serif]">
      <div className="max-w-screen-xl mx-auto lg:flex lg:gap-8">

        {/* Sidebar Iklan */}
        <aside className="hidden lg:block lg:w-1/4 flex-shrink-0">
          <div className="sticky top-28 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
            <h4 className="font-semibold text-[#282828] mb-2 flex items-center">
              <ExternalLink size={16} className="mr-2 text-[#EC662B]" />
              Sponsor
            </h4>
            <div className="h-60 bg-gray-100 flex items-center justify-center rounded border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-500">
                <ExternalLink size={32} className="mx-auto mb-2 opacity-50" />
                <span className="text-sm">Banner Ads</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Tempat promosi atau sponsor.</p>
          </div>
        </aside>

        {/* Konten Utama */}
        <article className="flex-1 w-full">
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
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
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
        </article>
      </div>
    </main>
  );
}