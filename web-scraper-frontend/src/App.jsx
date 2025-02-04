import "./App.css";
import DataDisplay from "./Data";

import { useState } from "react";

async function scrapeUrl(url, setData) {
  console.log(url);
  await fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });
  await loadData(setData);
}

async function loadData(setData) {
  const data = await fetch("/api/results");
  const { results } = await data.json();
  setData(results);
}

function App() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  return (
    <>
      <h1>Enter a url to scrape</h1>
      <div className="input_div">
        <input
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          type="text"
          value={url}
        />
        <button onClick={() => scrapeUrl(url, setData)}>Scrape URL</button>
      </div>
      <button onClick={() => loadData(setData)}>Refresh data</button>
      <DataDisplay data={data} />
    </>
  );
}

export default App;
