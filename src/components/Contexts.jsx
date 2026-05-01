import React from "react";

const Contexts = () => {
  return (
    <div>
      <div className=" bg-base-300 px-6 py-10 mt-10">
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">
            Online Book Borrowing Platform
          </h1>
          <p className="mt-4 text-gray-600">
            Discover, borrow, and enjoy thousands of books online. A simple and
            modern digital library experience built for readers everywhere.
          </p>

        </section>

        <section className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-teal-400 text-white rounded-lg shadow">
            <h2 className="font-semibold text-xl">📖 Huge Collection</h2>
            <p className="text-teal-100  mt-2">
              Explore books from science, fiction, history, and more.
            </p>
          </div>

          <div className="p-6 bg-teal-400 text-white rounded-lg shadow">
            <h2 className="font-semibold text-xl">⚡ Easy Borrowing</h2>
            <p className="text-teal-100  mt-2">
              Borrow books instantly with just one click.
            </p>
          </div>

          <div className="p-6 bg-teal-400 text-white rounded-lg shadow">
            <h2 className="font-semibold text-xl">🔒 Secure System</h2>
            <p className=" text-teal-100 mt-2">
              Safe authentication and reliable data management.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contexts;
