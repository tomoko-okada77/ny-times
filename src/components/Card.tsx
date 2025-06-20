import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { PhotoIcon } from "@heroicons/react/24/outline";
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
      className="mb-4 pb-4 border-b border-gray-300 grid grid-cols-[1fr_4fr_auto] md:items-center gap-8"
    >
      <figure className="w-full h-auto aspect-[112/75] bg-gray-300 overflow-hidden flex items-center justify-center relative">
        {article.multimedia?.default?.url ? (
          <>
            <Image
              src={article.multimedia?.default?.url || ""}
              alt={article.headline.main}
              fill={true}
              sizes="112px"
              className="object-cover"
            />
          </>
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
  );
}

export default Card;
