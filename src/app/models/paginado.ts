export interface Paginado<T> {
    page: number;
    totalPages: number;
    totalResults: number;
    items: T[];
  }