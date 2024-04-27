import { Link } from "react-router-dom";

type Props = {
  type: string;
  symbol: string;
  filingDate: string;
  finalLink: string;
};

export const SecFiling = ({ type, symbol, filingDate, finalLink }: Props) => {
  const filingYear = new Date(filingDate).getFullYear();
  return (
    <Link
      reloadDocument
      to={finalLink}
      type="button"
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-black border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2 focus:ring-primary focus:text-primary dark:bg-gray-850 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
    >
      {type} - {symbol} - {filingYear}
    </Link>
  );
};
