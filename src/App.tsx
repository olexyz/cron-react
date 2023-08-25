import './App.css';
import Main from "./components/Main.tsx";
import {useState} from "react";
import CronTabs from "./components/Tabs.tsx";

function App() {
    const [value, setValue] = useState('* * * * * * *');
    const createCronString = (newValue: string) =>{
        setValue(newValue);
    }
  return (
    <div className="App">
        <Main value={'* * * * * * *'} label="Строка крон"/>
        <Main value={value} label="Описание"/>
        <CronTabs change={createCronString} />
    </div>
  );
}

export default App;
