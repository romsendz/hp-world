import { useQuery } from "@tanstack/react-query";
import Spell from "./type";
import fetcher from "../../fetcher";
import useLanguageListener from "../../../../locale/hooks/useLanguageListener";

const useSpellsQuery = () => {
  const language = useLanguageListener();

  const QUERY_KEY = [language, `spells`];
  const REQUEST_URL = `/${language}/spells`;

  const getSpells = async (): Promise<Spell[]> => {
    return fetcher(REQUEST_URL);
  };

  return useQuery<Spell[]>({ queryKey: QUERY_KEY, queryFn: getSpells });
};

export default useSpellsQuery;
