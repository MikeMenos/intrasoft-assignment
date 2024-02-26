"use client";

import { Fade } from "react-awesome-reveal";
import BooksList from "./BooksList";
import { useTotalBooksContext } from "@/lib/context";
import { FC } from "react";
import { IBook } from "@/lib/interfaces";
import { textFormatter } from "@/lib/utils";

interface IProps {
  filteredBooks: IBook[] | undefined;
  filterName: string;
}

const Books: FC<IProps> = ({ filteredBooks, filterName }) => {
  const { totalBooksData } = useTotalBooksContext();

  if (filteredBooks?.length === 0)
    return (
      <div className="text-center font-semibold text-lg mt-10">
        No results found while filtering by{" "}
        {
          <span className="text-main text-xl">
            {textFormatter(filterName)}.
          </span>
        }
      </div>
    );

  return (
    <Fade>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:px-0">
        {filteredBooks === undefined
          ? totalBooksData.books.map((book) => (
              <BooksList book={book} key={book.isbn} />
            ))
          : filteredBooks.map((filteredBook) => (
              <BooksList book={filteredBook} key={filteredBook.isbn} />
            ))}
      </div>
    </Fade>
  );
};

export default Books;
