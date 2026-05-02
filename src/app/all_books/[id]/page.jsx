import React from 'react';

const  bookDetails = async({params}) => {
    const {id} = await params;
       const res = await fetch(
    "https://book-borrowing-platform-k266.vercel.app/data.json");
  const books = await res.json();
  const book = books.find(b => b.id == id);
    return (
        <div>
            books details
        </div>
    );
};

export default  bookDetails;