import styles from "./footer.module.scss";

const PreviewCardFooter = ({ publishedAt }: { publishedAt: string }) => {
  return (
    <div className={styles.footer}>
      <h3>{publishedAt}</h3>
      <button>open</button>
    </div>
  );
};

export default PreviewCardFooter;
