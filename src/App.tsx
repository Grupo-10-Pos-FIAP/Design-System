import { Button } from './components/Button';
import Dropdown from "./components/Dropdown/Dropdown";
import React from "react";


const options = ["Opção 1", "Opção 2", "Opção 3"];

const handleSelect = (value: string) => {
  console.log("Selecionado:", value);
};

function App() {
  return (
    <div className="app">
      <Dropdown 
        options={options} 
        onSelect={handleSelect} 
      />
      <Button onClick={() => alert('Hello World!')} variant="primary" label="Click here" />
    </div>
  );
}

export default App;
