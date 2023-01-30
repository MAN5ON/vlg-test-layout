import React from "react";
import { Buttons } from "./Buttons";
import { Statistic } from "./Statistic";
import { Status } from "./Status";

import goals from "../../img/buttons/goalMap.svg";
import smartTasks from "../../img/buttons/smartTasks.svg";
import grades from "../../img/buttons/grades.svg";
import messages from "../../img/buttons/messages.svg";
import reports from "../../img/buttons/reports.svg";
import bonus from "../../img/buttons/bonus.svg";

import s from "../../styles/Main.module.css";

export const Main = function ({ user }) {
  //массив объектов для кнопок
  const buttons = [
    { id: 0, imgSrc: goals, text: "Карта целей" },
    { id: 1, imgSrc: smartTasks, text: "SMART Задачи" },
    { id: 2, imgSrc: grades, text: "Оценки" },
    { id: 3, imgSrc: messages, text: "Сообщения" },
    { id: 4, imgSrc: reports, text: "Отчёты" },
    { id: 5, imgSrc: bonus, text: "Премия" },
  ];

  return (
    <div className={s.main}>
      <Statistic user={user} />

      <div className={s.buttons}>
        {buttons.map(function (btn) {
          return (
            <Buttons
              key={btn.id}
              imgSrc={btn.imgSrc}
              name={btn.text}
            />
          );
        })}
      </div>
      <Status />
    </div>
  );
};
