import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import { ReactNode } from "react";
import { FilterProvider } from "./context/FilterContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My portfolio",
  description: "This is a portfolio page that uses Next.js and Contentful to store project details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="md:flex max-w-7xl mx-auto min-h-screen">
          <FilterProvider uniqueTags={[]}>
              {children}
          </FilterProvider>
        </div>
      </body>
    </html>
  );
}
