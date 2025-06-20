"use client";

import { useState } from "react";
import { useSearchArticlesQuery } from "@/services/nytimes";
import Input from "@/components/Input"
import Select from "@/components/Select";
import Card from "@/components/Card"

export default function ArticleList() {
  const [q, setQ] = useState("");
  const [fq, setFq] = useState("");
  const { data, error, isLoading } = useSearchArticlesQuery({ q, fq });

  return (
    <>
      <div className="flex gap-6">
        <Input onChange={setQ} />
        <Select value={fq} onChange={setFq} />
      </div>
      <div className="mt-8">
        {error ? (
          <p className="text-red-700">An error occurred.</p>
        ) : isLoading ? (
          <>Loading article...</>
        ) : data && data.response.docs ? (
          <>
            {data.response.docs.map((article) => (
              <Card article={article} key={article._id} />
            ))}
          </>
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </>
  );
}
