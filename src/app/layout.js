"use client";
import { Provider } from "react-redux";
import Carousel from "../components/HeroSection";
import Navbar from "../components/Navbar";
import './globals.css';
import appStore from "@/store/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Provider store={appStore}>
        <Navbar />
        <Carousel/>
        <main className="container mx-auto p-4">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
