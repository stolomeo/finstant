import { isAxiosError } from "axios";
import { finstantApi } from "./axiosInstances";

export const deleteStockFromPortfolio = async (symbol: string) => {
  const params = {
    symbol,
  };

  try {
    const response = await finstantApi.delete("/portfolio", { params });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw new Error(
        "An unexpected error occurred when deleting stock from portfolio"
      );
    }
  }
};
