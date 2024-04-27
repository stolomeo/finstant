import { CompanyCashFlow } from "../types";
import { fmpApi } from "./axiosInstances";

export const fetchCashflowStatements = async (
  symbol: string
): Promise<CompanyCashFlow[]> => {
  try {
    const params = {
      limit: 100,
    };

    const response = await fmpApi.get(
      `/cash-flow-statement/${encodeURIComponent(symbol)}`,
      { params }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch income statements:", error);
    throw error;
  }
};
