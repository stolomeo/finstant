import axios from "axios";

// Instance for Financial Modeling Prep API
export const fmpApi = axios.create({
  baseURL: "https://financialmodelingprep.com/api/v3",
  headers: {
    "Content-Type": "application/json",
  },
  params: { apikey: import.meta.env.VITE_FINANCIAL_MODELING_PREP_API_KEY },
});

// Instance for local API
export const finstantApi = axios.create({
  baseURL: "http://localhost:5212/api",
  headers: {
    "Content-Type": "application/json",
  },
});
