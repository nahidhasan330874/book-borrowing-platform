 import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OutfitFont = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: " Home || Book Borrowing Platform ",
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
        <main className=" container mx-auto">{children}</main>
        <Footer/>
        </body>
    </html>
  );
}
