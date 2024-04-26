import { CompanyProfile } from "../types";
import { fmpApi } from "./axiosInstances";

export const fetchCompanyProfile = async (
  symbol: string
): Promise<CompanyProfile> => {
  try {
    const response = await fmpApi.get(`/profile/${encodeURIComponent(symbol)}`);
    return response.data[0];
  } catch (error) {
    console.error("Failed to fetch company profile:", error);
    throw error;
  }
};
