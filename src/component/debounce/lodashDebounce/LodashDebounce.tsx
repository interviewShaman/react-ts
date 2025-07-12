import { useState, useMemo, ChangeEvent } from "react";
import debounce from "lodash/debounce";

export default function LodashDebounce() {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (value: string) => {
    console.log("Searching for:", value);
  };

  // Memoize the debounced function
  const debouncedSearch = useMemo(() => debounce(handleSearch, 1000), []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    debouncedSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type to search..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}
