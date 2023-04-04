import { CommonSEO } from "@/components/SEO";
import ArticleCard from "@/components/atoms/ArticleCard";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Link from "next/link";
import Article from "./article";

const index = () => {
  return (
    <BlankTemplate>
      <div>
        <CommonSEO title="Blogs" description="This is where blogs belongs" />
        <ul className="flex justify-center p-5 bg-slate-500">
          <Link
            className="mx-5 px-5 hover:text-violet-500"
            href="/blogs/article"
          >
            Article
          </Link>
          <Link
            className="mx-5 px-5 hover:text-violet-500"
            href="/blogs/breaking-news"
          >
            Breaking News
          </Link>
          <Link
            className="mx-5 px-5 hover:text-violet-500"
            href="/blogs/hot-news"
          >
            Hot News
          </Link>
        </ul>
      </div>
    </BlankTemplate>
  );
};

export default index;
