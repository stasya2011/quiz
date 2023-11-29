import Image from "next/image";

const Dictionary = async () => {
  const res = await fetchNews();
  // console.log(res.length);
  return res.map((el: any) => {
    return (
      <div key={el.url}>
        <h2>{el.title}</h2>
        {el.urlToImage ? (
          <Image width={100} height={100} src={el.urlToImage} alt={el.title} />
        ) : null}
      </div>
    );
  });
};

export default Dictionary;

const fetchNews = async () => {
  const key = process.env.API_KEY_THE_NEWS;
  const data = await fetch(
    `https://newsapi.org/v2/everything?q=tesla&from=2023-10-29&sortBy=publishedAt&apiKey=${key}`
  );
  const { articles } = await data.json();
  return articles;
};
