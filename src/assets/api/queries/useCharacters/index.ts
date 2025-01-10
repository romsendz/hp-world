import { useQuery } from "@tanstack/react-query";
import Character from "./type";
import fetcher from "../../fetcher";

const QUERY_KEY = [`characters`];
const REQUEST_URL = `/characters`;

const getCharacters = async (): Promise<Character[]> => {
  return fetcher(REQUEST_URL);
};

const useCharactersQuery = () => {
  return useQuery<Character[]>({ queryKey: QUERY_KEY, queryFn: getCharacters });
};

export default useCharactersQuery;
