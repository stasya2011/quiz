"use client";

import { fetchNews } from "@/services";

const Pagination = ({ totalResults }: { totalResults: number }) => {
  const arr: number[] = [];
  const averagePageValue = Math.floor(totalResults / 6);
  const fetchNewArticles = async (page: string) => {
    const { articles } = await fetchNews(page);
    console.log("+++", articles);
  };

  for (let i = 0; i < averagePageValue; i++) {
    arr.push(i);
  }

  return (
    <div className="flex justify-between border-solid border-2 border-indigo-600 w-50">
      {arr.map((el: number) => (
        <h3
          onClick={(e: React.MouseEvent<HTMLHeadingElement>) => {
            if (process.env.customKey) {
              fetchNewArticles(e.currentTarget.innerText);
            }
          }}
          key={el}
        >
          {el + 1}
        </h3>
      ))}
    </div>
  );
};

export default Pagination;
