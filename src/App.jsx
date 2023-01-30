import React from "react";
import { Header } from "./components/header";
import { Main } from "./components/main";

import avatar from "./img/header/image.svg";
import "./styles/App.css";

function App() {
  //объект имитирующий fetch запрос к серверу с информацией о пользователе
  const user = {
    avatarURL: avatar,
    fullName: "Лимаренко Александр Валерьевич",
    position: "Программист 1С",
    result: 102.5,
    bonus: 77330,
  };

  return (
    <div className="App">
      <Header user={user} />
      <Main user={user} />
    </div>
  );
}

export default App;
