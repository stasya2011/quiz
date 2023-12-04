import { IPreviewCard } from "./types";
import PreviewCard from "@/src/components/PreviewCard";
import { fetchNews } from "@/services";

const Dictionary = async () => {
  const { articles, totalResults } = await fetchNews();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {articles.length ? (
        articles.map((el: IPreviewCard) => {
          return <PreviewCard key={el.url} data={el} />;
        })
      ) : (
        <h2>No information was found.</h2>
      )}
    </div>
  );
};

export default Dictionary;
