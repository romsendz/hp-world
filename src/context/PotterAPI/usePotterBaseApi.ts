import { useContext } from "react";
import PotterApi from "../../assets/api/queries/usePotterApi/type";
import { PotterApiContext } from "./context";

export const usePotterBaseApi = (): PotterApi => {
  const context = useContext(PotterApiContext);
  if (!context) {
    throw new Error("usePotterApi must be used within a PotterApiProvider");
  }
  return context;
};
