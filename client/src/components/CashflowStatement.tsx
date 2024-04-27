/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderData } from "react-router-dom";
import { Column, CompanyCashFlow } from "../types";
import { formatLargeMonetaryNumber } from "../utils";
import { Table } from "./Table";

const columns: Column[] = [
  {
    header: "Date",
    accessor: "date",
  },
  {
    header: "Operating Cashflow",
    accessor: "operatingCashFlow",
  },
  {
    header: "Investing Cashflow",
    accessor: "netCashUsedForInvestingActivites",
  },
  {
    header: "Financing Cashflow",
    accessor: "netCashUsedProvidedByFinancingActivities",
  },
  {
    header: "Cash At End of Period",
    accessor: "cashAtEndOfPeriod",
  },
  {
    header: "CapEX",
    accessor: "capitalExpenditure",
  },
  {
    header: "Issuance Of Stock",
    accessor: "commonStockIssued",
  },
  {
    header: "Free Cash Flow",
    accessor: "freeCashFlow",
  },
];

const formatConfig = {
  date: (date: string) => date,
  operatingCashFlow: formatLargeMonetaryNumber,
  netCashUsedForInvestingActivites: formatLargeMonetaryNumber,
  netCashUsedProvidedByFinancingActivities: formatLargeMonetaryNumber,
  cashAtEndOfPeriod: formatLargeMonetaryNumber,
  capitalExpenditure: formatLargeMonetaryNumber,
  commonStockIssued: formatLargeMonetaryNumber,
  freeCashFlow: formatLargeMonetaryNumber,
};
export const CashflowStatement = () => {
  const cashflowStatements = useLoaderData() as CompanyCashFlow[];

  const formattedCashflowStatements = cashflowStatements.map((statement) => {
    const formattedStatement = {} as any;
    Object.keys(statement).forEach((key) => {
      formattedStatement[key] = (formatConfig as any)[key]
        ? (formatConfig as any)[key]((statement as any)[key])
        : (statement as any)[key];
    });
    return formattedStatement;
  });

  return <Table columns={columns} rows={formattedCashflowStatements} />;
};
