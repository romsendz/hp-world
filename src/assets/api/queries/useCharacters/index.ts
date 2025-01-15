import { useQuery } from "@tanstack/react-query";
import Character from "./type";
import fetcher from "../../fetcher";
import useLanguageListener from "../../../../locale/hooks/useLanguageListener";

const useCharactersQuery = () => {
  const language = useLanguageListener();

  const QUERY_KEY = [language, `characters`];
  const REQUEST_URL = `/${language}/characters`;

  const getCharacters = async (): Promise<Character[]> => {
    return fetcher(REQUEST_URL);
  };

  return useQuery<Character[]>({ queryKey: QUERY_KEY, queryFn: getCharacters });
};

export default useCharactersQuery;
