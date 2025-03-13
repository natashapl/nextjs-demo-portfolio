"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFilter } from "../context/FilterContext";
import { useState } from "react";
import Image from "next/image";

export default function Sidebar() {
  const { selectedTag, setSelectedTag, uniqueTags } = useFilter(); 
  const pathname = usePathname();
  const showFilter = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  // Capitalize first letter of each tag
  const capitalize = (tag: string) => tag.charAt(0).toUpperCase() + tag.slice(1);
  
  return (
    <aside className="w-full sticky top-0 md:relative md:w-1/4 p-8 bg-gray-100 z-20">
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden ml-auto flex items-center px-4 py-2 bg-black text-white border border-gray-300 rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"} {/* Hamburger (☰) and Close (✕) Icon */}
      </button>

      {/* Sidebar Content (Hidden on Mobile Initially) */}
      <div className={`${isOpen ? "block" : "hidden"} flex flex-col w-full md:block md:relative md:px-0 bg-gray-100 absolute p-8 left-0`}>
          {/* Logo */}
          <div className="mt-3 mb-6 flex items-center justify-center">
            <Link href="/" className="block">
              <Image
                className="block"
                src="/images/nworld-logo-400x435.webp"
                alt="Natasha's World Logo"
                width={120}
                height={131}
                title="Natasha's World Logo"
                priority
              />           
            </Link>
          </div>

          {/* Description */}
          <h1 className="text-gray-600 mb-6 font-bold text-lg">
            Next.js Portfolio Demo          
          </h1>
          
          {/* Navigation Links */}
          <nav className="space-y-2 text-gray-700">
            <Link href="/" className={`block ${pathname === "/" ? "font-bold text-blue-600" : "hover:text-blue-600"}`}>
              Portfolio
            </Link>
            <Link href="/About" className={`block ${pathname === "/About" ? "font-bold text-blue-600" : "hover:text-blue-600"}`}>
              About
            </Link>
          </nav>

          {/* Conditional Filter Section (Only on Homepage) */}
          {showFilter && uniqueTags.length > 0 && (
            <div className="mt-10">
              <h2 className="text-gray-600 uppercase text-sm mb-3 border-b border-gray-300 pb-2">Filter</h2>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <button
                    className={`hover:text-blue-600 text-left cursor-pointer ${selectedTag === null ? "text-blue-600 font-semibold" : ""}`}
                    onClick={() => setSelectedTag(null)}
                  >
                    All
                  </button>
                </li>

                {uniqueTags.map((tag) => (
                  <li key={tag}>
                    <button
                      className={`hover:text-blue-600 text-left cursor-pointer ${selectedTag === tag ? "text-blue-600 font-semibold" : ""}`}
                      onClick={() => setSelectedTag(tag)}
                    >
                      {capitalize(tag)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
    </aside>
  );
}
