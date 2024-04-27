import { useLoaderData } from "react-router-dom";
import { CompanyBalanceSheet } from "../types";
import { getBalanceSheetElements } from "../utils";
import { MetricCard } from "./MetricCard";

export const BalanceSheet = () => {
  const balanceSheetData = useLoaderData() as CompanyBalanceSheet;
  const balanceSheetElements = getBalanceSheetElements(balanceSheetData);

  return (
    <div className="w-full p-4 mt-4 mb-4 ml-4 rounded-lg shadow bg-gray-50 dark:bg-gray-800 sm:p-6">
      <ul className="divide-y divide-gray-200">
        {balanceSheetElements.map((item, index) => (
          <MetricCard key={index} label={item.label} total={item.total} />
        ))}
      </ul>
    </div>
  );
};
