import { isAxiosError } from "axios";
import { User } from "../types";
import { finstantApi } from "./axiosInstances";

export const registerUser = async (userData: User) => {
  try {
    const response = await finstantApi.post("/account/register", userData);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw new Error("An unexpected error occurred during registration");
    }
  }
};
