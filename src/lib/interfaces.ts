export interface IBook {
  isbn: string;
  title: string;
  subtitle: string;
  author: string;
  published: string;
  publisher: string;
  pages: number;
  description: string;
  website: string;
  image: string;
}

export interface BookContextType {
  bookData: {
    isbn: string;
    title: string;
    subtitle: string;
    author: string;
    published: string;
    publisher: string;
    pages: number;
    description: string;
  };
  setBookData: React.Dispatch<
    React.SetStateAction<{
      isbn: string;
      title: string;
      subtitle: string;
      author: string;
      published: string;
      publisher: string;
      pages: number;
      description: string;
    }>
  >;
}

export interface TotalBooksContextType {
  totalBooksData:  {
    books: {
      isbn: string;
      title: string;
      subtitle: string;
      author: string;
      published: string;
      publisher: string;
      pages: number;
      description: string;
      website: string;
      image: string;
  }[];
  }
  setTotalBooksData:React.Dispatch<React.SetStateAction<{
    books: {
        isbn: string;
        title: string;
        subtitle: string;
        author: string;
        published: string;
        publisher: string;
        pages: number;
        description: string;
        website: string;
        image: string;
    }[];
}>>
}
