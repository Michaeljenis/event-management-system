import { useState } from "react";

export default function UpdateEvent() {
  const [update, setUpdate] = useState({ rNo: 0, eventName: "" });
  const [msg, setMsg] = useState("");

  function update_val() {
    fetch(`http://localhost:8081/events/${update.rNo}`, { method: "PUT", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(update) })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMsg("Updated Successfully");
  })
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-800">
      <h1 className="text-xl font-bold p-2 text-blue-800">Update Event</h1>
      {msg && <p className="text-green-600 p-2">{msg}</p>}
      <form className="grid grid-cols-1 p-4 gap-4">
        <input className="border border-gray-300 rounded p-2" placeholder="Registration Number" type="text" onChange={(e) => setUpdate({ ...update, rNo: Number(e.target.value) })} />
        <input className="border border-gray-300 rounded p-2" placeholder="Event Name" type="text" onChange={(e) => setUpdate({ ...update, eventName: e.target.value })} />
      </form>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={update_val}>UPDATE</button>
    </div>
  );
}