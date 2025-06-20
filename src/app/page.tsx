import ArticleList from "@/features/articles/ArticleList"

export default function Home() {
  return (
    <div className="min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="mb-6 text-4xl font-bold">The New York Times</h1>
      <ArticleList />
    </div>
  );
}
