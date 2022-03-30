import { useState } from "react";

export default function UseState() {

  const [arr, setArr] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);

  return (
    <div>
      <div>
        <button
          onClick={() => setArr([...arr, arr.length + 1])}
          name="hola"
        >
          Add to array
        </button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={() => setName(!name ? "jack" : null)}>Set name</button>
        {JSON.stringify(name)}
      </div>
    </div>
  );
}
