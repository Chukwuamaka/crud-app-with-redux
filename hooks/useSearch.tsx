import { useState } from "react";

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const updateSearchQuery = (query: string) => {
    setSearchQuery(query);
  }

  return { searchQuery, updateSearchQuery }
}

export default useSearch;