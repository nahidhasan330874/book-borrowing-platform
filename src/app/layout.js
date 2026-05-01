 import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
 

const OutfitFont = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Book Borrowing Platform ",
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
        <main className="container mx-auto">{children}</main>
        </body>
    </html>
  );
}
