"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BooksList from "./BooksList";
import { FC } from "react";
import { useTotalBooksContext } from "@/lib/context";

const Suggestions: FC = () => {
  const { totalBooksData } = useTotalBooksContext();

  return (
    <div className="flex flex-col mt-20 gap-3">
      <h2 className="text-2xl font-semibold">Other books you might like</h2>
      <Carousel className="max-w-xs md:max-w-xl lg:max-w-4xl xl:max-w-6xl">
        <CarouselContent>
          {totalBooksData.books.map((book) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/4" key={book.isbn}>
              <BooksList book={book} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Suggestions;
