import { createContext } from "react";
import PotterApi from "../../assets/api/queries/usePotterApi/type";

export const PotterApiContext = createContext<PotterApi | undefined>(undefined);
