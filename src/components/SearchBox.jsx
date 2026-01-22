import { useState } from "react";

function SearchBox({ setResult }) {
  const [disease, setDisease] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isDisabled = loading || !disease.trim();

  const handleSearch = async () => {
    if (!disease.trim()) return;
    
    setLoading(true);
    setError("");
    setResult(null);

    try { 
      const res = await fetch("https://prescription-search-backend.onrender.com/classify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ disease })
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();
      setResult(data);

    } catch (err) {
      setError("Unable to fetch result. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isDisabled) {
      handleSearch();
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter disease name (e.g. Diabetes)"
        value={disease}
        onChange={(e) => setDisease(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSearch} disabled={isDisabled}>
        {loading ? "Searching..." : "Search"}
      </button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default SearchBox;
