import React from "react";
import s from "../../styles/Main.module.css";

export const Statistic = function ({ user }) {
  return (
    <div className={s.statistic}>
      <div className={s.item}>
        <span className={s.title}>Норматив</span>
        <span>100%</span>
      </div>

      <div className={s.line} />

      <div className={s.item}>
        <span className={s.title}>Результат</span>
        {user.result < 100 ? (
          <span className={s.redRes}>{user.result}%</span>
        ) : user.result === 100 ? (
          <span className={s.yellowRes}>{user.result}%</span>
        ) : (
          <span className={s.greenRes}>{user.result}%</span>
        )}
      </div>

      <div className={s.line} />

      <div className={s.item}>
        <span className={s.title}>Премия</span>
        <span className={s.bonus}>{user.bonus}Р</span>
      </div>
    </div>
  );
};
