import { useEffect, useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex items-center gap-x-4">
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
        className="border-2 rounded-md h-6 w-6 flex justify-center items-center hover:bg-red-400 transition-all"
      >
        -
      </button>
      <div className="flex flex-col items-center">
        <h2>Counter</h2>
        <p>{counter}</p>
      </div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
        className="border-2 rounded-md h-6 w-6 flex justify-center items-center hover:bg-green-400 transition-all"
      >
        +
      </button>
    </div>
  );
}
