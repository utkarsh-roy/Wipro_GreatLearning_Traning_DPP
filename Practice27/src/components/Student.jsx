import React, { useState } from 'react'

export default function Student() {
  // marks are out of 500
  const [students] = useState([
    { id: 1, name: 'Utkarsh', roll: '1', marks: 475 },
    { id: 2, name: 'Yash', roll: '2', marks: 375 },
    { id: 3, name: 'Mayank', roll: '3', marks: 400 },
    { id: 45, name: 'Aman', roll: '4', marks: 390 }, 
  ])

  const percent = (marks) => Math.round((marks / 500) * 100)

  return (
    <div>
      <h2>Students</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{percent(s.marks)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

