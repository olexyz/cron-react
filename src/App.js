import './App.css';
import Main from "./components/Main";
import {useState} from "react";
import CronTabs from "./components/Tabs";

function App() {
    const [value, setValue] = useState('* * * * * * *');
    const createCronString = (newValue) =>{
        console.log(newValue)
        setValue(newValue);
    }
  return (
    <div className="App">
      <Main value={value}/>
      <CronTabs change={createCronString} />
    </div>
  );
}

export default App;
