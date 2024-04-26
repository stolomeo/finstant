import { FaHome, FaMoneyBill, FaTable } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";

export const sidebarElements = [
  {
    icon: <FaHome />,
    label: "Home",
  },

  {
    icon: <FaTable />,
    label: "Income Statement",
  },

  {
    icon: <FaTableCells />,
    label: "Balance Sheet",
  },

  {
    icon: <FaMoneyBill />,
    label: "Cashflow Statement",
  },

  {
    icon: <SlGraph />,
    label: "Historical Dividend",
  },
];
