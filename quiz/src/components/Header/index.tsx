"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import AuthButton from "../AuthButton";
import styles from "./style.module.scss";

const HeaderCustom = () => {
  const pathname = usePathname();

  return (
    <div className={styles.header}>
      <Link
        href="/dictionary"
        className={pathname === "/dictionary" ? styles.active : styles.default}
      >
        Top headlines
      </Link>
      <Link
        className={pathname === "/" ? styles.active : styles.default}
        href="/"
      >
        Home
      </Link>
      <AuthButton />
    </div>
  );
};

export default HeaderCustom;
