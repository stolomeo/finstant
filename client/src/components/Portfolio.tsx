import { deleteStockFromPortfolio } from "../api";
import { Stock } from "../types";

type PortfolioItemProps = {
  symbol: string;
  refreshPortfolio: () => Promise<void>;
};
const PortfolioItem = ({ symbol, refreshPortfolio }: PortfolioItemProps) => {
  const handleRemoveStock = async () => {
    try {
      await deleteStockFromPortfolio(symbol);
      await refreshPortfolio();
    } catch (error) {
      console.error("Failed to remove stock from portfolio:", error);
    }
  };
  return (
    <div className="flex flex-col items-center w-1/4 p-6 bg-white border border-gray-200 rounded-lg shadow lg:w-1/5 xl:w-1/6 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {symbol}
      </h5>
      <button
        onClick={handleRemoveStock}
        className="justify-center w-11/12 px-3 py-2 text-lg text-white bg-red-500 rounded-lg md:w-1/2 xl:w-1/3 hover:bg-red-600 focus:ring-4 focus:outline-none"
      >
        X
      </button>
    </div>
  );
};

type PortfolioProps = {
  portfolioItems: Stock[];
  refreshPortfolio: () => Promise<void>;
};

export const Portfolio = ({
  portfolioItems,
  refreshPortfolio,
}: PortfolioProps) => {
  return (
    <section className="mb-8">
      <h2 className="mt-3 mb-3 text-3xl font-semibold text-center md:text-4xl">
        My Portfolio
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {portfolioItems?.length > 0 ? (
          portfolioItems.map((item) => (
            <PortfolioItem
              key={item.id}
              symbol={item.symbol}
              refreshPortfolio={refreshPortfolio}
            />
          ))
        ) : (
          <h3 className="mx-auto mt-3 mb-3 text-xl font-semibold text-center md:text-xl">
            Your portfolio is empty.
          </h3>
        )}
      </div>
    </section>
  );
};
