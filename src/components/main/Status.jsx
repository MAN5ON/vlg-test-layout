import React from "react";

import s from "../../styles/Status.module.css";

export const Status = () => {
  return (
    <div className={s.status}>
      <div className={s.barHeader}>
        <div>Текущий статус:</div>
        <div
          className={s.statusNow}
          onClick={function () {
            alert("Current status");
          }}
        >
          Работаю
        </div>
      </div>
      <div className={s.statusBar}>
        <div className={s.planBar}/>
        <div className={s.factBar} />
      </div>
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
