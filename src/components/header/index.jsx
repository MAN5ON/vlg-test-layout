import React from "react";
import { DateField } from "./DateField";
import { UserCard } from "./UserCard";

import s from "../../styles/Header.module.css";

export const Header = function ({ user }) {
  return (
    <div className={s.header}>
      <DateField />
      <UserCard user={user} />
    </div>
  );
};
