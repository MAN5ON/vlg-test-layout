import React from "react";

import arrow_i from "../../img/header/right-arrow.svg";
import downArrow_i from "../../img/header/down-arrow.svg";
import person_i from "../../img/header/person.svg";

import s from "../../styles/Header.module.css";

export const DateField = function () {
  return (
    <div className={s.dateField}>
      <div className={s.datePicker}>
        <img src={arrow_i} className={s.leftArrow} />
        <div className={s.dateInterval}>Апрель 2021г.</div>
        <img src={arrow_i} className={s.rightArrow} />
      </div>

      <div className={s.icons}>
        <img src={downArrow_i} className={s.downArrow} />
        <img src={person_i} className={s.person} />
      </div>
    </div>
  );
};
