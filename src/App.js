import './App.css';
import Main from "./components/Main";
import {useState} from "react";

function App() {
  const [value, setValue] = useState('* * * * * * *');
  return (
    <div className="App">
      <Main value={value}/>
    </div>
  );
}

export default App;
