import { deleteStockFromPortfolio } from "../api/deleteStockFromPortfolio";
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
    <div className="flex flex-col p-8 mx-auto space-y-4 text-center rounded-lg shadow-lg shadow-gray-300">
      <div className="pt-6 text-xl font-bold">{symbol}</div>
      <button
        onClick={handleRemoveStock}
        type="button"
        className="py-3 text-white bg-red-500 border-2 rounded-lg hover:text-red-500 hover:bg-white"
        aria-label={`Remove ${symbol} from portfolio`}
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
    <section>
      <h2 className="mt-3 mb-3 text-3xl font-semibold text-center md:text-4xl">
        My Portfolio
      </h2>
      <div className="flex flex-wrap">
        {portfolioItems?.length > 0 ? (
          portfolioItems.map((item) => (
            <PortfolioItem
              key={item.id}
              symbol={item.symbol}
              refreshPortfolio={refreshPortfolio}
            />
          ))
        ) : (
          <h3 className="mt-3 mb-3 text-xl font-semibold text-center md:text-xl">
            Your portfolio is empty.
          </h3>
        )}
      </div>
    </section>
  );
};
