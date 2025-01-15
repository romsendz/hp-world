import { useQuery } from "@tanstack/react-query";
import PotterApi from "./type";
import fetcher from "../../fetcher";

const QUERY_KEY = [`potterApi`];
const REQUEST_URL = ``;

const getPotterApi = async (): Promise<PotterApi> => {
  return fetcher(REQUEST_URL);
};

const usePotterApiQuery = () => {
  return useQuery<PotterApi>({ queryKey: QUERY_KEY, queryFn: getPotterApi });
};

export default usePotterApiQuery;
