import React from "react";

import s from "../../styles/Header.module.css";

export const UserCard = function ({ user }) {
  return (
    <div className={s.userCard}>
      <img src={user.avatarURL} className={s.avatar} />
      <div className={s.personal}>
        <div className={s.fullName}>{user.fullName}</div>
        <div className={s.position}>{user.position}</div>
      </div>
    </div>
  );
};
