import { isAxiosError } from "axios";
import { finstantApi } from "./axiosInstances";

export const addStockToPortfolio = async (symbol: string) => {
  const params = {
    symbol,
  };

  try {
    const response = await finstantApi.post("/portfolio", {}, { params });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw new Error(
        "An unexpected error occurred when adding stock to portfolio"
      );
    }
  }
};
