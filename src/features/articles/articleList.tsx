"use client";

// import { useState } from "react"
import { useSearchArticlesQuery } from "@/services/nytimes";
import Input from "@/components/Input"
import Card from "@/components/Card"

export default function ArticleList() {
  const { data, error, isLoading } = useSearchArticlesQuery("");

  // const [q, setQ] = useState("");
  // const [fq, setFq] = useState("");
  return (
    <div>
      <Input />
      {/* {q}
      {fq} */}
      <div className="mt-8">
        {error ? (
          <p className="text-red-700">An error occurred.</p>
        ) : isLoading ? (
          <>Loading article...</>
        ) : data ? (
          <>
            {data.response.docs.map((article) => (
              <Card article={article} key={article._id} />
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}
