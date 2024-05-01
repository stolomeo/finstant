import { CompanyBalanceSheet } from "../types";
import { formatLargeMonetaryNumber } from "./formatting";

type BalanceSheetElements = {
  key: keyof CompanyBalanceSheet;
  label: string;
};

export const getBalanceSheetElements = (balanceSheet: CompanyBalanceSheet) => {
  const elements: BalanceSheetElements[] = [
    { key: "totalAssets", label: "Total Assets" },
    { key: "totalCurrentAssets", label: "Current Assets" },
    { key: "cashAndCashEquivalents", label: "Total Cash" },
    { key: "propertyPlantEquipmentNet", label: "Property & Equipment" },
    { key: "intangibleAssets", label: "Intangible Assets" },
    { key: "longTermDebt", label: "Long Term Debt" },
    { key: "totalDebt", label: "Total Debt" },
    { key: "totalLiabilities", label: "Total Liabilities" },
    { key: "totalCurrentLiabilities", label: "Current Liabilities" },
    { key: "totalStockholdersEquity", label: "Stakeholder’s Equity" },
    { key: "retainedEarnings", label: "Retained Earnings" },
  ];

  return elements.map(({ key, label }) => ({
    label,
    total: formatLargeMonetaryNumber(balanceSheet[key]),
  }));
};
