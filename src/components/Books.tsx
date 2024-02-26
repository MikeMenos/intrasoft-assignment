"use client";

import Image from "next/image";
import data from "../data.json";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LinesEllipsis from "react-lines-ellipsis";
import { CiStar } from "react-icons/ci";
import Link from "next/link";

const Books = () => {
  // if data was fetched from an api, loading and error states would have been added.
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 xl:px-0">
      {/* book interface is inferred automatically, no need to define it */}
      {data.books.map((book) => (
        <Link href={book.isbn} key={book.isbn}>
          <Card className="hover:scale-[1.02] cursor-pointer transition-all duration-200 h-[300px] w-[300px]">
            <CardHeader>
              <Image src="" alt="Book Cover" />
              <CardTitle>{book.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <LinesEllipsis
                text={book.description}
                maxLine="3"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
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
      ))}
    </div>
  );
};

export default Books;
