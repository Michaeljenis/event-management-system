import { useState } from "react";

export default function DisplayAll() {
  const [result, setResult] = useState<any[]>([]);
  function display() {
    fetch("http://localhost:8081/events/", { method: "GET" })
      .then(res => res.json())
      .then(data => setResult(data))
  }

  return (
    <div className="bg-white shadow-md rounded-lg border border-gray-800 p-6">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={display}> Display Events </button>
      {result.map((item, index) => (
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