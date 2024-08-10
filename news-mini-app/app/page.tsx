import { fetchNews } from "@/backened/actions/fetch-news";
import { Article, ArticleRequest } from "@/backened/types/article-type";
import { CardContainer } from "@/components/macro/card-container";
import { getLastmonthDate } from "@/lib/utils";

const defaultValues: ArticleRequest = {
  q: 'ethiopia',
  from: getLastmonthDate(),
  language: 'en',
  sortBy: 'relevancy',
  excludeDomains:'',
  apiKey: process.env.News_API_KEY as string
};
export default async function Home() {
  const data: Article[] = await fetchNews(defaultValues)
  return (
    <>
      <CardContainer articles={data} />
    </>
    // <> className="news-page">
    //   {news && news.map((article, index) => (
    //     <Card key={index} article={article} />
    //   ))}
    // </>
  );
}
