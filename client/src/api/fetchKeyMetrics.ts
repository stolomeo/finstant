import { CompanyKeyMetrics } from "../types";
import { fmpApi } from "./axiosInstances";

export const fetchKeyMetrics = async (
  symbol: string
): Promise<CompanyKeyMetrics> => {
  try {
    const response = await fmpApi.get(
      `/key-metrics-ttm/${encodeURIComponent(symbol)}`
    );
    return response.data[0];
  } catch (error) {
    console.error("Failed to fetch SEC filings:", error);
    throw error;
  }
};
