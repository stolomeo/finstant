import { CompanySecFilings } from "../types";
import { fmpApi } from "./axiosInstances";

export const fetchSecFilings = async (
  symbol: string
): Promise<CompanySecFilings[]> => {
  try {
    const params = {
      type: "10-k",
      page: 0,
    };

    const response = await fmpApi.get(
      `/sec_filings/${encodeURIComponent(symbol)}`,
      { params }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch SEC filings:", error);
    throw error;
  }
};
