import { isAxiosError } from "axios";
import { finstantApi } from "./axiosInstances";

export const fetchUserPortfolio = async () => {
  try {
    const response = await finstantApi.get("/portfolio");
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw new Error(
        "An unexpected error occurred when fetching user portfolio"
      );
    }
  }
};
