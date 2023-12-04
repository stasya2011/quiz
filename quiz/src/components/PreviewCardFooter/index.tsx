import Link from "next/link";
import styles from "./footer.module.scss";

const PreviewCardFooter = ({
  publishedAt,
  url,
}: {
  publishedAt: string;
  url: string;
}) => {
  return (
    <div className={styles.footer}>
      <h3>{publishedAt}</h3>
      <Link
        href={`/dictionary
      /${url}`}
      >
        open
      </Link>
    </div>
  );
};

export default PreviewCardFooter;
