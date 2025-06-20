import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ArticleSearchParams, ArticleSearchResponse } from "@/types/article";

export const nytimesApi = createApi({
  reducerPath: "nytimesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nytimes.com/svc/search/v2",
  }),
  endpoints: (builder) => ({
    searchArticles: builder.query<ArticleSearchResponse, ArticleSearchParams>({
      query: ({ q, fq }) => ({
        url: "articlesearch.json",
        params: {
          ...(q && { q }),
          ...(fq && { fq: "section.name:" + fq }),
          "api-key": process.env.NEXT_PUBLIC_NYT_API_KEY,
        },
      }),
    }),
  }),
});

export const { useSearchArticlesQuery } = nytimesApi;
