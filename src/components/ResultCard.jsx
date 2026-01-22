function ResultCard({ result }) {
  return (
    <div className="result-card">

      <div className={`badge ${result.type.toLowerCase()}`}>
        {result.type}
      </div>

      <p className="value">{result.value}</p>
    </div>
  );
}

export default ResultCard;
