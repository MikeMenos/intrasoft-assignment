"use client";

import { useState } from "react";
import Books from "@/components/Books";
import { Input } from "@/components/ui/input";
import {
  BookContext,
  initialBookData,
  useTotalBooksContext,
} from "@/lib/context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IBook } from "@/lib/interfaces";
import { textFormatter } from "@/lib/utils";
import { NextPage } from "next";
import Link from "next/link";
import { IoMdAddCircleOutline } from "react-icons/io";

type BookKey = Exclude<keyof typeof initialBookData, "pages">;

const Home: NextPage = () => {
  const [bookData, setBookData] = useState<IBook>(initialBookData);
  const [filteredBooks, setFilteredBooks] = useState<IBook[] | undefined>(
    undefined
  );
  const [filterName, setFilterName] = useState<BookKey>("title");
  const { totalBooksData, setTotalBooksData } = useTotalBooksContext();
  const filterOptions = [
    "title",
    "subtitle",
    "categories",
    "authors",
    "isbn",
    "isbn13",
    "publisher",
  ];

  const onFilterOptionSelect = (option: BookKey) => {
    setBookData(initialBookData);
    setFilteredBooks(undefined);
    // setTotalBooksData(totalBooksData);
    setFilterName(option);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookData((prevState) => ({ ...prevState, [name]: value }));
    const filteredBooks = totalBooksData.books.filter((book) => {
      return book[filterName]
        ?.toString()
        .toLowerCase()
        .includes(value.toLowerCase());
    });
    setFilteredBooks(filteredBooks);
  };

  return (
    <BookContext.Provider value={{ bookData, setBookData }}>
      <div className="flex flex-col w-full">
        <h2 className="text-center text-2xl md:text-3xl mt-10 font-semibold">
          Search to find your new book
        </h2>
        <div className="mt-10 xl:px-0 flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-24 font-semibold bg-black rounded-lg text-white">
              Filter By
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {filterOptions.map((option) => (
                <DropdownMenuItem
                  key={option}
                  onSelect={() => onFilterOptionSelect(option as BookKey)}
                >
                  {textFormatter(option)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            placeholder={`Search by ${textFormatter(filterName)}...`}
            value={
              bookData[filterName] === 0 ? undefined : bookData[filterName]!
            }
            onChange={onInputChange}
            name={filterName}
          />
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger>
                <Link href="/add-book">
                  <IoMdAddCircleOutline size={30} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add Book</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Books filteredBooks={filteredBooks} filterName={filterName} />
      </div>
    </BookContext.Provider>
  );
};

export default Home;
