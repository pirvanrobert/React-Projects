import React, { useState } from "react";

const App = () => {
  const [temperature, setTemperature] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("");

  const increment = () => {
    if (temperature === 30) return;
    const newTemperature = temperature + 1;
    if (newTemperature >= 15) {
      setTemperatureColor("hot");
    }
    setTemperature(newTemperature);
  };

  const decrement = () => {
    if (temperature === -30) return;
    const newTemperature = temperature - 1;
    if (newTemperature <= 15) {
      setTemperatureColor("cold");
    }
    setTemperature(newTemperature);
  };
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperature}°C
        </div>
      </div>

      <div className="buttons-container">
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
      </div>
    </div>
  );
};

export default App;
