import { fmpApi } from "./axiosInstances";

export const fetchSecFilings = async (query: string) => {
  try {
    const params = {
      query: encodeURIComponent(query),
      type: "10-k",
      page: 0,
    };

    const response = await fmpApi.get("/sec_filings", { params });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch SEC filings:", error);
    throw error;
  }
};
