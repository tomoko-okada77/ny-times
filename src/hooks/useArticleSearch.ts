import { useState, useMemo } from "react";
import debounce from "lodash.debounce";
import { useSearchArticlesQuery } from "@/services/nytimes";

export function useArticleSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("");

  const { data, error, isLoading } = useSearchArticlesQuery({
    q: searchQuery,
    fq: filterQuery,
  });

  const handleInput = useMemo(
    () =>
      debounce((value: string) => {
        setSearchQuery(value);
      }, 500),
    []
  );

  const handleFilterChange = (value: string) => {
    setFilterQuery(value);
  };

  return {
    searchQuery,
    filterQuery,
    setSearchQuery,
    setFilterQuery,
    handleInput,
    handleFilterChange,
    data,
    error,
    isLoading,
  };
}