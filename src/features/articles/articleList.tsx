"use client";

import { useState } from "react";
import { useSearchArticlesQuery } from "@/services/nytimes";
import Image from "next/image";
import debounce from "lodash.debounce"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { PhotoIcon } from "@heroicons/react/24/outline";
import "./articleList.scss"

export default function ArticleList() {
  const [q, setQ] = useState("");
  const { data, error, isLoading } = useSearchArticlesQuery({ q });

  const handleInput = debounce((value: string) => {
    setQ(value);
  }, 500);

  // const [fq, setFq] = useState("");
  return (
    <div>
      <div className="search w-1/3 px-6 py-3 border border-gray-300 rounded-full flex items-center justify-between gap-3">
        <input
          onChange={(e) => handleInput(e.target.value)}
          type="text"
          placeholder="keyword"
          className="flex-grow"
        />
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
      </div>

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
                className="article mb-4 pb-4 border-b border-gray-300 grid grid-cols-[auto_1fr_auto] items-center gap-8"
              >
                <figure className="w-28 h-[75px] bg-gray-200 overflow-hidden flex items-center justify-center rounded-sm">
                  {article.multimedia?.default?.url ? (
                    <Image
                      src={article.multimedia?.default?.url || ""}
                      alt={article.headline.main}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  ) : (
                    <PhotoIcon className="w-8 h-8 text-gray-400" />
                  )}
                </figure>
                <div>
                  <h3 className="text-lg font-bold">{article.headline.main}</h3>
                  <p className="text-sm">{article.abstract}</p>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-gray-400" />
              </a>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}
