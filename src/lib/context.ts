"use client"

import { createContext, useContext } from "react";
import { BookContextType, TotalBooksContextType } from "./interfaces";
import data from "../data.json";

export const initialBookData = {
  isbn: 0,
  isbn13: 0,
  year: 0,
  title: "",
  subtitle: "",
  authors: [''],
  categories: [''],
  publisher: "",
  pages: 0,
  description: "",
  website: "",
  image:"",
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
