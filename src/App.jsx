import { Buttons } from "./components/Buttons";
import { UserCard } from "./components/UserCard";
import { DateField } from "./components/DateField";
import { Statistic } from "./components/Statistic";
import { Status } from "./components/Status";

import "./styles/App.css";

function App() {
  return (
    <div className='App'>
      <DateField />
      <UserCard />
      <Statistic />
      <Buttons />
      <Status />
    </div>
  );
}

export default App;
