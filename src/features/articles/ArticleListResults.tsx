import Card from "@/components/Card"
import type { Article } from "@/types/article";

type Props = {
  state: "error" | "loading" | "no-data" | "success";
  error?: string;
  data?: { response: { docs: Article[] } };
};

const ArticleListResults = ({ state, error, data }: Props) => {
  switch (state) {
    case "error":
      return <p className="text-red-700">{error}</p>;
    case "loading":
      return <>Loading article...</>;
    case "no-data":
      return null;
    case "success":
      return (
        <>
          {data!.response.docs.map((article) => (
            <Card article={article} key={article._id} />
          ))}
        </>
      );
    default:
      return null;
  }
};

export default ArticleListResults;
