import Image from "next/image";
import PreviewCardFooter from "../PreviewCardFooter";
import { IPreviewCard } from "@/app/dictionary/types";
import styles from "./card.module.scss";

const PreviewCard = ({ data }: { data: IPreviewCard }) => {
  const { author, publishedAt, title, urlToImage, url } = data;

  return (
    <div className={styles.card}>
      <div className={styles["top-block"]}>
        <h2>{title}</h2>
        {urlToImage ? (
          <div className={styles["img-wrapper"]}>
            <Image
              width={300}
              height={150}
              src={urlToImage}
              alt={title}
              style={{
                objectFit: "fill",
                objectPosition: "top",
                height: "150px",
              }}
            />
          </div>
        ) : null}
      </div>
      <PreviewCardFooter publishedAt={publishedAt} url={publishedAt} />
    </div>
  );
};

export default PreviewCard;
