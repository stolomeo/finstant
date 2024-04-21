type PortfolioItemProps = {
  symbol: string;
};
const PortfolioItem = ({ symbol }: PortfolioItemProps) => {
  return (
    <div className="flex flex-col p-8 mx-auto space-y-4 text-center rounded-lg shadow-lg shadow-gray-300">
      <div className="pt-6 text-xl font-bold">{symbol}</div>
      <button className="py-3 text-white bg-red-500 border-2 rounded-lg hover:text-red-500 hover:bg-white">
        X
      </button>
    </div>
  );
};

import { Stock } from "../types";

type PortfolioProps = {
  portfolioItems: Stock[];
};

export const Portfolio = ({ portfolioItems }: PortfolioProps) => {
  return (
    <section>
      <h2 className="mt-3 mb-3 text-3xl font-semibold text-center md:text-4xl">
        My Portfolio
      </h2>
      <div className="flex flex-wrap">
        {portfolioItems?.length > 0 ? (
          portfolioItems.map((item) => (
            <PortfolioItem key={item.id} symbol={item.symbol} />
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
