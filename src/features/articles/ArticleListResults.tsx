import Card from "@/components/Card"
import type { Article } from "@/types/article";

type Props = {
  error?: string;
  docs?: Article[];
  isLoading: boolean;
};

const ArticleListResults = ({ error, docs, isLoading }: Props) => {
  if (isLoading) {
    return <p>Loading article...</p>;
  }

  if (error) {
    return <p className="text-red-700">{error}</p>;
  }

  if (!docs || docs.length === 0) {
    return <p>No articles found.</p>;
  }

  return (
    <>
      {docs?.map((article) => (
        <Card article={article} key={article._id} />
      ))}
    </>
  );
};

export default ArticleListResults;
