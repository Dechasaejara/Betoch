
import { Article } from "@/types/user";
import Card from "@/components/macro/card";


export default async function Home() {
  const searchKey = "pm. abiy";


  const today = new Date();
  const lastweek = new Date(today.getTime() - (7 * 24 * 60 * 60 * 1000));

  function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const from: string = formatDate(lastweek);
  const to: string = formatDate(today);

  const data = await fetch(`https://newsapi.org/v2/everything?q=${searchKey}&language=en&from=${from}&to=${to}&sortBy=popularity&apiKey=${process.env.News_API_KEY}`, { next: { revalidate: 500 } });

  const { articles } = await data.json();
  console.log({ data })
  const news: Article[] = articles;

  return (
    <div className="news-page">
      {news && news.map((article, index) => (
        <Card key={index} article={article} />
      ))}
    </div>
  );
}
