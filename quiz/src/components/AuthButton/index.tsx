"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { logIn, logOut } from "@/redux/feachers/authSlice";
import styles from "./authButton.module.scss";

const AuthButton = () => {
  const [text, setText] = useState("logIn");
  const dispatch = useDispatch<AppDispatch>();

  const onClickLogin = () => {
    dispatch(logIn("User name"));
  };
  return (
    <button className={styles.button} onClick={onClickLogin}>
      {text}
    </button>
  );
};

export default AuthButton;
