import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MapPage from "./pages/MapPage";
import AIPage from "./pages/AIPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ai" element={<AIPage />} />
      <Route path="/map" element={<MapPage />} />
    </Routes>
  );
}

export default App;