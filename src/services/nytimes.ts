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
      transformErrorResponse: (response: { status: number, data: unknown }) => {
        if (response.status === 429) {
          return "リクエストが多すぎます。しばらくしてから再度お試しください。";
        }
        if (response.status === 404) {
          return "記事が見つかりませんでした。";
        }
        if (
          response.data &&
          typeof response.data === "object" &&
          "message" in response.data
        ) {
          return response.data.message;
        }
        return "不明なエラーが発生しました。";
      },
    }),
  }),
});

export const { useSearchArticlesQuery } = nytimesApi;
