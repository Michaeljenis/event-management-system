import { useState } from "react";

export default function DeleteEvent() {
  const [del, setDel] = useState(0);
  const [msg, setMsg] = useState("");

  function delete_event() {
    fetch(`http://localhost:8081/events/${del}`, { method: "DELETE" })
      .then(res => res.text())
      .then(data => setMsg("Deleted Successfully"))
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-800">
      <h1 className="text-xl font-bold p-2 text-blue-800">Delete Event</h1>
      {msg && <p className="text-red-600 p-2">{msg}</p>}
      <form className="p-6 gap-5 flex flex-col">
        <input className="border border-gray-300 rounded p-2" placeholder="Registration Number" type="text" onChange={(e) => setDel(Number(e.target.value))} />
      </form>
      <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" onClick={delete_event}>DELETE</button>
    </div>
  );
}