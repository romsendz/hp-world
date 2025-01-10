import { useQuery } from "@tanstack/react-query";
import House from "./type";
import fetcher from "../../fetcher";

const QUERY_KEY = [`houses`];
const REQUEST_URL = `/houses`;

const getHouses = async (): Promise<House[]> => {
  return fetcher(REQUEST_URL);
};

const useHousesQuery = () => {
  return useQuery<House[]>({ queryKey: QUERY_KEY, queryFn: getHouses });
};

export default useHousesQuery;
