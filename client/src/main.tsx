import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchCompanyProfile, fetchKeyMetrics, fetchSecFilings } from "./api";
import { fetchIncomeStatements } from "./api/fetchIncomeStatement";
import App from "./App";
import { CompanyProfile, IncomeStatement } from "./components";
import "./index.css";
import {
  CompanyPage,
  HomePage,
  LoginPage,
  RegisterPage,
  SearchPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "search", element: <SearchPage /> },
      {
        path: "company/:ticker",
        element: <CompanyPage />,
        children: [
          {
            path: "company-profile",
            element: <CompanyProfile />,
            loader: async ({ params }) => {
              return [
                await fetchCompanyProfile(params.ticker as string),
                await fetchSecFilings(params.ticker as string),
                await fetchKeyMetrics(params.ticker as string),
              ];
            },
          },
          {
            path: "income-statement",
            element: <IncomeStatement />,
            loader: async ({ params }) => {
              return await fetchIncomeStatements(params.ticker as string);
            },
          },
          // { path: "balance-sheet", element: <BalanceSheet /> },
          // { path: "cashflow-statement", element: <CashflowStatement /> },
          // { path: "historical-dividend", element: <HistoricalDividend /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
