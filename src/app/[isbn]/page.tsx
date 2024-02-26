"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { CiStar } from "react-icons/ci";
import { Fade } from "react-awesome-reveal";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";
import Suggestions from "@/components/Suggestions";
import { IBook } from "@/lib/interfaces";
import { useTotalBooksContext } from "@/lib/context";
import { NextPage } from "next";

const Book: NextPage<{ params: { isbn: string } }> = ({ params }) => {
  const [book, setBook] = useState<IBook>();
  const { totalBooksData } = useTotalBooksContext();
  const originalDate = book?.published;
  const formattedDate = dayjs(originalDate).format("MMMM D, YYYY");

  // Since data is from local file, there's no other way to get the book details to another page route.
  useEffect(() => {
    const bookDetails = totalBooksData.books.find(
      (book) => book.isbn === Number(params.isbn)
    );
    setBook(bookDetails);
  }, []);

  if (!book) return null;

  return (
    <Fade>
      <div className="flex flex-col md:flex-row justify-around items-center mt-10 w-full md:px-6">
        <div className="md:w-1/2">
          <Image
            src={book.image}
            alt="Book Cover Image"
            width={300}
            height={300}
          />
          <div className="flex items-center justify-center md:justify-normal gap-4 mt-5">
            <CgProfile size={30} />
            <h3 className="text-xl font-semibold">{book.authors.join(", ")}</h3>
          </div>
          <div className="flex mt-5 justify-center md:justify-normal">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="cursor-pointer">
                <CiStar size={30} />
              </span>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-start justify-center mt-10 md:mt-0">
          <h2 className="text-3xl font-semibold">{book.title}</h2>
          <p className="mt-10 font-semibold">Description:</p>
          <p className="mt-2">{book.description}</p>
          <p className="mt-5">
            <span className="font-semibold">Number of Pages</span>: {book.pages}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Publisher</span>: {book.publisher}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Published</span>: {formattedDate}
          </p>
          <p className="mt-2">
            <span className="font-semibold">ISBN-10</span>: {book.isbn}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Website</span>:{" "}
            <a href={book.website} target="_blank">
              {book.website}
            </a>
          </p>
          <Button className="mt-10 w-28 text-md">Buy</Button>
        </div>
      </div>
      <Suggestions activeIsbn={params.isbn} />
    </Fade>
  );
};

export default Book;
