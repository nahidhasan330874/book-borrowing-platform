 
import { Button, Card, Chip, Toast, toast } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const bookDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://book-borrowing-platform-k266.vercel.app/data.json",
  );
  const books = await res.json();
  const book = books.find((b) => b.id == id);

  return (
    <div>
      <Card className="my-10 p-6 shadow  border border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center">
            <Image
              src={book.image_url}
              alt={book.title}
              width={300}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold">
              {book.title}
              <Chip color="accent" className="absolute ml-5">
                {book.category}
              </Chip>
            </h1>
            <p className="text-lg text-gray-600">by {book.author}</p>

            <p className="text-gray-700">{book.description}</p>

            <p>
              <span className="font-medium text-gray-700">Available:</span> 
              <span className="font-semibold text-green-600">
       
                {book.available_quantity} copies
              </span>
            </p>

            <Link
              href="#"
              className="block mt-4 text-center bg-teal-500 text-white py-1 rounded-full hover:bg-teal-700"
            >
              Borrow The Book
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default bookDetails;
