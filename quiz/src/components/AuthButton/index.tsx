"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { logIn, logOut } from "@/redux/feachers/authSlice";

const AuthButton = () => {
  const [text, setText] = useState("logIn");
  const dispatch = useDispatch<AppDispatch>();

  const onClickLogin = () => {
    dispatch(logIn("User name"));
  };
  return <button onClick={onClickLogin}>{text}</button>;
};

export default AuthButton;
