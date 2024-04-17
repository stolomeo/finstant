import { ChangeEvent, SyntheticEvent, useState } from "react";
import { fetchSearchResults } from "../api";
import { Portfolio, Searchbar, SearchResults } from "../components";
import { SearchResult } from "../types";

export const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const data = await fetchSearchResults(
        search,
        import.meta.env.VITE_FINANCIAL_MODELING_PREP_API_KEY
      );
      setSearchResults(data);
    } catch {
      alert("Failed to fetch search results. Please try again later.");
    }
  };

  return (
    <>
      <Searchbar
        search={search}
        handleSearch={handleSearch}
        onSearchSubmit={onSearchSubmit}
      />
      <Portfolio />
      <SearchResults searchResults={searchResults} />
    </>
  );
};
