import './App.css';
import Main from "./components/Main";
import CronTabs from "./components/Tabs";
import {useRepeatStore} from "./core/store";
import {cronObject} from "./core/interfaces";
function App() {
  let name = useRepeatStore((state: cronObject) => state.name)
  let cron = useRepeatStore((state: cronObject) => state.cron)
  return (
    <div className="App">
        <Main value={cron} label="Строка крон"/>
        <Main value={name} label="Описание"/>
        <CronTabs/>
    </div>
  );
}

export default App;
