'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="my-4">
      <p className="text-lg">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-2 bg-blue-600 text-white px-4 py-1 rounded"
      >
        Increment
      </button>
    </div>
  );
}