import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TopBooks = async () => {
  const res = await fetch(
    "https://book-borrowing-platform-k266.vercel.app/data.json",
  );
  const books = await res.json();

  const topBooks = books.slice(0, 4);

  return (
    <div className="mt-16 max-w-7xl mx-auto px-6">
      <h2 className="font-bold text-3xl text-center mb-10">Featured Books</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {topBooks.map((book) => (
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
              <Chip size="sm" color="accent" className="absolute right-2 top-2">
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
              href={`/books/${book.id}`}
              className="block mt-4 text-center bg-teal-500 text-white py-1 rounded-full hover:bg-teal-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBooks;
