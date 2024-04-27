import { CompanySecFilings } from "../types";
import { fmpApi } from "./axiosInstances";

export const fetchIncomeStatements = async (
  symbol: string
): Promise<CompanySecFilings[]> => {
  try {
    const params = {
      limit: 50,
    };

    const response = await fmpApi.get(
      `/income-statement/${encodeURIComponent(symbol)}`,
      { params }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch income statements:", error);
    throw error;
  }
};
