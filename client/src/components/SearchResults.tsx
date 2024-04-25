import { addStockToPortfolio } from "../api";
import type { SearchResult } from "../types";

interface SearchResultProps extends SearchResult {
  refreshPortfolio: () => Promise<void>;
}

const SearchResult = ({
  currency,
  exchangeShortName,
  name,
  stockExchange,
  symbol,
  refreshPortfolio,
}: SearchResultProps) => {
  const handleAddStock = async () => {
    try {
      await addStockToPortfolio(symbol);
      await refreshPortfolio();
    } catch (error) {
      console.error("Failed to add stock to portfolio:", error);
    }
  };
  return (
    <div className="flex flex-col items-center w-3/4 gap-3 p-6 mx-auto mb-4 rounded-lg shadow-lg dark:shadow-md md:gap-4 md:flex-row dark:bg-gray-900 dark:shadow-gray-700">
      <div className="font-bold text-center md:text-left">
        {name} ({symbol})
      </div>
      <p>{currency}</p>
      <p className="font-bold">
        {exchangeShortName} - {stockExchange}
      </p>
      <div className="flex flex-col items-center justify-end flex-1 md:flex-row">
        <button
          onClick={handleAddStock}
          type="button"
          className="p-2 px-8 text-white rounded-lg bg-primary hover:opacity-70 focus:outline-none"
          aria-label={`Add ${name} to portfolio`}
        >
          Add
        </button>
      </div>
    </div>
  );
};

type SearchResultsProps = {
  searchResults: SearchResult[];
  refreshPortfolio: () => Promise<void>;
};

export const SearchResults = ({
  searchResults,
  refreshPortfolio,
}: SearchResultsProps) => {
  return (
    <section>
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <SearchResult
            key={result.symbol}
            {...result}
            refreshPortfolio={refreshPortfolio}
          />
        ))
      ) : (
        <p className="mt-3 mb-3 text-xl font-semibold text-center md:text-xl">
          No results found!
        </p>
      )}
    </section>
  );
};
