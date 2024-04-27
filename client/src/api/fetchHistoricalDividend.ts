import { CompanyHistoricalDividend } from "../types";
import { fmpApi } from "./axiosInstances";

export const fetchHistoricalDividend = async (
  symbol: string
): Promise<CompanyHistoricalDividend[]> => {
  try {
    const response = await fmpApi.get(
      `/historical-price-full/stock_dividend/${encodeURIComponent(symbol)}`
    );
    return response.data.historical;
  } catch (error) {
    console.error("Failed to fetch historcal dividend data:", error);
    throw error;
  }
};
