/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderData } from "react-router-dom";
import { Column, CompanyIncomeStatement } from "../types";
import { formatLargeMonetaryNumber, formatTwoDecimals } from "../utils";
import { Table } from "./Table";

const columns: Column[] = [
  {
    header: "Date",
    accessor: "date",
  },
  {
    header: "Revenue",
    accessor: "revenue",
  },
  {
    header: "Cost Of Revenue",
    accessor: "costOfRevenue",
  },
  {
    header: "Depreciation",
    accessor: "depreciationAndAmortization",
  },
  {
    header: "Operating Income",
    accessor: "operatingIncome",
  },
  {
    header: "Income Before Taxes",
    accessor: "incomeBeforeTax",
  },
  {
    header: "Net Income",
    accessor: "netIncome",
  },
  {
    header: "Net Income Ratio",
    accessor: "netIncomeRatio",
  },
  {
    header: "Earnings Per Share",
    accessor: "eps",
  },
  {
    header: "Earnings Per Diluted",
    accessor: "epsdiluted",
  },
  {
    header: "Gross Profit Ratio",
    accessor: "grossProfitRatio",
  },
  {
    header: "Opearting Income Ratio",
    accessor: "operatingIncomeRatio",
  },
  {
    header: "Income Before Taxes Ratio",
    accessor: "incomeBeforeTaxRatio",
  },
];

const formatConfig = {
  revenue: formatLargeMonetaryNumber,
  costOfRevenue: formatLargeMonetaryNumber,
  depreciationAndAmortization: formatLargeMonetaryNumber,
  operatingIncome: formatLargeMonetaryNumber,
  incomeBeforeTax: formatLargeMonetaryNumber,
  netIncome: formatLargeMonetaryNumber,
  netIncomeRatio: formatTwoDecimals,
  eps: formatTwoDecimals,
  epsdiluted: formatTwoDecimals,
  grossProfitRatio: formatTwoDecimals,
  operatingIncomeRatio: formatTwoDecimals,
  incomeBeforeTaxRatio: formatTwoDecimals,
};

export const IncomeStatement = () => {
  const incomeStatements = useLoaderData() as CompanyIncomeStatement[];

  const formattedIncomeStatements = incomeStatements.map((incomeStatement) => {
    const formattedIncomeStatement: any = {};
    Object.entries(incomeStatement).forEach(([key, value]) => {
      if (key !== "date" && key in formatConfig) {
        formattedIncomeStatement[key] = (formatConfig as any)[key](value);
      } else {
        formattedIncomeStatement[key] = value;
      }
    });
    return formattedIncomeStatement;
  });

  return <Table columns={columns} rows={formattedIncomeStatements} />;
};
