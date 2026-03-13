import React, { useState } from "react";

export default function NumArrary() {
  const [nums] = useState([3, 4, 5, 6, 9, 10, 23, 30, 44, 54, 66, 52]);

  const evenList = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenList.push(<li key={i}>{nums[i]}</li>);
    }
  }

  return (
    <div>
      <h2>Even Numbers</h2>
      <ul>{evenList}</ul>
    </div>
  );
}
