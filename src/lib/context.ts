"use client"

import { createContext, useContext } from "react";
import { BookContextType, TotalBooksContextType } from "./interfaces";
import data from "../data.json";

export const initialBookData = {
  isbn: null,
  isbn13: null,
  year: null,
  title: "",
  subtitle: "",
  authors: [''],
  categories: [''],
  published: "",
  publisher: "",
  pages: null,
  description: "",
  website: "",
  image:""
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
