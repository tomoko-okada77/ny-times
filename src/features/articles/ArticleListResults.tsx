import Card from "@/components/Card"
import type { Article } from "@/types/article";

type Props = {
  state: "error" | "loading" | "no-data" | "success";
  error?: string;
  docs?: Article[];
};

const ArticleListResults = ({ state, error, docs }: Props) => {
  switch (state) {
    case "error":
      return <p className="text-red-700">{error}</p>;
    case "loading":
      return <p>Loading article...</p>;
    case "no-data":
      return <p>No articles found.</p>;
    case "success":
      return (
        <>
          {docs?.map((article) => (
            <Card article={article} key={article._id} />
          ))}
        </>
      );
    default:
      return null;
  }
};

export default ArticleListResults;
