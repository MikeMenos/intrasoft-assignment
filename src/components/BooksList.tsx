"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { IBook } from "@/lib/interfaces";
import { FC } from "react";

interface IProps {
  book: IBook;
}

const BooksList: FC<IProps> = ({ book }) => {
  return (
    <Link href={book.isbn}>
      <Card className="hover:scale-[1.02] cursor-pointer transition-all duration-200 h-[400px] flex flex-col justify-center items-center">
        <CardHeader className="flex flex-col items-center">
          <Image src={book.image} alt="Book Cover" width={100} height={100} />
          <CardTitle className="text-center">{book.title}</CardTitle>
          <p className="italic text-sm">By {book.author}</p>
        </CardHeader>
        <CardContent className="text-center">
          <p>{book.subtitle}</p>
        </CardContent>
        <CardFooter>
          {[...Array(5)].map((_, index) => (
            <span key={index}>
              <CiStar size={25} />
            </span>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BooksList;
