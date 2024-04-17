import type { SearchResult } from "../types";

const SearchResult = ({
  currency,
  exchangeShortName,
  name,
  stockExchange,
  symbol,
}: SearchResult) => {
  return (
    <div className="flex flex-col items-center justify-between w-full p-6 rounded-lg md:gap-4 md:flex-row">
      <div className="font-bold text-center md:text-left">
        {name} ({symbol})
      </div>
      <p className="">{currency}</p>
      <p className="font-bold">
        {exchangeShortName} - {stockExchange}
      </p>
      <div className="flex flex-col items-center justify-end flex-1 md:flex-row md:space-y-0">
        <button
          type="submit"
          className="p-2 px-8 text-white rounded-lg bg-primary hover:opacity-70 focus:outline-none"
        >
          Add
        </button>
      </div>
    </div>
  );
};

type Props = {
  searchResults: SearchResult[];
};

export const SearchResults = ({ searchResults }: Props) => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result, index) => (
          <SearchResult key={index} {...result} />
        ))
      ) : (
        <p className="mt-3 mb-3 text-xl font-semibold text-center md:text-xl">
          No results found!
        </p>
      )}
    </>
  );
};
