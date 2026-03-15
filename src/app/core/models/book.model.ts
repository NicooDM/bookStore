export interface GoogleBooksResponse {
  items: BookItem[];
  totalItems: number;
}

export interface BookItem {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    imageLinks?: {
      thumbnail: string;
      smallThumbnail: string;
    };
    pageCount?: number;
    categories?: string[];
    averageRating?: number;
  };
  saleInfo?: {
    listPrice?: {
      amount: number;
      currencyCode: string;
    };
  };
}
