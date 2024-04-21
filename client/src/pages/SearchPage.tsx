import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { fetchSearchResults } from "../api";
import { fetchUserPortfolio } from "../api/fetchUserPortfolio";
import { Portfolio, Searchbar, SearchResults } from "../components";
import { SearchResult, Stock } from "../types";

export const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [portfolioItems, setPortfolioItems] = useState<Stock[]>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const data = await fetchSearchResults(search);
      setSearchResults(data);
    } catch {
      alert("Failed to fetch search results. Please try again later.");
    }
  };

  const refreshPortfolio = async () => {
    try {
      const userPortfolio = await fetchUserPortfolio();
      setPortfolioItems(userPortfolio);
    } catch (error) {
      console.error("Failed to fetch updated portfolio:", error);
    }
  };

  useEffect(() => {
    refreshPortfolio();
  }, []);

  return (
    <>
      <Searchbar
        search={search}
        handleSearch={handleSearch}
        onSearchSubmit={onSearchSubmit}
      />
      <Portfolio
        portfolioItems={portfolioItems}
        refreshPortfolio={refreshPortfolio}
      />
      <SearchResults
        searchResults={searchResults}
        refreshPortfolio={refreshPortfolio}
      />
    </>
  );
};
