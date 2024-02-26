"use client";

import Books from "@/components/Books";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col">
      <h2 className="text-center text-2xl md:text-3xl mt-10 font-semibold">
        Search to find your new book
      </h2>
      <div className="mt-10 xl:px-0">
        <Input placeholder="Search..." />
      </div>
      <Books />
    </div>
  );
}
