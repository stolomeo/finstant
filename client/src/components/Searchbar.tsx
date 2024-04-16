export const Searchbar = () => {
  return (
    <div className="max-w-4xl p-6 mx-auto space-y-6">
      <form className="flex w-full p-10 rounded-lg">
        <input
          type="search"
          className="flex-1 p-3 text-black placeholder-black border-2 rounded-lg bg-gray-50 focus:border-primary focus:outline-none dark:focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)]"
          id="search-input"
          placeholder="Search companies"
        />
      </form>
    </div>
  );
};
