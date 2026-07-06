import { useState } from "react";

export default function EvenEvents() {
  const [even, setEven] = useState<any[]>([]);

  function even_rNo() {
    fetch("http://localhost:8081/events/even", { method: "GET" })
      .then(res => res.json())
      .then(data => setEven(data))
  }

  return (
    <div className="border border-gray-800 rounded-lg p-5 shadow-md bg-white">
      <button className="font-semibold bg-yellow-500 rounded hover:bg-yellow-800 py-2 px-4 text-white mb-4" onClick={even_rNo}>DISPLAY EVEN RNO</button>
      {even.map((item, index) => (
        <ul className="border border-gray-300 rounded p-2 mb-2" key={index}>
          <li>{item.name}</li>
          <li>{item.rNo}</li>
          <li>{item.eventName}</li>
          <li>{item.eventLocation}</li>
          <li>{item.eventDescription}</li>
        </ul>
      ))}
    </div>
  );
}