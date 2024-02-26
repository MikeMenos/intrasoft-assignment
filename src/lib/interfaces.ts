export interface IBook {
  isbn: number | null;
  isbn13?: number | null;
  year?: number | null;
  title: string;
  subtitle: string;
  authors: string[];
  categories?: string[];
  published: string;
  publisher: string;
  pages: number | null;
  description: string;
  website: string;
  image: string;
}

export interface BookContextType {
  bookData: {
    isbn: number | null;
    isbn13?: number | null;
    year?: number | null;
    title: string;
    subtitle: string;
    authors: string[];
    categories?: string[];
    published: string;
    publisher: string;
    pages: number | null;
    description: string;
    website: string;
    image: string;
  };
  setBookData: React.Dispatch<
    React.SetStateAction<{
      isbn: number | null;
      isbn13?: number | null;
      year?: number | null;
      title: string;
      subtitle: string;
      authors: string[];
      categories?: string[];
      published: string;
      publisher: string;
      pages: number | null;
      description: string;
      website: string;
      image: string;
    }>
  >;
}

export interface TotalBooksContextType {
  totalBooksData: {
    books: {
      isbn: number | null;
      isbn13?: number | null;
      year?: number | null;
      title: string;
      subtitle: string;
      authors: string[];
      categories?: string[];
      published: string;
      publisher: string;
      pages: number | null;
      description: string;
      website: string;
      image: string;
    }[];
  };
  setTotalBooksData: React.Dispatch<
    React.SetStateAction<{
      books: {
        isbn: number | null;
        isbn13?: number | null;
        year?: number | null;
        title: string;
        subtitle: string;
        authors: string[];
        categories?: string[];
        published: string;
        publisher: string;
        pages: number | null;
        description: string;
        website: string;
        image: string;
      }[];
    }>
  >;
}
