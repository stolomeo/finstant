import { CompanyBalanceSheet } from "../types";
import { fmpApi } from "./axiosInstances";

export const fetchBalanceSheet = async (
  symbol: string
): Promise<CompanyBalanceSheet[]> => {
  try {
    const params = {
      limit: 20,
    };

    const response = await fmpApi.get(
      `/balance-sheet-statement/${encodeURIComponent(symbol)}`,
      { params }
    );
    return response.data[0];
  } catch (error) {
    console.error("Failed to fetch balance sheet statement:", error);
    throw error;
  }
};
