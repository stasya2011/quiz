import Image from "next/image";
import styles from "./card.module.scss";
import { IPreviewCard } from "@/app/dictionary/types";

const PreviewCard = ({ data }: { data: IPreviewCard }) => {
  const { author, publishedAt, title, urlToImage } = data;

  return (
    <div className={styles.card}>
      <div>
        <h2>{title}</h2>
        {urlToImage ? (
          <Image
            width={150}
            height={100}
            src={urlToImage}
            alt={title}
            style={{
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        ) : null}
      </div>
      <PreviewCardFooter publishedAt={publishedAt} />
    </div>
  );
};

export default PreviewCard;

const PreviewCardFooter = ({ publishedAt }: { publishedAt: string }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "teal",
        marginTop: 20,
      }}
    >
      <h3>{publishedAt}</h3>
      <div>icons...</div>
    </div>
  );
};
