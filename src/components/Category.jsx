 import Link from "next/link";
import { Button } from "@heroui/react";

const Category = async () => {
  const res = await fetch(
    "https://book-borrowing-platform-k266.vercel.app/category.json"
  );
  const categories = await res.json();

  return (
    <div className="space-x-3">
      {categories.map((cty) => (
        <Link key={cty.id} href={`/all_books?category=${cty.name}`}>
          <Button size="sm" variant="outline">
            {cty.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Category;