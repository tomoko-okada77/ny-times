import Image from "next/image";
import type { Article } from "@/types/article";

type Props = {
  article: Article;
};

const Card = ({ article }: Props) => {
  return (
    <a
      href={article.web_url}
      target="_blank"
      rel="noreferrer noopener"
      key={article._id}
      className="mb-4 pb-4 border-b border-gray-300 grid grid-cols-[auto_1fr] items-center gap-8"
    >
      <figure className="w-28 h-[75px] bg-gray-300 overflow-hidden">
        {article.multimedia?.default?.url && (
          <>
            <Image
              src={article.multimedia?.default?.url || ""}
              alt={article.headline.main}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </>
        )}
      </figure>
      <div>
        <h3 className="text-lg font-bold">{article.headline.main}</h3>
        <p className="text-sm">{article.abstract}</p>
      </div>
    </a>
  );
}

export default Card;
