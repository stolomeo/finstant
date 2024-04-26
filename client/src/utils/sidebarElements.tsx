import { FaHome, FaMoneyBill, FaTable } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";

export const sidebarElements = [
  {
    icon: <FaHome />,
    label: "Company Profile",
    route: "company-profile",
  },

  {
    icon: <FaTable />,
    label: "Income Statement",
    route: "income-statement",
  },

  {
    icon: <FaTableCells />,
    label: "Balance Sheet",
    route: "balance-sheet",
  },

  {
    icon: <FaMoneyBill />,
    label: "Cashflow Statement",
    route: "cashflow-statement",
  },

  {
    icon: <SlGraph />,
    label: "Historical Dividend",
    route: "historical-dividend",
  },
];
