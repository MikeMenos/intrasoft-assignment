export interface IBook {
  isbn: number | null;
  isbn13: number | null;
  year: number;
  title: string;
  subtitle?: string | null;
  authors: string[];
  categories?: string[]
  publisher: string;
  pages: number | null;
  description: string;
  website?: string | null;
  image?: string | null;
}

export interface BookContextType {
  bookData: {
    isbn: number | null;
    isbn13: number | null;
    year: number;
    title: string;
    subtitle?: string | null;
    authors: string[];
    categories?: string[];
    publisher: string;
    pages: number | null;
    description: string;
    website?: string | null;
    image?: string | null;
  };
  setBookData: React.Dispatch<
    React.SetStateAction<{
      isbn: number | null;
      isbn13: number | null;
      year: number;
      title: string;
      subtitle?: string | null;
      authors: string[];
      categories?: string[];
      publisher: string;
      pages: number | null;
      description: string;
      website?: string | null;
      image?: string | null;
    }>
  >;
}

export interface TotalBooksContextType {
  totalBooksData: {
    books: {
      isbn: number | null;
      isbn13: number | null;
      year: number;
      title: string;
      subtitle?: string | null;
      authors: string[];
      categories?: string[];
      publisher: string;
      pages: number | null;
      description: string;
      website?: string | null;
      image?: string | null;
    }[];
  };
  setTotalBooksData: React.Dispatch<
    React.SetStateAction<{
      books: {
        isbn: number | null;
        isbn13: number | null;
        year: number;
        title: string;
        subtitle?: string | null;
        authors: string[];
        categories?: string[];
        publisher: string;
        pages: number | null;
        description: string;
        website?: string | null;
        image?: string | null;
      }[];
    }>
  >;
}
