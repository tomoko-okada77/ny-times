"use client";

import { useState } from "react";
import { useSearchArticlesQuery } from "@/services/nytimes";
import Input from "@/components/Input"
import Card from "@/components/Card"

export default function ArticleList() {
  const [q, setQ] = useState("");
  const { data, error, isLoading } = useSearchArticlesQuery({ q });

  return (
    <div>
      <Input onChange={setQ} wrapperClass="search" />
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
    </div>
  );
}
