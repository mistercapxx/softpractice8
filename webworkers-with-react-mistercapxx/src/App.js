import { useEffect, useState } from "react";
import "./App.css";


//Note: please, do dot change placeholder and data-testid attributes

function App() {

  const [result, setResult] = useState("Result : 0");
  const worker = new Worker("worker.js"); 

  const calculate = () => {
    const input = document.querySelector("input").value;
    if(input)
    {
      setResult("Calculating...")
      worker.postMessage({chinazes:parseInt(input)});  
    };

  };

    // Устанавливаем обработчик события для сообщения, отправленного из воркера
    worker.onmessage = (event) => {
      // Получаем результат из сообщения и обновляем состояние результата
      setResult(`Result of Fibo: ${event.data}`);
    };


  return (
    <div className="app">
      <h1>Fibonacci 🌀</h1>
      <input type="number" placeholder="Insert a number" />
      <button onClick={calculate}>Calculate</button>
      <div className="result" data-testid="result">{result}</div>
    </div>
  );
}

export default App;
