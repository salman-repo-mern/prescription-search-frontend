import { useState } from "react";
import SearchBox from "./components/SearchBox";
import ResultCard from "./components/ResultCard";
import "./styles.css";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="app">
      <h1 className="title">Search Speciality</h1>
      <p className="subtitle">
        Disease → Lab or Speciality Classification
      </p>

      <SearchBox setResult={setResult} />

      {result && <ResultCard result={result} />}

      <p className="disclaimer">
        * This tool provides informational of the Speciality under the Disease comes.
      </p>
      <div className="credit">
        Designed & Developed <br /> By <span> Salman</span>
      </div>
    </div>
  );
}

export default App;
