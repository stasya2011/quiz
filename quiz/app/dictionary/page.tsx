import { IPreviewCard } from "./types";
import PreviewCard from "@/src/components/PreviewCard";

const Dictionary = async () => {
  const articles = await fetchNews();
  console.log(articles[0]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {articles.map((el: IPreviewCard) => {
        return <PreviewCard key={el.url} data={el} />;
      })}
    </div>
  );
};

export default Dictionary;

const fetchNews = async () => {
  const key = process.env.API_KEY_THE_NEWS;
  const data = await fetch(
    `https://newsapi.org/v2/everything?q=tesla&from=2023-10-29&sortBy=publishedAt&pageSize=9&page=2&apiKey=${key}`
  );
  const { articles } = await data.json();

  return articles;
};
