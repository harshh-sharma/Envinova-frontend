"use client";
import Carousel from "../components/HeroSection";
import Navbar from "../components/Navbar";
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <Carousel/>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
