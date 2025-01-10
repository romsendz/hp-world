import { useQuery } from "@tanstack/react-query";
import Spell from "./type";
import fetcher from "../../fetcher";

const QUERY_KEY = [`spells`];
const REQUEST_URL = `/spells`;

const getSpells = async (): Promise<Spell[]> => {
  return fetcher(REQUEST_URL);
};

const useSpellsQuery = () => {
  return useQuery<Spell[]>({ queryKey: QUERY_KEY, queryFn: getSpells });
};

export default useSpellsQuery;
