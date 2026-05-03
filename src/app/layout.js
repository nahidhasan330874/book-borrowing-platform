import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from 'react-hot-toast';

const OutfitFont = Outfit({
  subsets: ["latin"],
});

const navLinkClass = (path) =>
  pathname === path
    ? "text-blue-600 font-semibold"
    : "text-gray-600 hover:text-blue-500";


export const metadata = {
  title: " Book Borrowing Platform ",
  description: "A modern online book borrowing platform where users can explore a wide collection of books, filter by categories, and borrow books digitally.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${OutfitFont.className}   h-full antialiased`}
    >
      <body>
        <Navbar/>
        <main className=" max-w-7xl mx-auto">{children} 
           <Toaster position="top-right" />
        </main>
        <Footer/>
        </body>
    </html>
  );
}
