import Link from "next/link";
import styles from "./style.module.scss";

const HeaderCustom = () => {
  return (
    <div className={styles.header}>
      <Link href="/dictionary">Dictionary </Link>
      <Link href="/">Home</Link>
    </div>
  );
};

export default HeaderCustom;
