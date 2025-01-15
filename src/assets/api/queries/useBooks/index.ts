import { useQuery } from "@tanstack/react-query";
import Book from "./type";
import fetcher from "../../fetcher";
import useLanguageListener from "../../../../locale/hooks/useLanguageListener";

const useBooksQuery = () => {
  const language = useLanguageListener();

  const QUERY_KEY = [language, `books`];
  const REQUEST_URL = `/${language}/books`;

  const getBooks = async (): Promise<Book[]> => {
    return fetcher(REQUEST_URL);
  };

  return useQuery<Book[]>({
    queryKey: QUERY_KEY,
    queryFn: getBooks,
  });
};

export default useBooksQuery;
