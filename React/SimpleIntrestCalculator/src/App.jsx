import { useState } from 'react';

function App() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [interest, setInterest] = useState(null);

  const calculateInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);
    if (!isNaN(p) && !isNaN(r) && !isNaN(t)) {
      setInterest((p * r * t) / 100);
    } else {
      setInterest(null);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Simple Interest Calculator</h1>
      <div className="row g-3">
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Principal (P)"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Rate (% per year)"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Time (years)"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>
      <button className="btn btn-primary mt-3" onClick={calculateInterest}>
        Calculate
      </button>
      {interest !== null && (
        <div className="alert alert-success mt-3" role="alert">
          Simple Interest: <strong>{interest.toFixed(2)}</strong>
        </div>
      )}
    </div>
  );
}

export default App;
