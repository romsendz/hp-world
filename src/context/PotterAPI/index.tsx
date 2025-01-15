import { ReactNode } from "react";
import usePotterApiQuery from "../../assets/api/queries/usePotterApi";
import { PotterApiContext } from "./context";

interface PotterApiProviderProps {
  children: ReactNode;
}

export const PotterApiProvider = ({ children }: PotterApiProviderProps) => {
  const { data: baseData, isLoading, error } = usePotterApiQuery();
  if (isLoading) {
    return null; // Show loading spinner or message or nothing
  }

  if (error) {
    return <div>Error fetching data</div>; // Show error message
  }

  if (!baseData) {
    return <div>No data available</div>; // Handle the case where data is not available
  }
  return (
    <PotterApiContext.Provider value={baseData}>
      {children}
    </PotterApiContext.Provider>
  );
};
