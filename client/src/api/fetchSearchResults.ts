import axios from "axios";

export const fetchSearchResults = async (query: string, apiKey: string) => {
  const url = `https://financialmodelingprep.com/api/v3/search?query=${encodeURIComponent(
    query
  )}&limit=10&apikey=${apiKey}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch search results:", error);
    throw error;
  }
};
