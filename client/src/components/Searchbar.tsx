import { ChangeEvent, SyntheticEvent } from "react";

type Props = {
  search: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: SyntheticEvent) => Promise<void>;
};
export const Searchbar = ({ search, handleSearch, onSearchSubmit }: Props) => {
  return (
    <div className="max-w-4xl p-6 mx-auto space-y-6">
      <form onSubmit={onSearchSubmit} className="flex w-full p-10 rounded-lg">
        <label htmlFor="search-input" className="sr-only">
          Search Companies
        </label>
        <input
          type="search"
          className="flex-1 p-3 text-black placeholder-black border-2 rounded-lg bg-gray-50 focus:border-primary focus:outline-none dark:focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)]"
          id="search-input"
          placeholder="Enter Symbol/Company Name"
          value={search}
          onChange={(e) => handleSearch(e)}
        />
        <button
          type="submit"
          className="hidden px-5 py-2 ml-4 text-white rounded-lg md:block bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        >
          Search
        </button>
      </form>
    </div>
  );
};
