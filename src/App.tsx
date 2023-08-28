import './App.css';
import Main from "./components/Main.tsx";
import CronTabs from "./components/Tabs.tsx";
import {useRepeatStore} from "./core/store.tsx";
function App() {
  let name = useRepeatStore(state => state.name)
  let cron = useRepeatStore(state => state.cron)
  return (
    <div className="App">
        <Main value={cron} label="Строка крон"/>
        <Main value={name} label="Описание"/>
        <CronTabs/>
    </div>
  );
}

export default App;
