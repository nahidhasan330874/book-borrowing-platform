import Category from "@/components/Category";
import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "All Books || Book Borrowing Platform ",
  description:
    "Find your next read from our diverse collection of books. Filter by category, explore new arrivals, and borrow instantly—all in a smooth and user-friendly experience. ",
};

const allBooks = async ({ searchParams }) => {
  const { category } =await searchParams;
   
  const res = await fetch(
    "https://book-borrowing-platform-k266.vercel.app/data.json"
  );
  const books = await res.json();

  const filteredBooks = category ? books.filter(book => book.category.toLowerCase() == category.toLowerCase()) :books

  return (
    <div>
      <div className="mt-10 mb-16 max-w-7xl mx-auto px-6">
        <h2 className="font-bold text-3xl mb-4">All Featured Books</h2>
         <Category/> 
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
            >
              <div className="relative w-full aspect-square ">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-xl"
                />
                <Chip
                  size="sm"
                  color="accent"
                  className="absolute right-2 top-2"
                >
                  {book.category}
                </Chip>
              </div>

              <h3 className="text-lg font-semibold mt-4 text-center line-clamp-1">
                {book.title}
              </h3>

              <p className="text-sm text-gray-500 text-center">
                {book.author || "Unknown Author"}
              </p>

              <Link
                href={`all_books/${book.id}`}
                className="block mt-4 text-center bg-teal-500 text-white py-1 rounded-full hover:bg-teal-700"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default allBooks;
