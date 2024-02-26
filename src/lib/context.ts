import { createContext, useContext } from "react";
import { BookContextType, TotalBooksContextType } from "./interfaces";
import data from "../data.json";

export const initialBookData = {
  isbn: "",
  title: "",
  subtitle: "",
  author: "",
  published: "",
  publisher: "",
  pages: 0,
  description: "",
};

export const initialTotalBooksData = data;

export const BookContext = createContext<BookContextType>({
  bookData: initialBookData,
  setBookData: () => {},
});

export const TotalBooksContext = createContext<TotalBooksContextType>({
  totalBooksData: initialTotalBooksData,
  setTotalBooksData: () => {},
});

export const useBookContext = () => useContext(BookContext);
export const useTotalBooksContext = () => useContext(TotalBooksContext);
