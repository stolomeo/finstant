import { CompanyBalanceSheet } from "../types";
import { formatLargeMonetaryNumber } from "./formatting";

export const getBalanceSheetElements = (balanceSheet: CompanyBalanceSheet) => {
  return [
    {
      label: "Total Assets",
      total: formatLargeMonetaryNumber(balanceSheet.totalAssets),
    },
    {
      label: "Current Assets",
      total: formatLargeMonetaryNumber(balanceSheet.totalCurrentAssets),
    },
    {
      label: "Total Cash",
      total: formatLargeMonetaryNumber(balanceSheet.cashAndCashEquivalents),
    },
    {
      label: "Property & Equipment",
      total: formatLargeMonetaryNumber(balanceSheet.propertyPlantEquipmentNet),
    },
    {
      label: "Intangible Assets",
      total: formatLargeMonetaryNumber(balanceSheet.intangibleAssets),
    },
    {
      label: "Long Term Debt",
      total: formatLargeMonetaryNumber(balanceSheet.longTermDebt),
    },
    {
      label: "Total Debt",
      total: formatLargeMonetaryNumber(balanceSheet.totalDebt),
    },
    {
      label: "Total Liabilities",
      total: formatLargeMonetaryNumber(balanceSheet.totalLiabilities),
    },
    {
      label: "Current Liabilities",
      total: formatLargeMonetaryNumber(balanceSheet.totalCurrentLiabilities),
    },
    {
      label: "Stakeholder's Equity",
      total: formatLargeMonetaryNumber(balanceSheet.totalStockholdersEquity),
    },
    {
      label: "Retained Earnings",
      total: formatLargeMonetaryNumber(balanceSheet.retainedEarnings),
    },
  ];
};
