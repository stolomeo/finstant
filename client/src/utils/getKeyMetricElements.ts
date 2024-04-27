import { CompanyKeyMetrics } from "../types";
import { formatLargeNumber } from "./formatting";

export const getKeyMetricElements = (keyMetrics: CompanyKeyMetrics) => {
  return [
    {
      label: "Market Cap",
      total: formatLargeNumber(keyMetrics.marketCapTTM),
      description: "Total value of all a company's shares of stock",
    },
    {
      label: "Current Ratio",
      total: parseFloat(keyMetrics.currentRatioTTM.toFixed(2)),
      description:
        "Measures the companies ability to pay short term debt obligations",
    },
    {
      label: "Return On Equity",
      total: parseFloat(keyMetrics.roeTTM.toFixed(2)),
      description:
        "Return on equity is the measure of a company's net income divided by its shareholder's equity",
    },
    {
      label: "Return On Assets",
      total: parseFloat(keyMetrics.returnOnTangibleAssetsTTM.toFixed(2)),
      description:
        "Return on assets is the measure of how effective a company is using its assets",
    },
    {
      label: "Free Cashflow Per Share",
      total: parseFloat(keyMetrics.freeCashFlowPerShareTTM.toFixed(2)),
      description:
        "Free cashflow per share is a measure of a company's financial flexibility that is determined by dividing free cash flow by the total number of shares outstanding",
    },
    {
      label: "Book Value Per Share TTM",
      total: parseFloat(keyMetrics.bookValuePerShareTTM.toFixed(2)),
      description:
        "Book value per share indicates a firm's net asset value (total assets - total liabilities) on per share basis",
    },
    {
      label: "Divdend Yield TTM",
      total: parseFloat(keyMetrics.dividendYieldTTM.toFixed(2)),
      description:
        "Shows how much a company pays each year relative to stock price",
    },
    {
      label: "Capex Per Share TTM",
      total: parseFloat(keyMetrics.capexPerShareTTM.toFixed(2)),
      description:
        "Capex is used by a company to aquire, upgrade, and maintain physical assets",
    },
    {
      label: "Graham Number",
      total: parseFloat(keyMetrics.grahamNumberTTM.toFixed(2)),
      description:
        "This is the upperbound of the price range that a defensive investor should pay for a stock",
    },
    {
      label: "PE Ratio",
      total: parseFloat(keyMetrics.peRatioTTM.toFixed(2)),
      description:
        "The price-to-earnings (P/E) ratio measures a company's current share price relative to its per-share earnings.",
    },
  ];
};
