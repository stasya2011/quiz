const Dictionary = async () => {
  const res = await fetchNews();
  console.log(res);
  return res.map((el: any) => <h2 key={el.url}>{el.title}</h2>);
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
