"use client";
import Link from "next/link";
import AuthButton from "../AuthButton";
import styles from "./style.module.scss";

const HeaderCustom = () => {
  return (
    <div className={styles.header}>
      <Link href="/dictionary" className={styles.active}>
        Top headlines
      </Link>
      <Link href="/">Home</Link>
      <AuthButton />
    </div>
  );
};

export default HeaderCustom;
