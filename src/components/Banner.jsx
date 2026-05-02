
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className=" rounded-2xl max-w-7xl mt-8 shadow-sm">
      <div className=" pt-8 text-teal-500 mt-4 rounded-2xl">
        <marquee>
          New Arrivals: Atomic Habits | A Brief History of Time | The Silent Patient | 20% Special Discount on
          Memberships...
        </marquee>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-5 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Discover & Borrow Books Online
          </h1>

          <p className="text-gray-500 mb-6">
            Explore a vast collection of books, filter by categories, and borrow
            your favorite titles anytime — all from one seamless digital
            platform.
          </p>

          <div className="flex gap-4">
            <Link
              href="/all_books"
              className="border border-gray-200 hover:bg-teal-500 px-4 py-1 rounded-full  hover:text-white font-medium shadow"
            >
              Browse Now
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/banner.png"
            alt="Books Banner"
            width={500}
            height={400}
            className="rounded-lg"
          />
          
        </div>
      </div>
    </section>
  );
}
