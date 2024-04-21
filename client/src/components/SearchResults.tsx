import { addStockToPortfolio as apiAddStockToPortfolio } from "../api/addStockToPortfolio";
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
  const addStockToPortfolio = async () => {
    try {
      await apiAddStockToPortfolio(symbol);
      await refreshPortfolio();
    } catch (error) {
      console.error("Failed to add stock to portfolio:", error);
      throw error;
    }
  };
  return (
    <div className="flex flex-col items-center justify-between w-full p-6 rounded-lg md:gap-4 md:flex-row">
      <div className="font-bold text-center md:text-left">
        {name} ({symbol})
      </div>
      <p>{currency}</p>
      <p className="font-bold">
        {exchangeShortName} - {stockExchange}
      </p>
      <div className="flex flex-col items-center justify-end flex-1 md:flex-row md:space-y-0">
        <button
          onClick={addStockToPortfolio}
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
    <>
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
    </>
  );
};
