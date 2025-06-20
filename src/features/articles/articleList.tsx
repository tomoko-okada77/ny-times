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
        <Input onChange={setQ} wrapperClass="search" />
        <Select value={fq} onChange={setFq} />
      </div>
          
      <div className="mt-8">
        {(() => {
          if (error && typeof error === "string") {
            return <p className="text-red-700">{error}</p>;
          }
          if (isLoading) {
            return <>Loading article...</>;
          }
          if (!data || data.response.docs.length === 0) {
            return <p>No articles found.</p>;
          }

          return (
            <>
              {data.response.docs.map((article) => (
                <Card article={article} key={article._id} />
              ))}
            </>
          );
        })()}
      </div>
    </>
  );
}
