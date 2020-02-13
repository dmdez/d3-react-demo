import * as React from "react";
import "./styles.css";
import PieChart from "./components/PieChart";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <PieChart
        size={300}
        data={[
          {
            name: "👀",
            value: 234,
            color: "#ff9900"
          },
          {
            name: "👆",
            value: 56,
            color: "#0099ff"
          },
          {
            name: "🍻",
            value: 15,
            color: "#00ff00"
          },
          {
            name: "💔",
            value: 25,
            color: "#ff66ff"
          }
        ]}
      />
    </div>
  );
}
