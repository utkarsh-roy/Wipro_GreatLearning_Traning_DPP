import React, { useState } from "react";

export default function Table() {
  const [num, setNum] = useState(2);

  const rows = [];

  for (let i = 1; i <= 10; i++) {
    rows.push(
      <tr key={i}>
        <td>{num} × {i}</td>
        <td>{num * i}</td>
      </tr>
    );
  }

  return (
    <div>
      <h2>Tables</h2>

      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <table border="1">
        <thead>
          <tr>
            <th>Table</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}