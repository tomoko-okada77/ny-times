"use client";

// import { useState } from "react"
import { useSearchArticlesQuery } from "@/services/nytimes";
import Image from "next/image";
import "./articleList.css"

export default function ArticleList() {
  const { data, error, isLoading } = useSearchArticlesQuery("");

  // const [q, setQ] = useState("");
  // const [fq, setFq] = useState("");
  return (
    <div>
      <input type="text" className="p-4 border border-gray-300 rounded-md" />
      {/* {q}
      {fq} */}
      <div className="App mt-8">
        {error ? (
          <p className="text-red-700">An error occured.</p>
        ) : isLoading ? (
          <>Loading article...</>
        ) : data ? (
          <>
            {data.response.docs.map((article) => (
              <a
                href={article.web_url}
                target="_blank"
                key={article._id}
                className="article mb-4 pb-4 border-b border-gray-300 grid grid-cols-[auto_1fr] items-center gap-8"
              >
                <figure className="w-28 h-[75px] bg-gray-300">
                  {article.multimedia?.default?.url && (
                    <>
                      <Image
                        src={article.multimedia?.default?.url || ""}
                        alt={article.headline.main}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </>
                  )}
                </figure>
                <div>
                  <h3 className="text-lg font-bold">{article.headline.main}</h3>
                  <p className="text-sm">{article.abstract}</p>
                </div>
              </a>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}
