export const fetchNews = async (page: string = "1") => {
  const key = process.env.customKey;

  const data = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&page=${page}&apiKey=${key}`
  );
  const res = await data.json();

  return res;
};
