export interface IBook {
  isbn: number | null | undefined;
  isbn13?: number | null | undefined;
  year: number | null | undefined;
  title: string;
  subtitle: string;
  authors: string[];
  categories?: string[]
  publisher: string;
  pages: number | null | undefined;
  description: string;
  website: string;
  image: string;
}

export interface BookContextType {
  bookData: {
    isbn: number | null | undefined;
    isbn13?: number | null | undefined;
    year: number | null | undefined;
    title: string;
    subtitle: string;
    authors: string[];
    categories?: string[];
    publisher: string;
    pages: number | null | undefined;
    description: string;
    website: string;
    image: string;
  };
  setBookData: React.Dispatch<
    React.SetStateAction<{
      isbn: number | null | undefined;
      isbn13?: number | null | undefined;
      year: number | null | undefined;
      title: string;
      subtitle: string;
      authors: string[];
      categories?: string[];

      publisher: string;
      pages: number | null | undefined;
      description: string;
      website: string;
      image: string;
    }>
  >;
}

export interface TotalBooksContextType {
  totalBooksData: {
    books: {
      isbn: number | null | undefined;
      isbn13?: number | null | undefined;
      year: number | null | undefined;
      title: string;
      subtitle: string;
      authors: string[];
      categories?: string[];

      publisher: string;
      pages: number | null | undefined;
      description: string;
      website: string;
      image: string;
    }[];
  };
  setTotalBooksData: React.Dispatch<
    React.SetStateAction<{
      books: {
        isbn: number | null | undefined;
        isbn13?: number | null | undefined;
        year: number | null | undefined;
        title: string;
        subtitle: string;
        authors: string[];
        categories?: string[];
  
        publisher: string;
        pages: number | null | undefined;
        description: string;
        website: string;
        image: string;
      }[];
    }>
  >;
}
