import "./App.css";
import Authentication from "./pages/Authentication/Authentication";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Message from "./pages/Message/Message";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/register" element={<Authentication />} />
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
