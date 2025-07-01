"use client";

import { useArticleSearch } from "@/hooks/useArticleSearch";
import Input from "@/components/Input"
import Select from "@/components/Select";
import ArticleListResults from "./ArticleListResults";
import { SECTION_NAMES } from "@/data/sections";

export default function ArticleList() {
  const {
    filterQuery,
    handleInput,
    handleFilterChange,
    data,
    error,
    isLoading,
  } = useArticleSearch();

  const sectionOptions = SECTION_NAMES.map(name => ({
    value: name,
    label: name
  }))

  return (
    <>
      <div className="flex gap-6">
        <Input type="text" onChange={(e) => handleInput(e.target.value)} />
        <Select
          options={sectionOptions}
          placeholder="ジャンルを選択"
          value={filterQuery}
          onChange={(e) => handleFilterChange(e.target.value)}
        />
      </div>
      <div className="mt-8">
        <ArticleListResults
          error={typeof error === "string" ? error : undefined}
          docs={data?.response?.docs}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}
