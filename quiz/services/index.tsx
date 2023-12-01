export const fetchNews = async () => {
  const key = process.env.API_KEY_THE_NEWS;
  const newsFromYesterday = new Date().getDate;
  console.log(newsFromYesterday);
  const data = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=6&apiKey=${key}`
  );
  const res = await data.json();

  return res;
};
