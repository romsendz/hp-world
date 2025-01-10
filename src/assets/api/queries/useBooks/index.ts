import { useQuery } from "@tanstack/react-query";
import Book from "./type";
import fetcher from "../../fetcher";

const QUERY_KEY = [`books`];
const REQUEST_URL = `/books`;

const getBooks = async (): Promise<Book[]> => {
  return fetcher(REQUEST_URL);
};

const useBooksQuery = () => {
  return useQuery<Book[]>({ queryKey: QUERY_KEY, queryFn: getBooks });
};

export default useBooksQuery;
