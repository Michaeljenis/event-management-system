import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DisplayAll from "./DisplayAll";
import PostEvent from "./PostEvent";
import UpdateEvent from "./UpdateEvent";
import DeleteEvent from "./DeleteEvent";
import EvenEvents from "./EvenEvents";

export default function App() {
  return (
    <Router>
      <div className="max-w-3xl mx-auto p-6 font-sans text-gray-800">
        <h1 className="text-4xl font-bold p-8 text-blue-600 text-center">EVENT MANAGER</h1>
        
        {/* Navigation Bar using your button styles */}
        <nav className="flex flex-wrap gap-4 justify-center mb-10">
          <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View All</Link>
          <Link to="/post" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add New</Link>
          <Link to="/update" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Update</Link>
          <Link to="/delete" className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">Delete</Link>
          <Link to="/even" className="bg-yellow-500 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded">Even RNo</Link>
        </nav>

        <Routes>
          <Route path="/" element={<DisplayAll />} />
          <Route path="/post" element={<PostEvent />} />
          <Route path="/update" element={<UpdateEvent />} />
          <Route path="/delete" element={<DeleteEvent />} />
          <Route path="/even" element={<EvenEvents />} />
        </Routes>
      </div>
    </Router>
  );
}