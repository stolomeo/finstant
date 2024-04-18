import { fmpApi } from "./axiosInstances";

export const fetchSearchResults = async (query: string) => {
  try {
    const params = {
      query: encodeURIComponent(query),
      limit: 10,
    };

    const response = await fmpApi.get("/search", { params });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch search results:", error);
    throw error;
  }
};
