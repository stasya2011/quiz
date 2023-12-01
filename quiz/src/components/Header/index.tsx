import Link from "next/link";
import styles from "./style.module.scss";

const HeaderCustom = () => {
  return (
    <div className={styles.header}>
      <Link href="/dictionary" className={styles.active}>
        Top headlines
      </Link>
      <Link href="/">Home</Link>
    </div>
  );
};

export default HeaderCustom;
