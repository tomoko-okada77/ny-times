"use client";

import { useState } from "react";
import { useSearchArticlesQuery } from "@/services/nytimes";
import Input from "@/components/Input"
import Select from "@/components/Select";
import debounce from "lodash.debounce";
import ArticleListResults from "./ArticleListResults";

export default function ArticleList() {
  const [q, setQ] = useState("");
  const [fq, setFq] = useState("");
  const { data, error, isLoading } = useSearchArticlesQuery({ q, fq });

  const handleInput = debounce((value: string) => {
    setQ(value);
  }, 500);

  const getState = () => {
    if (error) return "error";
    if (isLoading) return "loading";
    if (!data || data.response.docs.length === 0) return "no-data";
    return "success";
  };

  return (
    <>
      <div className="flex gap-6">
        <Input type="text" onChange={e => handleInput(e.target.value)} wrapperClass="search" />
        <Select value={fq} onChange={setFq} />
      </div>
          
      <div className="mt-8">
        <ArticleListResults
          state={getState()}
          error={typeof error === "string" ? error : undefined}
          data={data}
        />
      </div>
    </>
  );
}
