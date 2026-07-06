import { useState } from "react";

export default function PostEvent() {
  const [input, setInput] = useState<any>({ name: "", rNo: 0, eventName: "", eventLocation: "", eventDescription: "" });
  const [msg, setMsg] = useState("");

  function input_val() {
    fetch("http://localhost:8081/events/", { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(input) })
      .then(res => res.json())
      .then(data => setMsg("Successfully posted!"))
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-800">
      <h1 className="font-bold text-xl p-2 text-blue-800">Enter details to POST</h1>
      {msg && <p className="text-green-600 p-2">{msg}</p>}
      <form className="grid grid-cols-1 gap-4 p-5">
        <input className="border border-gray-300 rounded p-2" placeholder="Name" type="text" onChange={(e) => setInput({ ...input, name: e.target.value })} />
        <input className="border border-gray-300 rounded p-2" placeholder="Registration Number" type="text" onChange={(e) => setInput({ ...input, rNo: Number(e.target.value) })} />
        <input className="border border-gray-300 rounded p-2" placeholder="Event Name" type="text" onChange={(e) => setInput({ ...input, eventName: e.target.value })} />
        <input className="border border-gray-300 rounded p-2" placeholder="Event Location" type="text" onChange={(e) => setInput({ ...input, eventLocation: e.target.value })} />
        <input className="border border-gray-300 rounded p-2" placeholder="Event Description" type="text" onChange={(e) => setInput({ ...input, eventDescription: e.target.value })} />
      </form>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={input_val}>POST</button>
    </div>
  );
}