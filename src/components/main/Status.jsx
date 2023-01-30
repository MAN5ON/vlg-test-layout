import React from "react";

import statusBar from "../../img/status/status-bar.svg";
import s from "../../styles/Status.module.css";

export const Status = () => {
  return (
    <div className={s.status}>
      <div className={s.barHeader}>
        <div>Текущий статус:</div>
        <div>Работаю</div>
      </div>
      <img src={statusBar} className={s.statusBar} />
      <div className={s.barFooter}>
        <div className={s.bar}>
          <div id="plan" className={s.cube} />
          <div className={s.barText}>план: 176ч.</div>
        </div>
        <div className={s.bar}>
          <div id="fact" className={s.cube} />
          <div className={s.barText}>факт: 100ч.</div>
        </div>
      </div>
    </div>
  );
};
