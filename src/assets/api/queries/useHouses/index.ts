import { useQuery } from "@tanstack/react-query";
import House from "./type";
import fetcher from "../../fetcher";
import useLanguageListener from "../../../../locale/hooks/useLanguageListener";

const useHousesQuery = () => {
  const language = useLanguageListener();

  const QUERY_KEY = [language, `houses`];
  const REQUEST_URL = `/${language}/houses`;

  const getHouses = async (): Promise<House[]> => {
    return fetcher(REQUEST_URL);
  };

  return useQuery<House[]>({ queryKey: QUERY_KEY, queryFn: getHouses });
};

export default useHousesQuery;
