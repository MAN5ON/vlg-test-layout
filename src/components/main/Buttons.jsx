import React from "react";
import s from "../../styles/Button.module.css";

export const Buttons = function ({ imgSrc, name }) {
  return (
    <div className={s.button}>
      <img src={imgSrc} className={s.btnImgSrc} />
      <div className={s.btnName}>{name}</div>
    </div>
  );
};
